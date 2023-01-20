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

<button
	class="btn btn-primary text-dark text-nowrap"
	on:click={() => goto(`${$page.url.searchParams.get('returnUrl')}/#${$page.params.uid}`)}
	><i class="fa-solid fa-circle-arrow-left me-1" />...</button
>

<div class="bg-light text-dark rounded my-2">
	<div
		class="d-flex flex-column justify-content-end rounded-top"
		style="background-image: url({post.cover?.image ? post.cover.image : ''});
					 background-repeat: no-repeat; background-position: center; background-size: cover; min-height:14em;"
	>
		<div
			class="d-flex justify-content-between align-items-end bg-light bg-opacity-50 text-dark p-3"
		>
			<div class="me-4">
				<h4 class="mb-0 pb-0">{post.title}</h4>
				{#if post.description}
					<div class="mt-1 small">{@html post.description}</div>
				{/if}
			</div>
			<div class="text-end">
				<div class="small text-danger text-nowrap">
					{new Date(post.created).getDate()}
					{new Date(post.created).monthName()}
					{new Date(post.created).getFullYear()}
				</div>
			</div>
		</div>
	</div>
	<div class="p-3">
		{@html post.content}
	</div>
</div>

<button
	class="btn btn-primary text-dark text-nowrap"
	on:click={() => goto(`${$page.url.searchParams.get('returnUrl')}/#${$page.params.uid}`)}
	><i class="fa-solid fa-circle-arrow-left me-1" />...</button
>
