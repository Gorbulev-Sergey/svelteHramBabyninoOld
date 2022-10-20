<script>
	// @ts-nocheck
	import { db } from '$lib/scripts/firebase';
	import { onValue, push, query, ref } from 'firebase/database';
	import { onMount } from 'svelte';
	import { Post } from '$lib/models/Post';
	import ComponentPost from './ComponentPost.svelte';

	let posts = [];

	onMount(() => {
		// push(
		// 	ref(db, 'posts'),
		// 	new Post('Заголовок', '', 'Описание', '', '2022-10-04', false, null, null, 1)
		// );
		onValue(ref(db, '/posts'), (s) => {
			posts = Object.values(s.val());
			console.log(posts);
		});
	});
</script>

<div class="row">
	{#each posts as item}
		<div class="col col-md-3">
			<ComponentPost bind:post={item} />
		</div>
		<div class="col col-md-9">
			<ComponentPost bind:post={item} />
			<ComponentPost bind:post={item} />
			<ComponentPost bind:post={item} />
		</div>
	{/each}
</div>
