<script>
	import Month from '../admin/schedule/Month';

	// @ts-nocheck
	import ComponentFild from './ComponentFild.svelte';

	export let year;
	export let month;
	export let filds = new Month();
</script>

<div class="table-responsive border-0 bg-light" style="border-radius:.25rem">
	<div class="pl-3 pt-2 pr-3 pb-1">
		<h6 class="text-dark m-0 p-0 text-nowrap flex-nowrap">
			Расписание богослужений на {month.name}
			{year} года
		</h6>
	</div>
	<table class="table table-borderless bg-light text-dark m-0">
		<thead class="no-print">
			<tr class="text-light">
				<th scope="col" class="mr-1"><span class="badge badge-secondary">Дата</span></th>
				<th scope="col"><span class="badge badge-secondary">Праздник</span></th>
				<th scope="col"><span class="badge badge-secondary float-right">Богослужение</span></th>
				<th scope="col"><span class="badge badge-secondary">Время</span></th>
			</tr>
		</thead>
		<tbody class="border-0">
			{#each Object.entries(filds) as [key, item], i}
				<ComponentFild day={key} fild={item} />
			{/each}
		</tbody>
	</table>
</div>
