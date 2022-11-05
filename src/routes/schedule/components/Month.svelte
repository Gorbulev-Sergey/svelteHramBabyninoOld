<script>
	import FildDate from './FildDate.svelte';
	import { Month } from '../models/Month';

	export let month = new Month();
</script>

{#if month.fildsDayNotEmpty != null}
	<div class="rounded bg-white w-100 overflow-auto">
		<div class="py-2 ps-4">
			<b>Расписание на {month.monthName()?.toUpperCase()} {month.year} года</b>
		</div>
		<div style="display: grid; grid-template-columns: .11fr 1fr; min-height: 2.3em">
			<div class="text-center px-3" style="min-width: 8em;">
				<span class="badge bg-dark text-dark bg-opacity-10">Дата</span>
			</div>
			<div style="display: grid; grid-template-columns: 1fr .3fr .1fr">
				<div class="ps-3" style="min-width: 12em;">
					<span class="badge bg-dark text-dark bg-opacity-10">Праздник</span>
				</div>
				<div class="text-end pe-3" style="min-width: 8em;">
					<span class="badge bg-dark text-dark bg-opacity-10">Богослужение</span>
				</div>
				<div class="text-center" style="min-width: 5em;">
					<span class="badge bg-dark text-dark bg-opacity-10">Время</span>
				</div>
			</div>
		</div>
		{#each month.fildsDayNotEmpty as item}
			<FildDate fildDate={item} />
		{/each}
	</div>
{/if}
