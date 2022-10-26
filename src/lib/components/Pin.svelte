<script>
	export let checked = false;
	export let classFontAwesome = '';
	export let text = '';
	export let _class = '';
</script>

<div
	class="d-flex align-items-center {_class}"
	style="cursor:pointer;"
	on:click={() => (checked = !checked)}
>
	<i
		class="{classFontAwesome} {!checked ? 'text-secondary text-opacity-25' : 'text-primary'} me-1"
	/>
	<small class="pb-1">{text}</small>
</div>
