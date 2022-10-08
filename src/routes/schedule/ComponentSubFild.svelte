<script>
	import SubFild from './SubFild';

	export let item = new SubFild();
	export let onAdd = () => {};
	export let onRemove = () => {};
	export let isRemove = false;
</script>

<div class="d-flex align-items-start mb-1">
	{#if !isRemove}
		<button class="btn btn-light me-1" on:click={onAdd}>
			<i class="fa-solid fa-circle-plus" />
		</button>
	{:else}
		<button class="btn btn-light me-1" on:click={onRemove}>
			<i class="fa-solid fa-minus" />
		</button>
	{/if}

	<div class="flex-grow-1 me-1">
		<input class="form-control" bind:value={item.event} />
	</div>
	<div class="me-1">
		<input type="time" class="form-control" bind:value={item.date} />
	</div>
	<div>
		<input class="form-control" bind:value={item.prayer} />
	</div>
</div>
