<script>
	// @ts-nocheck

	import PageTitle from '$lib/components/PageTitle.svelte';
	import Album from '$lib/components/photos/Album.svelte';
	import Spinner from '$lib/components/Spinner.svelte';
	import { db } from '$lib/scripts/firebase';
	import { onValue, ref } from 'firebase/database';
	import { onMount } from 'svelte';

	let albums = new Object();
	$: title = 'Фотографии';
	$: keywords = `бабынино храм ${title}, храм бабынино ${title}`;

	onMount(async () => {
		onValue(ref(db, '/photos'), s => {
			if (s.exists()) albums = s.val();
		});
	});
</script>

<PageTitle {title} description={title} {keywords} />

{#if Object.entries(albums).length > 0}
	<div class="row row-cols-1 row-cols-md-3 g-3">
		{#each Object.entries(albums).sort(([k1, v1], [k2, v2]) => new Date(v2.date) - new Date(v1.date)) as [uid, album]}
			<div class="col">
				<Album {uid} {album} />
			</div>
		{/each}
	</div>
{:else}
	<Spinner />
{/if}
