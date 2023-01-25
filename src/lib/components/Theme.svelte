<script>
	import { theme } from '$lib/scripts/writableData';
	import { beforeUpdate, onMount } from 'svelte';

	beforeUpdate(async () => {
		if (!localStorage.getItem('theme')) {
			localStorage.setItem('theme', 'light');
		}
		$theme = localStorage.getItem('theme') || 'light';
	});
</script>

<svelte:head>
	<link href="/bootstrap.{$theme == '' ? 'light' : $theme}.min.css" rel="stylesheet" />
</svelte:head>
