<script>
	// @ts-nocheck
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Album } from '$lib/models/photos/Album';
	import { db } from '$lib/scripts/firebase';
	import { get, onValue, ref } from 'firebase/database';
	import { onMount } from 'svelte';

	let album = new Album();

	document.documentElement.requestFullscreen();
	document.onfullscreenchange = e => {
		if (!document.fullscreenElement) {
			goto(`/photos`);
		}
	};

	async function downloadImage(imageSrc, i) {
		const image = await fetch(imageSrc);
		const imageBlog = await image.blob();
		const imageURL = URL.createObjectURL(imageBlog);

		const link = document.createElement('a');
		link.href = imageURL;
		link.download = album.title + ' (' + (i + 1).toString() + ')';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	let goBack = () => {
		if (document.fullscreenElement) document.exitFullscreen();
		goto(`/photos`);
		//goto(`/photos#${$page.params.uid}`);
	};

	onMount(async () => {
		onValue(ref(db, `/photos/${$page.params.uid}`), s => {
			if (s.exists()) {
				album = s.val();
			}
		});
	});
</script>

{#if album.photos.length > 0}
	<button
		class="btn btn-light text-dark bg-light border-0 bg-opacity-75 position-absolute m-3"
		style="z-index: 1000; right:0; top:0"
		title="Закрыть"
		on:click={goBack}>
		<i class="fa-solid fa-xmark" />
	</button>
	<!-- svelte-ignore a11y-autofocus -->
	<div id="carouselExample" class="carousel slide" data-bs-ride="false" autofocus>
		{#if album.photos.length > 1}
			<div class="carousel-indicators">
				{#each album.photos as photo, i}
					<button data-bs-target="#carouselExample" class={i == 0 ? 'active' : ''} data-bs-slide-to={i.toString()} />
				{/each}
			</div>
		{/if}
		<div class="carousel-inner">
			{#each album.photos as photo, i}
				<div class="carousel-item {i == 0 ? 'active' : ''}">
					<button
						class="btn btn-light text-dark bg-light border-0 bg-opacity-75 position-absolute m-3"
						style="z-index: 1000; left:0; top:0"
						title="Скачать фотографию"
						on:click={downloadImage(photo.url, i)}>
						<i class="fa-solid fa-download" />
					</button>
					<div
						class="img-fluid h-100"
						style="background-image: url({photo.url});
							background-repeat: no-repeat; background-position: center; background-size: contain; min-height:100vh;" />
					{#if photo.title}
						<div class="carousel-caption d-none d-md-block mb-2">
							{photo.title}
						</div>
					{/if}
				</div>
			{/each}
		</div>
		{#if album.photos.length > 1}
			<button class="carousel-control-prev" data-bs-target="#carouselExample" data-bs-slide="prev">
				<span class="carousel-control-prev-icon" />
				<span class="visually-hidden">Предыдущий</span>
			</button>
			<button class="carousel-control-next" data-bs-target="#carouselExample" data-bs-slide="next">
				<span class="carousel-control-next-icon" />
				<span class="visually-hidden">Следующий</span>
			</button>
		{/if}
	</div>
{/if}
