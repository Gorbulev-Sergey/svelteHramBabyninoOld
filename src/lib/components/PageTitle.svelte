<script>
	export let title = '';
	export let _class = '';

	$: document.title = title;
</script>

<div class="d-flex justify-content-between flex-nowrap align-items-center mb-3 no-print {_class}">
	<div class="d-flex justify-content-between align-items-center">
		<h4 class="text-dark ms-1 mb-0 me-3 text-nowrap">{@html title}</h4>
		<slot name="center" />
	</div>
	<slot name="navigation" />
</div>
