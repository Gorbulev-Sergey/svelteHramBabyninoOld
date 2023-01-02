<script>
	export let title = '';
	export let _class = '';

$: document.title = title;
</script>

<div class="d-flex justify-content-between flex-wrap align-items-center mb-3 no-print {_class}">
	<div class="d-flex justify-content-between align-items-center flex-wrap">
		<h4 class="text-dark ms-1 my-0 me-3 text-nowrap">{title}</h4>
		<div class="mt-2 my-md-0">
			<slot name="center" />
		</div>
	</div>
	<div class="mt-2 my-md-0">
		<slot name="navigation" />
	</div>
</div>
