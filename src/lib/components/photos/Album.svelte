<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Album } from '$lib/models/photos/Album';

	export let uid = '';
	export let album = new Album();
</script>

<div
	class="img-fluid rounded d-flex flex-column-reverse"
	style="background-image: url({album.cover});
					 background-size: no-repeat; background-position: center; background-size: cover; min-height:16em; cursor:pointer;"
	on:click={() => {
		if (uid != '' && album.photos.length > 0) {
			goto(`/fullscreen/photos/${uid}?returnTo=${$page.url}`);
		}
	}}
>
	<div class="d-flex justify-content-between bg-dark text-light bg-opacity-25 p-3 rounded-bottom">
		<div>
			<h5 class="mb-0">
				{album.title}
			</h5>
			<small class="text-light text-opacity-50">{album.description}</small>
		</div>
		<div class="d-flex flex-column align-items-end justify-content-between small mt-1">
			{#if album.photos}
				<div class="badge badge-light bg-light text-dark">
					{album.photos.length} фото
				</div>
			{/if}
			{#if album.date}
				<div class="text-danger">
					{new Date(album.date).getDate()}
					{new Date(album.date).monthName()}
					{new Date(album.date).getFullYear()}
				</div>
			{/if}
		</div>
	</div>
	<slot name="navigation" />
</div>
