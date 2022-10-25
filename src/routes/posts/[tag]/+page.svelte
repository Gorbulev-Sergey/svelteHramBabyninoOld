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

	function getData() {
		onValue(ref(db, 'tags/'), (s) => {
			tags = Object.values(s.val());
			console.log(tags);
		});
		onValue(ref(db, 'posts/'), (s) => {
			// ВАЖНЫЙ ФИЛЬТР: фильтруем публикации по динамическому параметру url
			posts = Object.values(s.val()).filter((i) =>
				i.tags?.some((t) => t.name === $page.params.tag)
			);
		});
	}

	onMount(async () => getData());
</script>

<ComponentPageTitle title={$page.params.tag[0].toUpperCase() + $page.params.tag.slice(1)}>
	<div slot="navigation" class="btn-group btn-group-sm">
		{#each tags as item}
			<button
				class="btn btn-light {item.name == $page.params.tag ? 'active' : ''}"
				on:click={async () => {
					goto(`/posts/${item.name}`).then(() => getData());
				}}>{item.name}</button
			>
		{/each}
	</div>
</ComponentPageTitle>

<!--Для закреплённых-->
<div class="row">
	<div class="col-md-8">
		{#each posts as item, i}
			{#if item.pinned && item.published && i % 2 != 0}
				<ComponentPostHorizontal bind:post={item} onClickTag={async () => getData()} />
			{/if}
		{/each}
	</div>
	<div class="col-md-4">
		{#each posts as item, i}
			{#if item.pinned && item.published && i % 2 == 0}
				<ComponentPost bind:post={item} onClickTag={async () => getData()} />
			{/if}
		{/each}
	</div>
</div>

<!--Для не закреплённых-->
<div class="row">
	<div class="col-md-4">
		{#each posts as item, i}
			{#if !item.pinned && item.published && i % 2 != 0}
				<ComponentPost bind:post={item} onClickTag={async () => getData()} />
			{/if}
		{/each}
	</div>
	<div class="col-md-8">
		{#each posts as item, i}
			{#if !item.pinned && item.published && i % 2 == 0}
				<ComponentPostHorizontal bind:post={item} onClickTag={async () => getData()} />
			{/if}
		{/each}
	</div>
</div>
