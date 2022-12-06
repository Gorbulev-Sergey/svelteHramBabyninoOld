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

<div class="btn-group">
	<button
		class="btn btn-primary text-dark text-nowrap"
		on:click={() => goto(`${$page.url.searchParams.get('returnUrl')}/#${$page.params.uid}`)}
		><i class="fa-solid fa-circle-arrow-left" /></button
	>
	<h4 class="bg-light text-dark text-center my-0 ps-2 pe-3 py-1 rounded-end">{post.title}</h4>
</div>

<div class="bg-light text-dark rounded p-3 my-2">
	<div class="text-end mb-2">
		<div class="small text-danger">
			{new Date(post.created).getDate()}
			{new Date(post.created).monthName()}
			{new Date(post.created).getFullYear()}
		</div>
	</div>
	{@html post.content}
</div>

<div class="btn-group">
	<button
		class="btn btn-primary text-dark text-nowrap"
		on:click={() => goto(`${$page.url.searchParams.get('returnUrl')}/#${$page.params.uid}`)}
		><i class="fa-solid fa-circle-arrow-left" /></button
	>
	<div class="bg-light text-dark text-center ps-2 pe-3 rounded-end" style="padding-top: 0.4em;">
		вернуться к публикациям
	</div>
</div>
