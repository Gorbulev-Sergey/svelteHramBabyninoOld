<script>
	import FildTime from '$lib/models/schedule/FildTime';

	export let fildTime = new FildTime();
	export let isCanRemove = false;
	export let onAdd = () => {};
	export let onRemove = () => {};
</script>

<div style="display: grid; grid-template-columns: auto 1fr .11fr .3fr">
	<div class="py-2">
		{#if !isCanRemove}
			<button
				class="btn btn-light bg-transparent px-2 border-0"
				style="border-top-right-radius: 0; border-bottom-right-radius: 0;"
				on:click={() => onAdd()}
			>
				<i class="fa-regular fa-square-plus" />
			</button>
		{:else}
			<button
				class="btn btn-light bg-transparent px-2 border-0"
				style="border-top-right-radius: 0; border-bottom-right-radius: 0;"
				on:click={() => onRemove()}
			>
				<i class="fa-regular fa-square-minus" />
			</button>
		{/if}
	</div>
	<div class="form-group ps-1 py-2">
		<input
			class="form-control bg-transparent text-dark border-0 rounded-0"
			bind:value={fildTime.event}
			style="min-width: 10em;"
		/>
	</div>
	<div class="text-end ps-1 py-2">
		<input
			type="time"
			class="form-control bg-transparent text-dark border-0 rounded-0"
			style="min-width: 5em;"
			bind:value={fildTime.time}
		/>
	</div>
	<div class="ps-1 pe-2 py-2">
		<input
			class="form-control bg-transparent text-dark border-0 rounded-0"
			bind:value={fildTime.prayer}
			style="min-width: 7em;"
		/>
	</div>
</div>
