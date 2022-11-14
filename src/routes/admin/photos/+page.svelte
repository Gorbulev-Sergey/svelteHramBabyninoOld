<script>
	import { goto } from '$app/navigation';
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

<PageTitle title="Фотографии">
	<div slot="navigation">
		<button class="btn btn-dark text-light" on:click={() => goto('/admin/photos/create')}
			>Создать</button
		>
	</div>
</PageTitle>

<div class="row row-cols-1 row-cols-md-2 g-4">
	{#each Object.entries(albums) as [uid, album]}
		<div class="col">
			<Album {album} />
		</div>
	{/each}
</div>
