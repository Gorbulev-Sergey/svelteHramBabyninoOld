<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let r = '';
	onMount(() => {
		console.log('onmount');
	});
</script>

<div>
	{$page.params.tag}
</div>

<div class="input-group">
	<input class="form-control" bind:value={r} />
	<button
		class="btn btn-light border"
		on:click={() => {
			goto('/dynamic/' + r);
			console.log('click ' + r);
		}}>Перейти</button
	>
</div>
