<script>
	import { Photo } from '$lib/models/photos/Photo';

	export let photo = new Photo();
	export let _class = '';
	export let onUp = () => {};
	export let onDown = () => {};
	export let onDelete = () => {};
</script>

<div
	class="img-fluid rounded d-flex flex-column {_class}"
	style="background-image: url({photo.url});
		background-repeat: no-repeat; background-position: center; background-size: cover; min-height:16em;"
>
	<div class="flex-grow-1 d-flex justify-content-end align-items-start m-3">
		<button class="btn btn-sm btn-dark" on:click={() => onDelete()}
			><i class="fa-solid fa-trash text-danger" /></button
		>
	</div>
	<div class="d-flex justify-content-between bg-dark text-light bg-opacity-25 p-3 rounded-bottom">
		<div class=" flex-grow-1">
			<input
				class="form-control form-control-sm border-0 mb-1 bg-light text-dark bg-opacity-75"
				placeholder="url"
				bind:value={photo.url}
			/>
			<input
				class="form-control form-control-sm border-0 bg-light text-dark bg-opacity-75"
				placeholder="заголовок"
				bind:value={photo.title}
			/>
		</div>
		<div class="btn-group ms-3">
			<button class="btn btn-sm btn-dark me-1" on:click={() => onUp()}
				><i class="fa-solid fa-angle-left text-light" /></button
			>
			<button class="btn btn-sm btn-dark" on:click={() => onDown()}
				><i class="fa-solid fa-angle-right text-light" /></button
			>
		</div>
	</div>
	<slot name="navigation" />
</div>
