<script>
	export let title = '';
	export let _class = '';
</script>

<div class="d-flex justify-content-between align-items-center flex-wrap mb-3 {_class}">
	<div class="d-flex align-items-center">
		<h4 class="text-dark mb-1 me-3 text-nowrap">{title}</h4>
		<slot name="center" />
	</div>
	<slot name="navigation" />
</div>
