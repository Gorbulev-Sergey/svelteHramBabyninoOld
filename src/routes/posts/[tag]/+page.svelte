<script>
	// @ts-nocheck
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import ComponentPageTitle from '$lib/components/ComponentPageTitle.svelte';
	import { db } from '$lib/scripts/firebase';
	import { onValue, push, query, ref } from 'firebase/database';
	import { onMount } from 'svelte';
	import ComponentPost from '../ComponentPost.svelte';
	import ComponentPostHorizontal from '../ComponentPostHorizontal.svelte';

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

<ComponentPageTitle title={$page.params.tag[0].toUpperCase() + $page.params.tag.slice(1)}>
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
</ComponentPageTitle>

<!--Для закреплённых-->
<div class="row mb-2 gx-4">
	<div class="col-md-8">
		{#each filterPosts() as item, i}
			{#if item.pinned && item.published && i % 2 != 0}
				<ComponentPostHorizontal bind:post={item} />
			{/if}
		{/each}
	</div>
	<div class="col-md-4">
		{#each filterPosts() as item, i}
			{#if item.pinned && item.published && i % 2 == 0}
				<ComponentPost bind:post={item} />
			{/if}
		{/each}
	</div>
</div>

<!--Для не закреплённых-->
<div class="row gx-4">
	<div class="col-md-4">
		{#each filterPosts() as item, i}
			{#if !item.pinned && item.published && i % 2 != 0}
				<ComponentPost bind:post={item} />
			{/if}
		{/each}
	</div>
	<div class="col-md-8">
		{#each filterPosts() as item, i}
			{#if !item.pinned && item.published && i % 2 == 0}
				<ComponentPostHorizontal bind:post={item} />
			{/if}
		{/each}
	</div>
</div>
