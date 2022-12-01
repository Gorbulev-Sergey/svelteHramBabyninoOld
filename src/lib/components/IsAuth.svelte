<script>
	import { goto } from '$app/navigation';
	import { auth } from '$lib/scripts/firebase';
	import { onAuthStateChanged } from 'firebase/auth';
	import { onMount } from 'svelte';

	/**
	 * @type {import("@firebase/auth").User}
	 */
	let currentUser;
	onMount(async () => {
		onAuthStateChanged(auth, (user) => {
			if (user) currentUser = user;
		});
	});
</script>

{#if currentUser}
	<slot />
{:else}
	<slot name="notAuth" />
{/if}
