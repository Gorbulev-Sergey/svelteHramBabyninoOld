<script>
	// @ts-nocheck
	import PageTitleWrap from '$lib/components/PageTitleWrap.svelte';
	import { storage } from '$lib/scripts/firebase';
	import { child } from 'firebase/database';
	import { uploadBytes, ref, getDownloadURL, listAll } from 'firebase/storage';
	import { onMount } from 'svelte';

	let images = null;
	$: imagesFromStorage = new Array();

	onMount(async () => {
		listAll(ref(storage, 'Природа')).then((s) => {
			s.items.forEach(
				(i) =>
					(imagesFromStorage = [
						...imagesFromStorage,
						`https://${i.storage.host}/v0/b/sveltehrambabynino.appspot.com/o/${i.fullPath.replace(
							'/',
							'%2F'
						)}?alt=media`
					])
			);
			console.log(imagesFromStorage);
		});
	});
</script>

<PageTitleWrap title="Хранилище фотографий">
	<div slot="navigation">
		<div class=" input-group">
			<input type="file" class="form-control" bind:files={images} />
			<button
				class="btn btn-dark"
				on:click={() => {
					console.log(images[0], typeof images);
					uploadBytes(ref(storage, `Природа/${images[0].name}`), images[0]).then((s) => {
						console.log(s);
						images = null;
					});
				}}>Загрузить</button
			>
		</div>
	</div>
</PageTitleWrap>

<div class="row row-cols-1 row-cols-md-3 g-3">
	{#each imagesFromStorage as item}
		<div class="col">
			<div
				class="rounded"
				style="background-image: url({item});
				background-repeat: no-repeat; background-position: center; background-size: cover; min-height:16em;"
			/>
		</div>
	{/each}
</div>
