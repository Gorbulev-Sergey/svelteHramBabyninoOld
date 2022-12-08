<script>
	import { db } from '$lib/scripts/firebase';
	import { onValue, ref } from 'firebase/database';
	import Month from '$lib/components/schedule/Month.svelte';
	import { onMount } from 'svelte';
	import { Month as _Month } from '$lib/models/schedule/Month';
	import PageTitleWrap from '$lib/components/PageTitleWrap.svelte';
	import { goto } from '$app/navigation';
	import { scheduleMonth as month } from '$lib/scripts/writableData';

	let m = '';

	function loadData() {
		onValue(ref(db, `/schedule/${$month.year}/${$month.monthName()}`), (result) => {
			$month.fildsDayNotEmpty = result.val();
			$month.updateFildsDayAll();
		});
	}

	onMount(async () => {
		m = `${$month.year}-${$month.month < 10 ? '0' + $month.month : $month.month}`;
		loadData();
	});
</script>

<PageTitleWrap title="Расписание">
	<div slot="center" class="input-group me-3">
		<span class="input-group-text bg-primary text-dark border-0">Дата:</span>
		<input
			class="form-control bg-light text-dark border-0"
			type="month"
			bind:value={m}
			on:change={async () => {
				$month = new _Month(Number(m.split('-')[1]), Number(m.split('-')[0]));
				console.log($month);
				loadData();
			}}
		/>
	</div>
	<div slot="navigation">
		<button class="btn btn-dark" on:click={() => goto('/admin/schedule/edit')}>Редактировать</button
		>
	</div>
</PageTitleWrap>

{#if $month.fildsDayNotEmpty}
	<Month month={$month} />
{:else}
	<div>Расписание на {$month.monthName()} {$month.year} отсутствует!</div>
{/if}
