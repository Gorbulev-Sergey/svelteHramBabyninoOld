<script>
	import { Photo } from '$lib/models/photos/Photo';

	export let photo = new Photo();
</script>

<div class="d-flex justify-content-between mb-2">
	<div class="flex-grow-1 me-3">
		<input
			class="form-control border-0 mb-3 bg-light text-dark bg-opacity-75"
			placeholder="заголовок"
			bind:value={photo.title}
		/>
		<input
			class="form-control border-0 mb-3 bg-light text-dark bg-opacity-75"
			placeholder="url"
			bind:value={photo.url}
		/>
	</div>
	{#if photo.url}
		<img class="rounded w-25" src={photo.url} alt="" />
	{/if}
</div>
