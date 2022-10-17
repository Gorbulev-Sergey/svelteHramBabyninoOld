<script>
	import Month from '../../schedule/Month';
	import ComponentMonthEdit from './ComponentMonthEdit.svelte';

	let month = new Month(10, 2022);
</script>

<h4 class="mb-3">Расписание</h4>
<ComponentMonthEdit {month} />
