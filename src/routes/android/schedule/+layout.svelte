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

<div class="container my-3" style="min-height:60vh;">
	<slot />
</div>
