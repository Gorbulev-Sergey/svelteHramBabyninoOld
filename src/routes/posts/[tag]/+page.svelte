<script>
	import { page } from '$app/stores';

	// @ts-nocheck
	import ComponentPageTitle from '$lib/components/ComponentPageTitle.svelte';
	import { db } from '$lib/scripts/firebase';
	import { onValue, push, query, ref } from 'firebase/database';
	import { onMount } from 'svelte';
	import ComponentPost from '../ComponentPost.svelte';
	import ComponentPostHorizontal from '../ComponentPostHorizontal.svelte';
	let posts = new Array();

	onMount(async () => {
		onValue(ref(db, '/posts'), (s) => {
			// ВАЖНЫЙ ФИЛЬТР: фильтруем публикации по динамическому параметру url
			posts = Object.values(s.val()).filter((i) =>
				i.tags?.some((t) => t.name === $page.params.tag)
			);
		});
	});
</script>

<ComponentPageTitle title="Публикации" />

<!--Для закреплённых-->
<div class="row">
	<div class="col-md-8">
		{#each posts as item, i}
			{#if item.pinned && item.published && i % 2 != 0}
				<ComponentPostHorizontal bind:post={item} />
			{/if}
		{/each}
	</div>
	<div class="col-md-4">
		{#each posts as item, i}
			{#if item.pinned && item.published && i % 2 == 0}
				<ComponentPost bind:post={item} />
			{/if}
		{/each}
	</div>
</div>

<!--Для не закреплённых-->
<div class="row">
	<div class="col-md-4">
		{#each posts as item, i}
			{#if !item.pinned && item.published && i % 2 != 0}
				<ComponentPost bind:post={item} />
			{/if}
		{/each}
	</div>
	<div class="col-md-8">
		{#each posts as item, i}
			{#if !item.pinned && item.published && i % 2 == 0}
				<ComponentPostHorizontal bind:post={item} />
			{/if}
		{/each}
	</div>
</div>
