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
	import AfterBreakpoint from '$lib/components/Breakpoint/AfterBreakpoint.svelte';
	import BeforeBreakpoint from '$lib/components/Breakpoint/BeforeBreakpoint.svelte';

	let tags = new Array();
	let posts = new Array();
	$: filterPosts = () => {
		// ВАЖНЫЙ ФИЛЬТР: фильтруем публикации по динамическому параметру url
		return posts.filter((i) => i.tags?.some((t) => t.name === $page.params.tag));
	};

	let checkIndex = (i, array = new Array()) => array.includes(Number(String(i).substring(-1)));

	onMount(async () => {
		onValue(ref(db, 'tags/'), (s) => {
			tags = Object.values(s.val());
		});
		onValue(ref(db, 'posts/'), (s) => {
			posts = Object.values(s.val())
				.filter((i) => i.published)
				.reverse();
		});
	});
</script>

<PageTitle title={$page.params.tag[0].toUpperCase() + $page.params.tag.slice(1)}>
	<div
		slot="navigation"
		class="btn-group btn-group-sm flex-nowrap mt-md-0 mt-1 overflow-auto scroll"
	>
		{#each tags as item}
			<button
				class="btn btn-light {item.name == $page.params.tag ? 'active' : ''}"
				on:click={async () => {
					goto(`/guest/posts/${item.name}`);
				}}>{item.name}</button
			>
		{/each}
	</div>
</PageTitle>

<!--Для закреплённых-->
<div class="row mb-2 gx-4">
	<div class="col-md-8">
		{#each filterPosts().filter((p) => p.pinned) as item, i}
			{#if item.pinned && checkIndex(i, [1, 2, 4, 6, 7, 9])}
				<AfterBreakpoint>
					<PostHorizontal bind:post={item} />
				</AfterBreakpoint>
				<BeforeBreakpoint>
					<Post bind:post={item} />
				</BeforeBreakpoint>
			{/if}
		{/each}
	</div>
	<div class="col-md-4">
		{#each filterPosts().filter((p) => p.pinned) as item, i}
			{#if item.pinned && checkIndex(i, [0, 3, 5, 8])}
				<Post bind:post={item} />
			{/if}
		{/each}
	</div>
</div>

<!--Для не закреплённых-->
<div class="row gx-4">
	<div class="col-md-4">
		{#each filterPosts().filter((p) => !p.pinned) as item, i}
			{#if !item.pinned && checkIndex(i, [0, 3, 5, 8])}
				<Post bind:post={item} />
			{/if}
		{/each}
	</div>
	<div class="col-md-8">
		{#each filterPosts().filter((p) => !p.pinned) as item, i}
			{#if !item.pinned && checkIndex(i, [1, 2, 4, 6, 7, 9])}
				<AfterBreakpoint>
					<PostHorizontal bind:post={item} />
				</AfterBreakpoint>
				<BeforeBreakpoint>
					<Post bind:post={item} />
				</BeforeBreakpoint>
			{/if}
		{/each}
	</div>
</div>

<style>
	.scroll::-webkit-scrollbar {
		height: 0;
	}
</style>
