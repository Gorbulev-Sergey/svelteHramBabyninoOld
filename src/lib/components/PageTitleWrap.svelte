<script>
	export let title = '';
	export let _class = '';
</script>

<div class="d-flex justify-content-between flex-wrap align-items-center mb-3 {_class}">
	<div class="d-flex justify-content-between align-items-center flex-wrap">
		<h4 class="text-dark my-0 me-3 text-nowrap">{title}</h4>
		<div class="my-2 my-md-0">
			<slot name="center" />
		</div>
	</div>
	<div class="my-2 my-md-0">
		<slot name="navigation" />
	</div>
</div>
