<script>
	// @ts-nocheck
	import ComponentPageTitle from '$lib/components/ComponentPageTitle.svelte';
	import { db } from '$lib/scripts/firebase';
	import { push, ref, set, update } from 'firebase/database';
	import ComponentMonth from './ComponentMonth.svelte';

	let filds = new Array();
	let month = { i: 9, name: 'октябрь' };
</script>

<ComponentPageTitle title="Редактировать расписание">
	<div slot="navigation">
		<button
			class="btn btn-dark"
			on:click={() => {
				console.log(filds);
				let fildsNoEmpty = filds.filter((fild) =>
					fild.subfilds.some((subfild) => subfild.event != '')
				);
				let fildsNoEmptyMap = new Map(fildsNoEmpty.map((x) => [x.date, x.subfilds]));
				console.log(Object.fromEntries(fildsNoEmptyMap));
				update(ref(db, `/schedule/2022/${month.name}`), Object.fromEntries(fildsNoEmptyMap));
			}}>Сохранить</button
		>
	</div>
</ComponentPageTitle>

<ComponentMonth class="mt-2" year={2022} month={month.i} bind:filds />
