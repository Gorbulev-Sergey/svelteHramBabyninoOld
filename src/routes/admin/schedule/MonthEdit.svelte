<script>
	import { onMount } from 'svelte';
	import { Month } from '../../schedule/models/Month';
	import FildDateEdit from './FildDateEdit.svelte';

	export let month = new Month();
</script>

<div class="rounded w-100 overflow-auto">
	{#each month.fildsDayAll as item}
		<FildDateEdit fildDate={item} />
	{/each}
</div>
