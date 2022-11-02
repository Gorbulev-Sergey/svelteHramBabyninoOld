<script>
	import { goto } from '$app/navigation';

	// @ts-nocheck
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { db } from '$lib/scripts/firebase';
	import { onValue, push, ref, set, update } from 'firebase/database';
	import { onMount } from 'svelte';
	import { Month } from '../../../schedule/models/Month';
	import MonthEdit from '../MonthEdit.svelte';
	import { scheduleMonth as month } from '$lib/scripts/writableData';

	let m = '';

	function loadData() {
		onValue(ref(db, `schedule/${$month.year}/${$month.monthName()}`), (result) => {
			$month.fildsDayNotEmpty = result.val();
			$month.updateFildsDayAll();
		});
	}

	onMount(async () => {
		m = `${$month.year}-${$month.month}`;
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
				on:change={async () => {
					$month = new Month(Number(m.slice(5, m.length)), Number(m.slice(0, 4)));
					loadData();
				}}
			/>
		</div>
		<button class="btn btn-sm btn-light  me-1" on:click={() => goto('/admin/schedule')}
			>Отмена</button
		>
		<button
			class="btn btn-sm btn-dark"
			on:click={async () => {
				// ВАЖНЫЙ ФИЛЬТР
				$month.fildsDayNotEmpty = $month.fildsDayAll.filter((fDate) =>
					fDate.fildsTime.some((fTime) => fTime.event != '')
				);
				// Удаляем пустые fildTime
				$month.fildsDayNotEmpty.forEach((fDay) => {
					fDay.fildsTime = fDay.fildsTime.filter(
						(fTime) => fTime.event != '' || fTime.time != '00:00'
					);
				});
				set(
					ref(db, `schedule/${$month.year}/${$month.monthName()}`),
					Object.assign({}, $month.fildsDayNotEmpty)
				);
				goto('/schedule');
			}}>Сохранить</button
		>
	</div>
</PageTitle>

<MonthEdit bind:month={$month} />
