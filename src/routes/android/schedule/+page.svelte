<script>
	import { db } from '$lib/scripts/firebase';
	import { onValue, ref } from 'firebase/database';
	import Month from '../../../lib/components/schedule/Month.svelte';
	import { onMount } from 'svelte';
	import { Month as _Month } from '../../../lib/models/schedule/Month';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { scheduleMonth as month } from '$lib/scripts/writableData';

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

<div class="no-print">
	<PageTitle title="Расписание богослужений" _class="mx-0 mx-md-1">
		<div slot="navigation">
			<div class="input-group me-3 no-print mt-md-0 mt-1">
				<span class="input-group-text border-0">Дата:</span>
				<input
					class="form-control border-0"
					type="month"
					bind:value={m}
					on:change={async () => {
						$month = new _Month(Number(m.split('-')[1]), Number(m.split('-')[0]));
						console.log($month);
						loadData();
					}}
				/>
			</div>
		</div>
	</PageTitle>
</div>

{#if $month.fildsDayNotEmpty}
	<Month month={$month} />
{:else}
	<div>Расписание на {$month.monthName()} {$month.year} отсутствует!</div>
{/if}
