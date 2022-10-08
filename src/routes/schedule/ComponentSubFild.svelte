<script>
	import SubFild from './SubFild';

	export let item = new SubFild();
</script>

<div class="d-flex align-items-start mb-1">
	<button class="btn btn-light">-</button>
	<div class="flex-grow-1 me-1">
		<input class="form-control" bind:value={item.event} />
	</div>
	<div class="me-1">
		<input type="time" class="form-control" bind:value={item.date} />
	</div>
	<div>
		<input class="form-control" bind:value={item.prayer} />
	</div>
</div>
