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

	let checkIndex = (i, array = new Array()) => array.includes(Number(String(i).substring(-1)));
	let tags = new Array();
	let posts = new Array();

	// ВАЖНЫЙ ФИЛЬТР: фильтруем публикации по динамическому параметру url
	$: filteredPosts = posts
		.filter(i => i.tags?.some(t => t.name === $page.params.tag))
		.sort((a, b) => new Date(b.created) - new Date(a.created));
	$: showedPosts = filteredPosts.slice(0, $mapShowedPostsLength.get($page.params.tag));

	onMount(async () => {
		onValue(ref(db, '/tags'), s => {
			tags = Object.values(s.val());
		});
		onValue(ref(db, '/posts'), s => {
			posts = Object.values(s.val())
				.filter(i => i.published)
				.reverse();
		});
	});
</script>

<PageTitle title={tags.length > 0 ? tags.find(i => i.name == $page.params.tag).description : ''}>
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

{#if posts.length > 0}
	<div class="pt-3">
		<!--Для закреплённых-->
		<div class="row row-cols-1 row-cols-md-3 g-3">
			{#each showedPosts.filter(p => p.pinned) as item, i}
				<Post bind:post={item} />
			{/each}
		</div>

		<!--Для не закреплённых-->
		<div class="row row-cols-1 row-cols-md-3 g-3">
			{#each showedPosts.filter(p => !p.pinned) as item, i}
				<Post bind:post={item} />
			{/each}
		</div>
	</div>

	{#if $mapShowedPostsLength.get($page.params.tag) < filteredPosts.length}
		<button
			class="btn btn-light text-dark w-100"
			on:click={() => {
				$mapShowedPostsLength.set($page.params.tag, $mapShowedPostsLength.get($page.params.tag) + showedPostsStep);
				showedPosts = filteredPosts.slice(0, $mapShowedPostsLength.get($page.params.tag));
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
