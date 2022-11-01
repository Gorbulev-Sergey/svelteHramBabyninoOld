<script>
	export let title = 'Заголовок';
	export let value = true;
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
			{value ? 'да' : 'нет'}
		</button>
		<ul class="dropdown-menu">
			<li>
				<button
					class="dropdown-item"
					on:click={() => {
						value = true;
						onSelect(value);
					}}>да</button
				>
			</li>
			<li>
				<button
					class="dropdown-item"
					on:click={() => {
						value = false;
						onSelect(value);
					}}>нет</button
				>
			</li>
		</ul>
	</div>
</div>
