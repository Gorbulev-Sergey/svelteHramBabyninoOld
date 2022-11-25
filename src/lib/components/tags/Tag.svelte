<script>
	import { Tag } from '$lib/models/Tag';
	export let item = new Tag();
	export let onDelete = () => {};
</script>

<div class="badge mb-1 d-inline-flex p-0 me-1">
	<div class="bg-primary text-dark px-2 py-1 rounded-start">{item.name}</div>
	<div
		class="btn btn-sm btn-primary text-dark px-1 py-0 rounded-0 rounded-end"
		on:click={() => onDelete()}
	>
		<i class="fa-solid fa-delete-left" />
	</div>
</div>
