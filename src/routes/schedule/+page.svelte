<script>
	import { db } from '$lib/scripts/firebase';
	import { onValue, ref } from 'firebase/database';
	import { onMount } from 'svelte';
	import Month from './Month.svelte';
	import { Month as _Month } from './Month';

	let month = new _Month(10, 2022);
	onMount(() => {
		onValue(ref(db, `schedule/${month.year}/${month.monthName()}`), (result) => {
			month.fildsDayNotEmpty = result.val();
		});
	});
</script>

<h4 class="mb-3">Расписание</h4>
<Month {month} />
