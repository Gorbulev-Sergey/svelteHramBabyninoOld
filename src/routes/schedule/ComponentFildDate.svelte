<script>
	import ComponentFildTime from './ComponentFildTime.svelte';
	import FildDate from './FildDate';
	import Month from './Month';

	export let fildDate = new FildDate();
</script>

<div
	class="border-bottom {new FildDate()._dayOfWeek(new Date(fildDate.date).getDay()) ===
	'воскресенье'
		? 'bg-primary text-light border-primary'
		: ''}"
	style="display: grid; grid-template-columns: .14fr 1fr"
>
	<div class="text-center px-3 py-2" style="min-width: 8em;">
		{@html new Date(fildDate.date).getDate()}
		{@html new Month(
			new Date(fildDate.date).getMonth() + 1,
			new Date(fildDate.date).getFullYear()
		).monthName()}
		{@html new Date(fildDate.date).getFullYear()}
		<br />
		<i>{@html new FildDate()._dayOfWeek(new Date(fildDate.date).getDay())}</i>
	</div>
	<div>
		{#each fildDate.fildsTime as item}
			<ComponentFildTime fildTime={item} />
		{/each}
	</div>
</div>
