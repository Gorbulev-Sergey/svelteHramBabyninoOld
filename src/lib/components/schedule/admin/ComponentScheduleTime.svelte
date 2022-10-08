<script>
	import ScheduleTime from '$lib/models/schedule/ScheduleTime';

	// @ts-nocheck
	export let time = '0:00';
	export let scheduleTime = new ScheduleTime();
</script>

<div class="flex-grow-1 d-flex">
	<div class=" flex-grow-1">
		<input class="form-control rounded-0" bind:value={scheduleTime.event} />
	</div>
	<div>
		<input type="time" class="form-control rounded-0" bind:value={time} />
	</div>
	<div>
		<input class="form-control rounded-0 rounded-end" bind:value={scheduleTime.prayer} />
	</div>
</div>
