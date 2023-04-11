<script>
	import FildTime from './FildTime.svelte';
	import FildDate from '$lib/models/schedule/FildDate';
	import { Month } from '$lib/models/schedule/Month';

	export let fildDate = new FildDate();
</script>

<div
	class="{new FildDate()._dayOfWeek(new Date(fildDate.date).getDay()) === 'воскресенье'
		? 'bg-primary text-danger'
		: ''} print-y-border"
	style="display: grid; grid-template-columns: .11fr 1fr; min-width: 34em;">
	<div class="text-center px-3 py-2" style="min-width: 8.2em;">
		<b class="text-nowrap">{@html new Date(fildDate.date).getDate()}</b>
		<b>{@html new Month(new Date(fildDate.date).getMonth() + 1, new Date(fildDate.date).getFullYear()).monthNameS()}</b>
		<!-- {@html new Date(fildDate.date).getFullYear()} -->
		<br />
		<i>{@html new FildDate()._dayOfWeek(new Date(fildDate.date).getDay())}</i>
	</div>
	<div class="py-1">
		{#each fildDate.fildsTime as item}
			<FildTime fildTime={item} />
		{/each}
	</div>
</div>
