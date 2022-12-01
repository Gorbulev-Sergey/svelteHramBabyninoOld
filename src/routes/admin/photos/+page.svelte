<script>
	// @ts-nocheck

	import { goto } from '$app/navigation';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import Album from '$lib/components/photos/Album.svelte';
	import { db } from '$lib/scripts/firebase';
	import { onValue, ref, remove } from 'firebase/database';
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
		<button class="btn btn-dark text-light" on:click={() => goto(`/admin/photos/create`)}
			>Создать</button
		>
	</div>
</PageTitle>

<div class="row row-cols-1 row-cols-md-3 g-3">
	{#each Object.entries(albums).sort(([k1, v1], [k2, v2]) => new Date(v2.date) - new Date(v1.date)) as [uid, album]}
		<div class="col">
			<Album {uid} {album}>
				<div slot="navigation" class="flex-grow-1 d-flex justify-content-end align-items-start m-2">
					<button
						class="btn btn-sm btn-dark me-1"
						on:click|stopPropagation={() => {
							goto(`/admin/photos/edit/${uid}`);
						}}><i class="fa-solid fa-pencil" /></button
					>
					<button
						class="btn btn-sm btn-dark"
						on:click|stopPropagation={async () => remove(ref(db, `/photos/${uid}`))}
						><i class="fa-solid fa-trash text-danger" /></button
					>
				</div>
			</Album>
		</div>
	{/each}
</div>
