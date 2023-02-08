<script>
	import { db } from '$lib/scripts/firebase';
	import { onValue, ref } from 'firebase/database';
	import Month from '$lib/components/schedule/Month.svelte';
	import { onMount } from 'svelte';
	import { Month as _Month } from '$lib/models/schedule/Month';
	import { goto } from '$app/navigation';
	import { scheduleMonth as month } from '$lib/scripts/writableData';
	import Spinner from '$lib/components/Spinner.svelte';
	import PageTitleWrap from '$lib/components/PageTitleWrap.svelte';

	let m = '';
	$: title = 'Расписание богослужений';
	$: keywords = `бабынино храм ${title}, храм бабынино ${title}`;

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

<PageTitleWrap {title} description="Расписание богослужений" {keywords}>
	<div slot="navigation" class="d-flex">
		<div class="btn btn-primary text-dark text-nowrap me-2" on:click={() => window.print()}>
			<i class="fa-solid fa-print me-2" />Печать
		</div>
		<div class="input-group">
			<span class="input-group-text bg-primary text-dark border-0">Дата:</span>
			<input
				class="form-control bg-light text-dark border-0"
				type="month"
				bind:value={m}
				on:change={async () => {
					$month = new _Month(Number(m.split('-')[1]), Number(m.split('-')[0]));
					loadData();
				}} />
		</div>
	</div>
</PageTitleWrap>

{#if $month.fildsDayNotEmpty}
	{#if $month.fildsDayNotEmpty.length > 0}
		<Month month={$month} />
	{:else}
		<Spinner />
	{/if}
{:else}
	<div class="text-dark">Расписание на {$month.monthName()} {$month.year} отсутствует!</div>
{/if}
