<script>
	import { Photo } from '$lib/models/photos/Photo';

	export let photo = new Photo();
	export let _class = '';
</script>

<div
	class="img-fluid rounded d-flex flex-column-reverse {_class}"
	style="background-image: url({photo.url});
					 background-size: no-repeat; background-position: center; background-size: cover; min-height:16em;"
>
	<div
		class="d-flex justify-content-between align-items-center bg-dark text-light bg-opacity-25 p-3 rounded-bottom"
	>
		<div class=" flex-grow-1">
			<input
				class="form-control border-0 mb-1 bg-light text-dark bg-opacity-75"
				placeholder="url"
				bind:value={photo.url}
			/>
			<input
				class="form-control border-0 bg-light text-dark bg-opacity-75"
				placeholder="заголовок"
				bind:value={photo.title}
			/>
		</div>
		<div class="d-flex justify-content-between ms-4">
			<div class="d-flex flex-column me-2">
				<button class="btn btn-sm btn-dark mb-1"
					><i class="fa-solid fa-arrow-up text-light" /></button
				>
				<button class="btn btn-sm btn-dark"><i class="fa-solid fa-arrow-down text-light" /></button>
			</div>
			<button class="btn btn-sm btn-dark"><i class="fa-solid fa-trash text-danger" /></button>
		</div>
	</div>
	<slot name="navigation" />
</div>
