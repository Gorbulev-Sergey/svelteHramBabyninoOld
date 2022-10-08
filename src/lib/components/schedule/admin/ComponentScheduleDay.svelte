<script>
	// @ts-nocheck
	import ScheduleDay from '$lib/models/schedule/ScheduleDay';
	import ScheduleTime from '$lib/models/schedule/ScheduleTime';
	import ComponentScheduleTime from './ComponentScheduleTime.svelte';

	export let date = new Date();
	export let scheduleDay = new ScheduleDay();
</script>

<div class="d-flex align-items-start px-2 py-1">
	<div class="input-group-text rounded-0 rounded-start">
		{date.toLocaleDateString()}
	</div>
	<button
		class="btn btn-light border rounded-0"
		on:click={() => {
			scheduleDay = [...scheduleDay.scheduleTimes, new ScheduleTime()];
			console.log(scheduleDay);
		}}>+</button
	>
	<div class="flex-grow-1 d-flex flex-column">
		{#each [...scheduleDay.scheduleTimes] as [time, item]}
			<ComponentScheduleTime {time} scheduleTime={item} />
		{/each}
	</div>
</div>
