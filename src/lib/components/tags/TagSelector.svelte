<script>
	import { Tag } from '$lib/models/Tag';

	export let title = 'Добавить тег:';
	export let tags = new Array();
	export let selected = new Tag();
	export let _class = '';
	export let onSelect = () => {};
</script>

<div class="btn-group btn-group-sm small {_class}">
	<div class="bg-primary text-dark px-2 py-1 rounded-start" style="cursor:default;">{title}</div>
	<button class="btn btn-sm btn-secondary text-light  rounded-end" data-bs-toggle="dropdown">
		<i class="fa-solid fa-circle-plus" /></button
	>
	<ul class="dropdown-menu">
		{#each tags as item}
			<li>
				<button
					class="dropdown-item"
					on:click={() => {
						selected = item;
						onSelect();
					}}>{item.name}</button
				>
			</li>
		{/each}
	</ul>
</div>
