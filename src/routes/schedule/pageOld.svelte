<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { db } from '$lib/scripts/firebase';
	import { onValue, ref } from 'firebase/database';
	import { onMount } from 'svelte';
	import Month from './components/Month.svelte';
	import { Month as _Month } from './models/Month';

	let month = new _Month(new Date(Date.now()).getMonth() + 1, 2022);
	onMount(() => {
		onValue(ref(db, `schedule/${month.year}/${month.monthName()}`), (result) => {
			month.fildsDayNotEmpty = result.val();
		});
	});
</script>

<PageTitle title="Расписание" />

<Month {month} />
