<script>
	// @ts-nocheck
	import PageTitleWrap from '$lib/components/PageTitleWrap.svelte';
	import { storage } from '$lib/scripts/firebase';
	import { child } from 'firebase/database';
	import { uploadBytes, ref, getDownloadURL, listAll, getMetadata, uploadString } from 'firebase/storage';
	import { onMount } from 'svelte';
	import { each } from 'svelte/internal';

	let images = new Array();
	$: imagesFromStorage = new Array();

	onMount(async () => {
		listAll(ref(storage, '/Природа')).then(s => {
			s.prefixes.forEach(i => {
				console.log(i.name);
			});
			s.items
				.sort()
				.forEach(
					i =>
						(imagesFromStorage = [
							...imagesFromStorage,
							`https://firebasestorage.googleapis.com/v0/b/${i.bucket}/o/${i.fullPath.replace('/', '%2F')}?alt=media`
						])
				);
		});
	});
</script>

<PageTitleWrap title="Хранилище фотографий">
	<div slot="navigation">
		<div class="input-group">
			<input type="file" class="form-control" multiple bind:files={images} />
			<button
				class="btn btn-dark"
				on:click={() => {
					uploadBytes(ref(storage, '/Новая'), null);
				}}>Создать папку</button>
			<button
				class="btn btn-dark"
				on:click={() => {
					console.log(images);
					images.forEach(item => {
						console.log(item);
						uploadBytes(ref(storage, `Природа/${item.name}`), item).then(s => {
							imagesFromStorage = [
								`https://${s.metadata.ref.storage.host}/v0/b/sveltehrambabynino.appspot.com/o/${s.metadata.fullPath.replace(
									'/',
									'%2F'
								)}?alt=media`,
								...imagesFromStorage
							];
						});
					});
				}}>Загрузить</button>
		</div>
	</div>
</PageTitleWrap>

<div class="row row-cols-1 row-cols-md-3 g-3">
	{#each imagesFromStorage as item}
		<div class="col">
			<div
				class="d-flex flex-column justify-content-end rounded"
				style="background-image: url({item});
				background-repeat: no-repeat; background-position: center; background-size: cover; min-height:16em;">
				<div class="bg-light text-dark bg-opacity-50 w-100 rounded-bottom p-2">
					<div class="ms-1" style="word-wrap: break-word; word-break: break-all;">
						<button
							class="btn btn-sm btn-light text-dark ms-1 float-end top-0"
							title="Скопировать"
							on:click={() => {
								navigator.clipboard.writeText(item).then(s => {});
							}}><i class="fa-solid fa-copy" /></button
						>{item}
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>
