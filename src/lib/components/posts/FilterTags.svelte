<script>
	import { Tag } from '$lib/models/Tag';

	export let title = 'тег:';
	export let tags = new Array();
	export let selected = new Tag('объявления', 'Объявления');
	export let onSelect = (v) => v;
	export let _class = '';
</script>

<div class="btn-group {_class}">
	<div class="btn btn-sm bg-primary text-dark">{title}</div>
	<div class="dropdown">
		<button
			class="btn btn-sm btn-light text-dark dropdown-toggle rounded-0 rounded-end"
			data-bs-toggle="dropdown"
		>
			{selected.name}
		</button>
		<ul class="dropdown-menu">
			{#each tags as item}
				<li>
					<button
						class="dropdown-item"
						on:click={() => {
							selected = item;
							onSelect(item);
						}}>{item.name}</button
					>
				</li>
			{/each}
		</ul>
	</div>
</div>
