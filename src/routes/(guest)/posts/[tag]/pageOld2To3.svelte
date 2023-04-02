<script>
	// @ts-nocheck
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { db } from '$lib/scripts/firebase';
	import { onValue, push, query, ref } from 'firebase/database';
	import { onMount } from 'svelte';
	import Post from '$lib/components/posts/Post.svelte';
	import PostHorizontal from '$lib/components/posts/PostHorizontal.svelte';
	import Spinner from '$lib/components/Spinner.svelte';
	import After from '$lib/components/Breakpoint/After.svelte';
	import Before from '$lib/components/Breakpoint/Before.svelte';
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
			title = tags.find(i => i.name == $page.params.tag).description;
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
	<!--Для закреплённых-->
	<div class="row mb-2 gx-4">
		<div class="col-md-8">
			{#each showedPosts.filter(p => p.pinned) as item, i}
				{#if item.pinned && checkIndex(i, [1, 2, 4, 6, 7, 9])}
					<After>
						<PostHorizontal bind:post={item} />
					</After>
					<Before>
						<Post bind:post={item} />
					</Before>
				{/if}
			{/each}
		</div>
		<div class="col-md-4">
			{#each showedPosts.filter(p => p.pinned) as item, i}
				{#if item.pinned && checkIndex(i, [0, 3, 5, 8])}
					<Post bind:post={item} />
				{/if}
			{/each}
		</div>
	</div>

	<!--Для не закреплённых-->
	<div class="row gx-4">
		<div class="col-md-4">
			{#each showedPosts.filter(p => !p.pinned) as item, i}
				{#if !item.pinned && checkIndex(i, [0, 3, 5, 8])}
					<Post bind:post={item} />
				{/if}
			{/each}
		</div>
		<div class="col-md-8">
			{#each showedPosts.filter(p => !p.pinned) as item, i}
				{#if !item.pinned && checkIndex(i, [1, 2, 4, 6, 7, 9])}
					<After>
						<PostHorizontal bind:post={item} />
					</After>
					<Before>
						<Post bind:post={item} />
					</Before>
				{/if}
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
