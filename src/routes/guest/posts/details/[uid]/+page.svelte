<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { Post } from '$lib/models/Post';
	import { db } from '$lib/scripts/firebase';
	import { onValue, ref } from 'firebase/database';
	import { onMount } from 'svelte';

	let post = new Post();
	onMount(async () => {
		onValue(ref(db, `/posts/${$page.params.uid}`), (s) => {
			if (s.exists()) post = s.val();
		});
	});
</script>

<PageTitle title={post.title}>
	<div slot="navigation">
		<button
			class="btn btn-dark text-light"
			on:click={() => goto(`${$page.url.searchParams.get('returnUrl')}/#${$page.params.uid}`)}
			>Назад</button
		>
	</div>
</PageTitle>
