<script>
	import FildTime from '../../schedule/FildTime';

	export let fildTime = new FildTime();
</script>

<div style="display: grid; grid-template-columns: 1fr .11fr .3fr">
	<div class="px-3 py-2">
		<input class="form-control" bind:value={fildTime.event} />
	</div>
	<div class="text-end px-3 py-2">
		<input type="time" class="form-control" bind:value={fildTime.time} />
	</div>
	<div class="px-3 py-2">
		<input class="form-control" bind:value={fildTime.prayer} />
	</div>
</div>
