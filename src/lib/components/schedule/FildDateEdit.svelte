<script>
	import FildTime from '../../models/schedule/FildTime';
	import FildDate from '../../models/schedule/FildDate';
	import { Month } from '../../models/schedule/Month';
	import FildTimeEdit from './FildTimeEdit.svelte';

	export let fildDate = new FildDate();
</script>

<div
	class="border-bottom border-primary {new FildDate()._dayOfWeek(
		new Date(fildDate.date).getDay()
	) === 'воскресенье'
		? 'bg-primary text-danger'
		: ''}"
	style="display: grid; grid-template-columns: .14fr 1fr;min-width: 40em;"
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
		{#each fildDate.fildsTime as item, i}
			{#if i == 0}
				<FildTimeEdit
					fildTime={item}
					onAdd={() => (fildDate.fildsTime = [...fildDate.fildsTime, new FildTime()])}
				/>
			{:else}
				<FildTimeEdit
					fildTime={item}
					isCanRemove={true}
					onRemove={() =>
						(fildDate.fildsTime = [...fildDate.fildsTime.filter((fTime) => fTime != item)])}
				/>
			{/if}
		{/each}
	</div>
</div>
