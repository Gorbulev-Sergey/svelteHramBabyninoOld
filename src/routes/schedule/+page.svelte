<script>
	import ComponentMonth from './ComponentMonth.svelte';
	import Month from './Month';

	let month = new Month(10, 2022);
</script>

<h4 class="mb-3">Расписание</h4>
<ComponentMonth {month} />
