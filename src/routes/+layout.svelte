<script>
	import { theme } from '$lib/scripts/writableData';
	import { onMount } from 'svelte';

	onMount(() => {
		new Promise((res, rej) => {
			let t = 'light';
			if (!localStorage.getItem('theme')) {
				localStorage.setItem('theme', 'light');
			} else {
				t = localStorage.getItem('theme') || 'light';
			}
			res(t);
		}).then((res) => ($theme = res));
	});
</script>

<svelte:head>
	<link href="/bootstrap.{$theme == '' ? 'light' : $theme}.min.css" rel="stylesheet" />
</svelte:head>

{#if $theme != ''}
	<slot />
{/if}
