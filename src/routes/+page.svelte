<script>
	// @ts-nocheck
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		goto('/posts');
	});
</script>
