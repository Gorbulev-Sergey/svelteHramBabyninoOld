<script>
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

<h4 class="mb-3">Расписание</h4>
<Month {month} />
