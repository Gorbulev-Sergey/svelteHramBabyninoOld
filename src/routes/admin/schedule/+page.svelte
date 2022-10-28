<script>
	// @ts-nocheck
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { db } from '$lib/scripts/firebase';
	import { onValue, push, ref, set, update } from 'firebase/database';
	import { onMount } from 'svelte';
	import { Month } from '../../schedule/Month';
	import ComponentMonthEdit from './ComponentMonthEdit.svelte';

	let m = `${new Date(Date.now()).getFullYear()}-${new Date(Date.now()).getMonth() + 1}`;
	$: month = new Month(Number(m.slice(5, m.length)), Number(m.slice(0, 4)));

	function loadData() {
		onValue(ref(db, `schedule/${month.year}/${month.monthName()}`), (result) => {
			month.fildsDayNotEmpty = result.val();
			month.updateFildsDayAll();
		});
	}

	onMount(async () => {
		loadData();
	});
</script>

<PageTitle title="Редактировать расписание">
	<div slot="navigation" class="d-flex flex-nowrap align-items-center">
		<div class="input-group me-4">
			<span class="input-group-text border-0">Выбирите месяц и год:</span>
			<input
				class="form-control border-0"
				type="month"
				bind:value={m}
				on:change={async () => loadData()}
			/>
		</div>
		<button
			class="btn btn-light"
			on:click={async () => {
				// ВАЖНЫЙ ФИЛЬТР
				month.fildsDayNotEmpty = month.fildsDayAll.filter((fDate) =>
					fDate.fildsTime.some((fTime) => fTime.event != '')
				);
				// Удаляем пустые fildTime
				month.fildsDayNotEmpty.forEach((fDay) => {
					fDay.fildsTime = fDay.fildsTime.filter(
						(fTime) => fTime.event != '' || fTime.time != '00:00'
					);
				});
				set(
					ref(db, `schedule/${month.year}/${month.monthName()}`),
					Object.assign({}, month.fildsDayNotEmpty)
				);
			}}>Сохранить</button
		>
	</div>
</PageTitle>

<ComponentMonthEdit bind:month />
