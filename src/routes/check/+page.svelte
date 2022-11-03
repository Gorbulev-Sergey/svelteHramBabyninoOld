<script>
	let innerWidth = 0,
		outerWidth = 0,
		innerHeight = 0,
		outerHeight = 0;
</script>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<div class="bg-dark text-light rounded p-3 {outerWidth < 1000 ? 'hide' : ''}">
	{innerWidth},
	{innerHeight},
	{outerWidth},
	{outerHeight}
</div>
