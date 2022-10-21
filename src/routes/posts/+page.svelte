<script>
	// @ts-nocheck
	import ComponentPageTitle from '$lib/components/ComponentPageTitle.svelte';
	import { db } from '$lib/scripts/firebase';
	import { onValue, push, query, ref } from 'firebase/database';
	import { onMount } from 'svelte';
	import ComponentPost from './ComponentPost.svelte';
	import ComponentPostHorizontal from './ComponentPostHorizontal.svelte';

	let posts = [];

	onMount(async () => {
		onValue(ref(db, '/posts'), (s) => {
			posts = Object.values(s.val());
		});
	});
</script>

<ComponentPageTitle title="Публикации" />

<div class="row">
	<div class="col-md-3">
		{#each posts as item}
			{#if !item.published}
				<ComponentPost bind:post={item} />
			{/if}
		{/each}
	</div>
	<div class="col-md-9">
		{#each posts as item, i}
			{#if item.published}
				<ComponentPostHorizontal bind:post={item} />
			{/if}
		{/each}
	</div>
</div>
