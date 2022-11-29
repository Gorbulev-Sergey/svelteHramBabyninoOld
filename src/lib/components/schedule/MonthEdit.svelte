<script>
	import { Month } from '$lib/models/schedule/Month';
	import FildDateEdit from './FildDateEdit.svelte';

	export let month = new Month();
</script>

<div class="bg-light text-dark rounded w-100 overflow-auto">
	{#each month.fildsDayAll as item}
		<FildDateEdit fildDate={item} />
	{/each}
</div>
