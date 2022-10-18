<script>
	import FildDate from '../../schedule/FildDate';
	import Month from '../../schedule/Month';
	import ComponentFildTimeEdit from './ComponentFildTimeEdit.svelte';

	export let fildDate = new FildDate();
</script>

<div
	class="border-bottom {new FildDate()._dayOfWeek(new Date(fildDate.date).getDay()) ===
	'воскресенье'
		? 'bg-primary text-light border-primary'
		: ''}"
	style="display: grid; grid-template-columns: .14fr 1fr"
>
	<div class="text-center px-2 py-1" style="min-width: 8em;">
		{@html new Date(fildDate.date).getDate()}
		{@html new Month(
			new Date(fildDate.date).getMonth() + 1,
			new Date(fildDate.date).getFullYear()
		).monthNameS()}
		{@html new Date(fildDate.date).getFullYear()}
		<br />
		<i>{@html new FildDate()._dayOfWeek(new Date(fildDate.date).getDay())}</i>
	</div>
	<div>
		{#each fildDate.fildsTime as item}
			<ComponentFildTimeEdit fildTime={item} />
		{/each}
	</div>
</div>
