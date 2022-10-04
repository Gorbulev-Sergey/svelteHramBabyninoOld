<script>
	// @ts-nocheck
	import { db } from '$lib/scripts/firebase';
	import { onValue, push, query, ref } from 'firebase/database';
	import { onMount } from 'svelte';
	import ComponentPost from '$lib/components/post/ComponentPost.svelte';
	import { Post } from '$lib/models/Post';

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
		<div class="col-3"><ComponentPost post={item} /></div>
	{/each}
</div>
