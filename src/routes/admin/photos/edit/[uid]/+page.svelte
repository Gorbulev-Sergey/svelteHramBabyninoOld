<script>
	import { goto } from '$app/navigation';
	import Photo from '$lib/components/photos/Photo.svelte';
	import { Photo as _Photo } from '$lib/models/photos/Photo';
	import { Album } from '$lib/models/photos/Album';
	import { db } from '$lib/scripts/firebase';
	import { onValue, push, ref, update } from 'firebase/database';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import PageTitleWrap from '$lib/components/PageTitleWrap.svelte';

	let album = new Album();
	onMount(async () => {
		onValue(ref(db, `/photos/${$page.params.uid}`), (s) => {
			if (s.exists()) {
				album = s.val();
				if (!album.photos) album.photos = new Array();
				// if (!album.date) {
				// 	album.date = new Date(Date.now()).toDateString();
				// }
			}
		});
	});
</script>

<PageTitleWrap title="Создать фотоальбом">
	<div slot="navigation">
		<button class="btn btn-light" on:click={() => goto(`/admin/photos`)}>Отмена</button>
		<button
			class="btn btn-dark bg-opacity-10"
			on:click={async () => {
				if (!album.cover && album.photos.length > 0) album.cover = album.photos[0].url;
				update(ref(db, `/photos/${$page.params.uid}`), album);
				goto('/admin/photos');
			}}>Сохранить</button
		>
	</div>
</PageTitleWrap>

<div class="rounded p-3 bg-light text-dark">
	<div class="d-flex flex-wrap justify-content-between align-items-center mb-3">
		<div class="nav nav-pills">
			<a class="btn btn-light border-0 me-1 active" data-bs-toggle="pill" href="#cover">Обложка</a>
			<a class="btn btn-light border-0" data-bs-toggle="pill" href="#content">Фотографии</a>
		</div>
	</div>

	<div class="tab-content">
		<div class="tab-pane active show" id="cover">
			<div class="row">
				<div class="col-md-8">
					<input
						class="form-control border-primary mb-3 bg-light text-dark"
						placeholder="заголовок"
						bind:value={album.title}
					/>
					<input
						class="form-control border-primary mb-3 bg-light text-dark"
						placeholder="описание"
						bind:value={album.description}
					/>
					<div class="input-group mb-3">
						<span class="input-group-text bg-primary text-dark border-primary">Дата публикации</span
						>
						<input
							type="date"
							class="form-control border-primary bg-light text-dark"
							bind:value={album.date}
						/>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group mb-3">
						<input
							class="form-control border-primary mb-3 bg-light text-dark"
							placeholder="обложка (url фото)"
							bind:value={album.cover}
						/>
						{#if album.cover}
							<img class="card-img rounded" src={album.cover} alt="" />
						{/if}
					</div>
				</div>
			</div>
		</div>
		<div class="tab-pane" id="content">
			<button
				class="btn btn-sm btn-dark mb-3"
				on:click={() => (album.photos = [...album.photos, new _Photo()])}
				><i class="fa-solid fa-plus" /> фото
			</button>
			<div class="row row-cols-1 row-cols-md-3 g-3">
				{#each album.photos as photo, i}
					<div class="col">
						<Photo
							{photo}
							onUp={() => {
								album.photos.splice(i - 1, 0, album.photos.splice(i, 1)[0]);
								album.photos = [...album.photos];
							}}
							onDown={() => {
								album.photos.splice(i + 1, 0, album.photos.splice(i, 1)[0]);
								album.photos = [...album.photos];
							}}
							onDelete={() => (album.photos = album.photos.filter((p) => p != photo))}
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
