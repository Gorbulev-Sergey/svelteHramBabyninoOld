<script>
	export let title = '';
</script>

<div class="d-flex justify-content-between align-items-center mb-3">
	<h4>{title}</h4>
	<slot name="navigation" />
</div>
