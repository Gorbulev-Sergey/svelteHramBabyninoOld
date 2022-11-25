<script>
	import { theme } from '$lib/scripts/writableData';
	import { onMount } from 'svelte';

	onMount(async () => {
		if (localStorage.getItem('theme')) $theme = localStorage.getItem('theme');
		else localStorage.setItem('theme', 'light');
	});
</script>

<svelte:head>
	<link href="/bootstrap.{$theme}.min.css" rel="stylesheet" />
</svelte:head>

{#if $theme != ''}
	<slot />
{/if}
