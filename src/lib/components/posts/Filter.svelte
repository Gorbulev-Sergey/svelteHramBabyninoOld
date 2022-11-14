<script>
	export let title = 'Заголовок';
	export let selected = true;
	export let onSelect = (v) => {
		return v;
	};
	export let _class = '';
</script>

<div class="btn-group {_class}">
	<div class="btn btn-sm btn-dark">{title}</div>
	<div class="dropdown">
		<button
			class="btn btn-sm btn-secondary dropdown-toggle rounded-0 rounded-end"
			data-bs-toggle="dropdown"
		>
			{selected ? 'да' : 'нет'}
		</button>
		<ul class="dropdown-menu">
			<li>
				<button
					class="dropdown-item"
					on:click={() => {
						selected = true;
						onSelect(selected);
					}}>да</button
				>
			</li>
			<li>
				<button
					class="dropdown-item"
					on:click={() => {
						selected = false;
						onSelect(selected);
					}}>нет</button
				>
			</li>
		</ul>
	</div>
</div>
