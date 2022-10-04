<script>
	// @ts-nocheck

	import ScheduleString from '$lib/models/ScheduleString';
	import ComponentScheduleSubstring from './ComponentScheduleSubstring.svelte';

	export let month;
	export let string = new ScheduleString();
</script>

<!-- <div class="d-flex align-items-center px-2 py-1">
	<div class="input-group-text rounded-0 rounded-start">
		{new Date(2022, month, string.day).toLocaleDateString()}
	</div>
	<div class="flex-grow-1 d-flex">
		<button class="btn btn-light rounded-0" onclick={() => {}}>+</button>
		<input class="form-control rounded-0" bind:value={string.event} />
		<input type="time" class="form-control w-25 rounded-0" bind:value={string.time} />
		<input class="form-control w-25 rounded-0 rounded-end" bind:value={string.prayer} />
	</div>
</div> -->

<div class="d-flex align-items-start px-2 py-1">
	<div class="input-group-text rounded-0 rounded-start">
		{new Date(2022, month, string.day).toLocaleDateString()}
	</div>
	<button class="btn btn-light border rounded-0" onclick={() => {}}>+</button>
	<div class="flex-grow-1 d-flex flex-column">
		<ComponentScheduleSubstring event="" time="" prayer="" />
		<ComponentScheduleSubstring event="" time="" prayer="" />
	</div>
</div>
