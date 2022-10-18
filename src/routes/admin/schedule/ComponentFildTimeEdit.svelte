<script>
	import FildTime from '../../schedule/FildTime';

	export let fildTime = new FildTime();
</script>

<div style="display: grid; grid-template-columns: 1fr .11fr .3fr">
	<div class="ps-1 py-2">
		<input class="form-control border-0 rounded-0" bind:value={fildTime.event} />
	</div>
	<div class="text-end ps-1 py-2">
		<input type="time" class="form-control border-0 rounded-0" bind:value={fildTime.time} />
	</div>
	<div class="ps-1 pe-2 py-2">
		<input class="form-control border-0 rounded-0" bind:value={fildTime.prayer} />
	</div>
</div>
