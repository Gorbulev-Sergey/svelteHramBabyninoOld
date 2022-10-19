<script>
	import { LOGONSERVER } from '$env/static/private';

	// @ts-nocheck
	import ComponentPageTitle from '$lib/components/ComponentPageTitle.svelte';
	import { db } from '$lib/scripts/firebase';
	import { onValue, push, ref, set, update } from 'firebase/database';
	import { onMount } from 'svelte';
	import Month from '../../schedule/Month';
	import ComponentMonthEdit from './ComponentMonthEdit.svelte';

	let m = `${new Date(Date.now()).getFullYear()}-${new Date(Date.now()).getMonth()}`;

	$: month = new Month(Number(m.slice(5, m.length)), Number(m.slice(0, 4)));

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
				// Удаляем пустые fildTime
				month.fildsDayNotEmpty.forEach((fDay) => {
					fDay.fildsTime = fDay.fildsTime.filter(
						(fTime) => fTime.event != '' || fTime.time != '00:00'
					);
				});

				console.log(month.fildsDayNotEmpty);
				set(
					ref(db, `schedule/${month.year}/${month.monthName()}`),
					Object.assign({}, month.fildsDayNotEmpty)
				);
			}}>Сохранить</button
		>
	</div>
</ComponentPageTitle>

<input class="form-control mb-3" type="month" bind:value={m} />
<button
	on:click={() => {
		console.log(`${Number(m.slice(5, m.length))} - ${Number(m.slice(0, 4))}`);
	}}>sfg</button
>

<ComponentMonthEdit bind:month />
