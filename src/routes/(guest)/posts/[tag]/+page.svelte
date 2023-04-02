<script>
	// @ts-nocheck
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { db } from '$lib/scripts/firebase';
	import { onValue, push, query, ref } from 'firebase/database';
	import { onMount } from 'svelte';
	import Post from '$lib/components/posts/Post.svelte';
	import Spinner from '$lib/components/Spinner.svelte';
	import { mapShowedPostsLength, showedPostsStep } from '$lib/scripts/writableData';
	import PostHorizontal from '$lib/components/posts/PostHorizontal.svelte';

	let tags = new Array();
	let mapPosts = new Array();
	$: mapFilteredPosts = mapPosts
		.filter(([k, v]) => v.tags?.some(t => t.name === $page.params.tag))
		.sort(([k1, v1], [k2, v2]) => new Date(v2.created) - new Date(v1.created));
	$: mapShowedPosts = mapFilteredPosts.slice(0, $mapShowedPostsLength.get($page.params.tag));

	$: title = $page.params.tag[0].toUpperCase() + $page.params.tag.slice(1);
	$: keywords = `бабынино храм ${title}, храм бабынино ${title}`;

	onMount(async () => {
		onValue(ref(db, '/tags'), s => {
			tags = s.val();
		});
		onValue(ref(db, '/posts'), s => {
			mapPosts = Object.entries(s.val()).filter(([k, v]) => v.published);
		});
	});
</script>

<PageTitle {title} description={title} {keywords}>
	<div slot="navigation" class="btn-group btn-group-sm flex-nowrap overflow-auto scroll mt-md-0 mt-1">
		{#each tags as item}
			<button
				class="btn btn-light text-nowrap {item.name == $page.params.tag ? 'active' : ''}"
				on:click={async () => {
					goto(`/posts/${item.name}`);
				}}>{item.name}</button>
		{/each}
	</div>
</PageTitle>

{#if mapPosts.length > 0}
	{#if mapShowedPosts.filter(([k, v]) => v.pinned)}
		<div class="mb-3">
			<!--Для закреплённых-->
			<div>
				{#each mapShowedPosts.filter(([k, v]) => v.pinned && v.isHorisontal) as [uid, post], i}
					<PostHorizontal {uid} bind:post />
				{/each}
			</div>
			<!--Для закреплённых-->
			<div class="row row-cols-1 row-cols-md-3 g-3 flex-row-reverse">
				{#each mapShowedPosts.filter(([k, v]) => v.pinned && !v.isHorisontal) as [uid, post], i}
					<Post {uid} bind:post />
				{/each}
			</div>
		</div>
	{/if}

	<!--Для не закреплённых-->
	<div class="row row-cols-1 row-cols-md-3 g-3">
		{#each mapShowedPosts.filter(([k, v]) => !v.pinned) as [uid, post], i}
			<Post {uid} bind:post />
		{/each}
	</div>

	{#if $mapShowedPostsLength.get($page.params.tag) < mapFilteredPosts.length}
		<button
			class="btn btn-light text-dark mt-3 w-100"
			on:click={() => {
				$mapShowedPostsLength.set($page.params.tag, $mapShowedPostsLength.get($page.params.tag) + showedPostsStep);
				mapShowedPosts = mapFilteredPosts.slice(0, $mapShowedPostsLength.get($page.params.tag));
			}}>Загрузить ещё...</button>
	{/if}
{:else}
	<Spinner />
{/if}

<style>
	.scroll::-webkit-scrollbar {
		height: 0;
	}
</style>
