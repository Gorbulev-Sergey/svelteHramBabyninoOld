<script>
	import { db } from '$lib/scripts/firebase';
	import { onValue, ref } from 'firebase/database';
	import { onMount } from 'svelte';
	import Month from '../../schedule/Month';
	import ComponentFildDateEdit from './ComponentFildDateEdit.svelte';

	export let month = new Month();
</script>

<div class="border rounded">
	{#each month.fildsDayAll as item}
		<ComponentFildDateEdit fildDate={item} />
	{/each}
</div>
