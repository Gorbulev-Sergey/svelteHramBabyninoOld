<script>
	import { auth, db } from '$lib/scripts/firebase';
	import { onAuthStateChanged } from 'firebase/auth';
	import { onValue, ref } from 'firebase/database';
	import { onMount } from 'svelte';

	/**
	 * @type {import("@firebase/auth").User}
	 */
	let currentUser;
	let admins = new Array();

	onMount(async () => {
		onAuthStateChanged(auth, user => {
			if (user) currentUser = user;
		});
		onValue(ref(db, '/admins'), r => {
			if (r.exists()) admins = r.val();
		});
	});
</script>

{#if currentUser && admins.includes(currentUser.uid)}
	<slot />
{:else}
	<slot name="notAuth" />
{/if}
