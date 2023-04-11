<script>
	import FildDate from './FildDate.svelte';
	import { Month } from '$lib/models/schedule/Month';

	export let month = new Month();
</script>

{#if month.fildsDayNotEmpty != null}
	<div class="rounded bg-light text-dark w-100 overflow-auto">
		<div>
			<div class="py-2 ps-4 print-title">
				<b>Расписание на {month.monthName()?.toUpperCase()} {month.year} года</b>
			</div>
			<div class="no-print" style="display: grid; grid-template-columns: .12fr 1fr; min-height: 2.3em">
				<div class="text-center px-3" style="min-width: 8.2em;">
					<span class="badge bg-primary text-dark">Дата</span>
				</div>
				<div style="display: grid; grid-template-columns: 1fr .4fr .1fr">
					<div class="ps-3" style="min-width: 13em;">
						<span class="badge bg-primary text-dark">Праздник</span>
					</div>
					<div class="text-end pe-3" style="min-width: 8em;">
						<span class="badge bg-primary text-dark">Богослужение</span>
					</div>
					<div class="text-center" style="min-width: 5em;">
						<span class="badge bg-primary text-dark">Время</span>
					</div>
				</div>
			</div>
		</div>
		<div>
			{#each month.fildsDayNotEmpty as item}
				<FildDate fildDate={item} />
			{/each}
		</div>
	</div>
{/if}
