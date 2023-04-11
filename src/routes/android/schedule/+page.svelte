<script>
	import { db } from '$lib/scripts/firebase';
	import { onValue, ref } from 'firebase/database';
	import Month from '$lib/components/schedule/Month.svelte';
	import { onMount } from 'svelte';
	import { Month as _Month } from '$lib/models/schedule/Month';
	import { scheduleMonth as month } from '$lib/scripts/writableData';
	import PageTitleWrap from '$lib/components/PageTitleWrap.svelte';
	import Spinner from '$lib/components/Spinner.svelte';

	let m = '';

	function loadData() {
		onValue(ref(db, `schedule/${$month.year}/${$month.monthName()}`), result => {
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
	<PageTitleWrap title="Расписание богослужений" _class="mx-0 mx-md-1">
		<div slot="navigation">
			<div class="input-group me-3 no-print mt-md-0 mt-2">
				<span class="input-group-text bg-primary text-dark border-0">дата:</span>
				<input
					class="form-control bg-light text-dark border-0"
					type="month"
					bind:value={m}
					on:change={async () => {
						$month = new _Month(Number(m.split('-')[1]), Number(m.split('-')[0]));
						console.log($month);
						loadData();
					}} />
			</div>
		</div>
	</PageTitleWrap>
</div>

{#if $month.fildsDayNotEmpty}
	{#if $month.fildsDayNotEmpty.length > 0}
		<Month month={$month} />
	{:else}
		<Spinner />
	{/if}
{/if}
