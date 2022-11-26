<script>
	import { theme } from '$lib/scripts/writableData';
	import { onMount } from 'svelte';

	onMount(() => {
		if (localStorage.getItem('theme')) {
			$theme = localStorage.getItem('theme');
		} else {
			$theme = 'light';
			localStorage.setItem('theme', 'light');
		}
	});
</script>

<svelte:head>
	<link href="/bootstrap.{$theme}.min.css" rel="stylesheet" />
</svelte:head>

{#if $theme != ''}
	<slot />
{/if}
