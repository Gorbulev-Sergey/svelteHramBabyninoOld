<script>
	import ComponentPageTitle from '$lib/components/ComponentPageTitle.svelte';
	import { db } from '$lib/scripts/firebase';
	import { onValue, push, ref, set } from 'firebase/database';
	import { onMount } from 'svelte';
	import Fild from '../admin/schedule/Fild';
	import Month from '../admin/schedule/Month';
	import SubFild from '../admin/schedule/SubFild';
	import ComponentMonth from './ComponentMonth.svelte';

	let year = 2022;
	let month = {
		i: new Date(Date.now()).getMonth,
		name: new Intl.DateTimeFormat('ru', {
			month: 'long'
		}).format(new Date(Date.now()))
	};
	let filds = new Month();
	onMount(() => {
		set(ref(db, '/апрель'), new Fild(new Date(Date.now()), [new SubFild('20:00', 'ghbddsfg')]));
		onValue(ref(db, `schedule/${year}/${month.name}`), (result) => {
			filds = new Month(result.val());
			console.log(new Fild(new Date(Date.now()), [new SubFild('20:00', 'ghbddsfg')]));
		});
	});
</script>

<ComponentPageTitle title="Расписание богослужений" />

<ComponentMonth {year} {month} {filds} />
