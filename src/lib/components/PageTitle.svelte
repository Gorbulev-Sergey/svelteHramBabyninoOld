<script>
	export let title = '';
	export let _class = '';
</script>

<div class="d-flex justify-content-between flex-nowrap align-items-center mb-3 no-print {_class}">
	<div class="d-flex justify-content-between align-items-center">
		<h4 class="text-dark mb-0 me-3 text-nowrap">{title}</h4>
		<slot name="center" />
	</div>
	<slot name="navigation" />
</div>
