<script>
	import { goto } from '$app/navigation';
	import { auth } from '$lib/scripts/firebase';
	import { onMount } from 'svelte';

	onMount(async () => {
		if (!auth.currentUser) goto('/');
	});
</script>

{#if auth.currentUser}
	<slot />
{/if}
