<script>
	// @ts-nocheck

	import { goto } from '$app/navigation';
	import ComponentPageTitle from '$lib/components/ComponentPageTitle.svelte';
	import ComponentScheduleString from '$lib/components/schedule/admin/ComponentScheduleString.svelte';
	import { Post } from '$lib/models/Post';
	import ScheduleString from '$lib/models/ScheduleString';
	import { Tag } from '$lib/models/Tag';
	import { db } from '$lib/scripts/firebase';
	import { ref, get, set, update, push } from 'firebase/database';
	import { onMount } from 'svelte';

	let month = 10;
	let schedule = {};
</script>

<ComponentPageTitle title="Редактировать расписание">
	<div slot="navigation">
		<button
			class="btn btn-dark"
			on:click={() => {
				update(ref(db, 'schedule/2022/январь'), month);
			}}>Сохранить</button
		>
	</div>
</ComponentPageTitle>

<div class="bg-white p-2 rounded">
	{#each Array(new Date(2022, month, 0).getDate()) as _, i}
		<ComponentScheduleString {month} string={new ScheduleString(i)} />
	{/each}
</div>
