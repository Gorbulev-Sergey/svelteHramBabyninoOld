<script>
	// @ts-nocheck

	import { goto } from '$app/navigation';
	import ComponentPageTitle from '$lib/components/ComponentPageTitle.svelte';
	import ComponentScheduleDay from '$lib/components/schedule/admin/ComponentScheduleDay.svelte';
	import { Post } from '$lib/models/Post';
	import ScheduleMonth from '$lib/models/schedule/ScheduleMonth';
	import { Tag } from '$lib/models/Tag';
	import { db } from '$lib/scripts/firebase';
	import { ref, get, set, update, push } from 'firebase/database';
	import { onMount } from 'svelte';

	let month = new ScheduleMonth(30);
	let month1 = {
		date: new Date(Date.now()).toLocaleDateString(),
		time: new Date(Date.now()).toLocaleTimeString(),
		event: 'Преподобного Сергия Радонежского',
		prayer: ['Литургия', 'молебен']
	};
	console.log(month.scheduleDays);
</script>

<ComponentPageTitle title="Редактировать расписание">
	<div slot="navigation">
		<button
			class="btn btn-dark"
			on:click={(e) => {
				push(ref(db, 'schedule/2022/февраль'), month1);
			}}>Сохранить</button
		>
	</div>
</ComponentPageTitle>

<div class="bg-white p-2 rounded">
	{#each [...month.scheduleDays] as [key, value]}
		<ComponentScheduleDay date={new Date(2022, 10, key)} scheduleDay={value} />
	{/each}
</div>
