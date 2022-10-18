<script>
	// @ts-nocheck

	import ComponentPageTitle from '$lib/components/ComponentPageTitle.svelte';
	import { db } from '$lib/scripts/firebase';
	import { onValue, push, ref, set, update } from 'firebase/database';
	import { onMount } from 'svelte';
	import Month from '../../schedule/Month';
	import ComponentMonthEdit from './ComponentMonthEdit.svelte';

	let month = new Month(10, 2022);
	onMount(async () => {
		onValue(ref(db, `schedule/${month.year}/${month.monthName()}`), (result) => {
			month.fildsDayNotEmpty = result.val();
			month.updateFildsDayAll();
		});
	});
</script>

<ComponentPageTitle title="Редактировать расписание">
	<div slot="navigation">
		<button
			class="btn btn-light"
			on:click={async () => {
				// ВАЖНЫЙ ФИЛЬТР
				month.fildsDayNotEmpty = month.fildsDayAll.filter((fDate) =>
					fDate.fildsTime.some((fTime) => fTime.event != '')
				);
				console.log(month.fildsDayNotEmpty);
				update(
					ref(db, `schedule/${month.year}/${month.monthName()}`),
					Object.assign({}, month.fildsDayNotEmpty)
				);
			}}>Сохранить</button
		>
	</div>
</ComponentPageTitle>

<ComponentMonthEdit bind:month />
