<script>
	// @ts-nocheck
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { db } from '$lib/scripts/firebase';
	import { onValue, push, query, ref } from 'firebase/database';
	import { onMount } from 'svelte';
	import Post from '../Post.svelte';
	import PostHorizontal from '../PostHorizontal.svelte';

	let tags = new Array();
	let posts = new Array();
	$: filterPosts = () => {
		// ВАЖНЫЙ ФИЛЬТР: фильтруем публикации по динамическому параметру url
		return posts.filter((i) => i.tags?.some((t) => t.name === $page.params.tag));
	};

	onMount(async () => {
		onValue(ref(db, 'tags/'), (s) => {
			tags = Object.values(s.val());
		});
		onValue(ref(db, 'posts/'), (s) => {
			posts = Object.values(s.val());
		});
	});
</script>

<PageTitle title={$page.params.tag[0].toUpperCase() + $page.params.tag.slice(1)}>
	<div slot="navigation" class="btn-group btn-group-sm">
		{#each tags as item}
			<button
				class="btn btn-light {item.name == $page.params.tag ? 'active' : ''}"
				on:click={async () => {
					goto(`/posts/${item.name}`);
				}}>{item.name}</button
			>
		{/each}
	</div>
</PageTitle>

<!--Для закреплённых-->
<div class="row mb-2 gx-4">
	<div class="col-md-8">
		{#each filterPosts() as item, i}
			{#if item.pinned && item.published && i % 2 != 0}
				<PostHorizontal bind:post={item} />
			{/if}
		{/each}
	</div>
	<div class="col-md-4">
		{#each filterPosts() as item, i}
			{#if item.pinned && item.published && i % 2 == 0}
				<Post bind:post={item} />
			{/if}
		{/each}
	</div>
</div>

<!--Для не закреплённых-->
<div class="row gx-4">
	<div class="col-md-4">
		{#each filterPosts() as item, i}
			{#if !item.pinned && item.published && i % 2 != 0}
				<Post bind:post={item} />
			{/if}
		{/each}
	</div>
	<div class="col-md-8">
		{#each filterPosts() as item, i}
			{#if !item.pinned && item.published && i % 2 == 0}
				<PostHorizontal bind:post={item} />
			{/if}
		{/each}
	</div>
</div>
