<script>
	import { Album } from '$lib/models/photos/Album';

	export let album = new Album();
</script>

<div
	class="img-fluid rounded"
	style="background-image: url({album.cover});
					 background-size: no-repeat; background-position: center; background-size: cover; min-height:16em;"
>
	<div class="bg-light text-dark bg-opacity-25 p-3">
		<h5>
			{album.title} <span class="badge badge-dark">{album.photos ? album.photos.length : ''}</span>
		</h5>
		<small class="text-secondary">{album.description}</small>
	</div>
	<slot name="navigation" />
</div>
