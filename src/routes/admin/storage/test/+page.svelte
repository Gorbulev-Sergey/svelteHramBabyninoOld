<script>
	// @ts-nocheck
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { storage } from '$lib/scripts/firebase';
	import { uploadBytes, ref, getDownloadURL, listAll, getMetadata, uploadString } from 'firebase/storage';
	import { onMount } from 'svelte';

	$: path = '/';
	$: folders = new Array();

	$: getFolders = () => {
		listAll(ref(storage, path)).then(result => {
			folders = result.prefixes;
			path = folders[0].parent.fullPath;
		});
	};

	onMount(async () => {
		getFolders();
	});
</script>

<PageTitle title="Папки в хранилище" />

<div class="btn-group mb-3">
	<button
		class="btn btn-sm btn-light py-0 px-1"
		on:click={() => {
			path = '/';
			getFolders();
		}}><i class="fa-solid fa-house" /></button>
	{#if path != '' || path != '/'}
		{#each path.split('/') as item}
			<span class="bg-light px-1">></span>
			<button
				class="btn btn-sm btn-light py-0 px-1"
				on:click={() => {
					path = item;
					getFolders();
				}}>{item}</button>
		{/each}
	{/if}
</div>

<div class="d-flex justify-content-start align-items-start">
	{#each folders as item}
		<button
			class="btn btn-light text-dark p-3 rounded me-2"
			on:click={() => {
				path += item.parent.fullPath;
				getFolders();
			}}>{item.name}</button>
	{/each}
</div>
