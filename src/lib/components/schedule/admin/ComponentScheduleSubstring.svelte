<script>
	// @ts-nocheck

	export let event, time, prayer;
</script>

<div class="flex-grow-1 d-flex">
	<div class=" flex-grow-1">
		<input class="form-control rounded-0" bind:value={event} />
	</div>
	<div>
		<input type="time" class="form-control rounded-0" bind:value={time} />
	</div>
	<div>
		<input class="form-control rounded-0 rounded-end" bind:value={prayer} />
	</div>
</div>
