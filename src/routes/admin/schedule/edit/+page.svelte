<script>
	import { goto } from '$app/navigation';

	// @ts-nocheck
	import { db } from '$lib/scripts/firebase';
	import { onValue, push, ref, set, update } from 'firebase/database';
	import { onMount } from 'svelte';
	import { Month } from '../../../../lib/models/schedule/Month';
	import MonthEdit from '$lib/components/schedule/MonthEdit.svelte';
	import { scheduleMonth as month } from '$lib/scripts/writableData';
	import PageTitleWrap from '$lib/components/PageTitleWrap.svelte';

	let m = '';

	function loadData() {
		onValue(ref(db, `schedule/${$month.year}/${$month.monthName()}`), (result) => {
			$month.fildsDayNotEmpty = result.val();
			$month.updateFildsDayAll();
		});
	}

	onMount(async () => {
		m = `${$month.year}-${$month.month < 10 ? '0' + $month.month : $month.month}`;
		loadData();
	});
</script>

<PageTitleWrap title="Редактировать расписание">
	<div slot="center" class="input-group me-4">
		<span class="input-group-text bg-primary text-dark border-0">Дата:</span>
		<input
			class="form-control bg-light text-dark border-0"
			type="month"
			bind:value={m}
			on:change={async () => {
				$month = new Month(Number(m.split('-')[1]), Number(m.split('-')[0]));
				loadData();
			}}
		/>
	</div>
	<div slot="navigation" class="d-flex flex-nowrap align-items-center">
		<button class="btn btn-light  me-1" on:click={() => goto('/admin/schedule')}>Отмена</button>
		<button
			class="btn btn-dark"
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
				goto('/admin/schedule');
			}}>Сохранить</button
		>
	</div>
</PageTitleWrap>

<MonthEdit bind:month={$month} />
