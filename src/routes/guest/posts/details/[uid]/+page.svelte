<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Post as _Post } from '$lib/models/Post';
	import { db } from '$lib/scripts/firebase';
	import { onValue, ref } from 'firebase/database';
	import { onMount } from 'svelte';

	let post = new _Post();
	onMount(async () => {
		onValue(ref(db, `/posts/${$page.params.uid}`), (s) => {
			if (s.exists()) post = s.val();
		});
	});
</script>

<div class="d-flex justify-content-between align-items-center">
	<div class="d-flex justify-content-between align-items-center">
		<button
			class="btn btn-primary text-dark"
			on:click={() => goto(`${$page.url.searchParams.get('returnUrl')}/#${$page.params.uid}`)}
			><i class="fa-solid fa-circle-arrow-left" /></button
		>
		<h4 class="text-dark ms-3 my-0 py-0">{post.title}</h4>
	</div>
</div>

<div class="bg-light text-dark rounded p-3 my-3">
	<div class="text-end mb-2">
		<div class="small text-danger">
			{new Date(post.created).getDate()}
			{new Date(post.created).monthName()}
			{new Date(post.created).getFullYear()}
		</div>
	</div>
	{@html post.content}
</div>
