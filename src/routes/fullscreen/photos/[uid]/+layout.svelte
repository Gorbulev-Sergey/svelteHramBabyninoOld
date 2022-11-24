<script>
	import { db } from '$lib/scripts/firebase';
	import { onValue, ref } from 'firebase/database';
	import { onMount } from 'svelte';

	$: theme = 'light';
	onMount(() => {
		onValue(ref(db, '/settings'), (s) => (theme = s.val().theme));
	});
</script>

<svelte:head>
	<link href="/bootstrap.{theme}.min.css" rel="stylesheet" />
</svelte:head>

<div style="background-color: black;">
	<slot />
</div>
