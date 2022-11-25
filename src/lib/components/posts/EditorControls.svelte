<script>
	export let _class = '';
	export let codeOnClick = () => {};

	let showCode = false;
</script>

<div class={_class}>
	<div class="btn-group btn-group-sm">
		<button class="btn btn-light text-dark" on:click={() => codeOnClick()}
			><i class="fa-solid fa-code" /></button
		>
	</div>
</div>
