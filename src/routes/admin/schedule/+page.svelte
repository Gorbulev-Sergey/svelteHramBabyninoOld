<script>
	import { db } from '$lib/scripts/firebase';
	import { onValue, ref } from 'firebase/database';
	import Month from '../../schedule/components/Month.svelte';
	import { onMount } from 'svelte';
	import { Month as _Month } from '../../schedule/models/Month';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { goto } from '$app/navigation';
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

<PageTitle title="Расписание">
	<div slot="navigation" class="d-flex flex-nowrap align-items-center">
		<div class="input-group me-4">
			<span class="input-group-text border-0">Выбирите месяц и год:</span>
			<input
				class="form-control border-0"
				type="month"
				bind:value={m}
				on:change={async () => {
					$month = new _Month(Number(m.slice(5, m.length)), Number(m.slice(0, 4)));
					loadData();
				}}
			/>
		</div>
		<button class="btn btn-sm btn-dark" on:click={() => goto('/admin/schedule/edit')}
			>Редактировать</button
		>
	</div>
</PageTitle>

<Month month={$month} />
