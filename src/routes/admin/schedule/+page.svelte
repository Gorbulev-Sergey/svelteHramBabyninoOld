<script>
	// @ts-nocheck

	import ComponentPageTitle from '$lib/components/ComponentPageTitle.svelte';
	import { db } from '$lib/scripts/firebase';
	import { push, ref, set, update } from 'firebase/database';
	import FildDate from '../../schedule/FildDate';
	import Month from '../../schedule/Month';
	import ComponentMonthEdit from './ComponentMonthEdit.svelte';

	let month = new Month(10, 2022);
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
				set(ref(db, `schedule/${month.monthName()}`), month.fildsDayNotEmpty);
			}}>Сохранить</button
		>
	</div>
</ComponentPageTitle>

<ComponentMonthEdit bind:month />
