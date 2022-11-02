<script>
	import { db } from '$lib/scripts/firebase';
	import { onValue, ref } from 'firebase/database';
	import Month from '../../schedule/components/Month.svelte';
	import { onMount } from 'svelte';
	import { Month as _Month } from '../../schedule/models/Month';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { goto } from '$app/navigation';

	let month = new _Month(new Date(Date.now()).getMonth() + 1, 2022);
	onMount(() => {
		onValue(ref(db, `schedule/${month.year}/${month.monthName()}`), (result) => {
			month.fildsDayNotEmpty = result.val();
		});
	});
</script>

<PageTitle title="Расписание">
	<div slot="navigation">
		<button class="btn btn-sm btn-dark" on:click={() => goto('/admin/schedule/edit')}
			>Редактировать</button
		>
	</div>
</PageTitle>

<Month {month} />
