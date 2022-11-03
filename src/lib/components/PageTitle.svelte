<script>
	export let title = '';
</script>

<div class="d-flex justify-content-between align-items-center flex-wrap mb-3">
	<h4 class="flex-grow-0 mb-1 me-3">{title}</h4>
	<slot name="navigation" />
</div>
