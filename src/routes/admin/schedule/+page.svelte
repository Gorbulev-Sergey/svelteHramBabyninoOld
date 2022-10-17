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
				month.fildsDayAll.forEach((fDate) => {
					let fildDate = fDate;
					console.log(fDate);
					fDate.fildsTime.forEach((fTime) => {
						if (fTime.event != '') fildDate.fildsTime.push(fTime);
					});
					if (FildDate.length > 0) month.fildsDayNotEmpty.push(fildDate);
				});
				console.log(month.fildsDayNotEmpty);
				set(ref(db, `schedule/${month.monthName()}`), month.fildsDayNotEmpty);
			}}>Сохранить</button
		>
	</div>
</ComponentPageTitle>

<ComponentMonthEdit bind:month />
