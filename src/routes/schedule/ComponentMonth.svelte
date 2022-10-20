<script>
	import ComponentFildDate from './ComponentFildDate.svelte';
	import FildDate from './FildDate';
	import Month from './Month';

	export let month = new Month();
</script>

{#if month.fildsDayNotEmpty != null}
	<div class="rounded bg-white">
		<div class="pt-1" style="display: grid; grid-template-columns: .12fr 1fr">
			<div class="text-center">
				<span class="badge bg-dark text-dark bg-opacity-10">Дата</span>
			</div>
			<div style="display: grid; grid-template-columns: 1fr .3fr .1fr">
				<div class="ps-4"><span class="badge bg-dark text-dark bg-opacity-10">Праздник</span></div>
				<div class="text-end pe-4">
					<span class="badge bg-dark text-dark bg-opacity-10">Богослужение</span>
				</div>
				<div class="text-center">
					<span class="badge bg-dark text-dark bg-opacity-10">Время</span>
				</div>
			</div>
		</div>
		{#each month.fildsDayNotEmpty as item}
			<ComponentFildDate fildDate={item} />
		{/each}
	</div>
{/if}
