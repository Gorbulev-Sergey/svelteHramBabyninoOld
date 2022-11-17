<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import Album from '$lib/components/photos/Album.svelte';
	import { db } from '$lib/scripts/firebase';
	import { onValue, ref } from 'firebase/database';
	import { onMount } from 'svelte';

	let albums = new Object();
	onMount(async () => {
		onValue(ref(db, '/photos'), (s) => {
			if (s.exists()) albums = s.val();
		});
	});
</script>

<PageTitle title="Фотографии" />

<div class="row row-cols-1 row-cols-md-3 g-3">
	{#each Object.entries(albums).reverse() as [uid, album]}
		<div class="col">
			<Album {uid} {album} />
		</div>
	{/each}
</div>
