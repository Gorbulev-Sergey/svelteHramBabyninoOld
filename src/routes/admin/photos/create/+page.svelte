<script>
	import { goto } from '$app/navigation';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import Photo from '$lib/components/photos/Photo.svelte';
	import { Photo as _Photo } from '$lib/models/photos/Photo';
	import { Album } from '$lib/models/photos/Album';
	import { db } from '$lib/scripts/firebase';
	import { push, ref } from 'firebase/database';

	let album = new Album();
</script>

<PageTitle title="Создать фотоальбом">
	<div slot="navigation">
		<button class="btn btn-light" on:click={() => goto(`/admin/photos`)}>Отмена</button>
		<button
			class="btn btn-dark bg-opacity-10"
			on:click={async () => {
				console.log(album);
				push(ref(db, '/photos'), album);
				goto('/admin/photos');
			}}>Сохранить</button
		>
	</div>
</PageTitle>

<div class="rounded p-3 bg-white text-dark">
	<div class="d-flex flex-wrap justify-content-between align-items-center mb-3">
		<div class="nav nav-pills">
			<a class="btn btn-light border-0 me-1 active" data-bs-toggle="pill" href="#cover">Обложка</a>
			<a class="btn btn-light border-0" data-bs-toggle="pill" href="#content">Фотографии</a>
		</div>
	</div>

	<div class="tab-content">
		<div class="tab-pane show" id="cover">
			<div class="row">
				<div class="col-md-8">
					<input
						class="form-control border-0 mb-3 bg-light text-dark bg-opacity-75"
						placeholder="заголовок"
						bind:value={album.title}
					/>
					<input
						class="form-control border-0 mb-3 bg-light text-dark bg-opacity-75"
						placeholder="описание"
						bind:value={album.description}
					/>
				</div>
				<div class="col-md-4">
					<div class="form-group mb-3">
						<input
							class="form-control border-0 mb-3 bg-light text-dark bg-opacity-75"
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
