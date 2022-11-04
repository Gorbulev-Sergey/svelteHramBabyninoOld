<script>
	export let title = '';
</script>

<div class="d-flex justify-content-between align-items-center flex-wrap mb-3">
	<h4 class="flex-grow-0 mb-1 me-3">{title}</h4>
	<div class="flex-grow-1 d-flex justify-content-between align-items-center">
		<slot name="center" />
		<slot name="navigation" />
	</div>
</div>
