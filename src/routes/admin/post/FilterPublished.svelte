<script>
	import { adminPostsFilters } from '$lib/scripts/writableData';
	export let onSelect = () => {};
</script>

<div class="btn-group">
	<div class="btn btn-sm btn-dark">Опубликованные:</div>
	<div class="dropdown">
		<button
			class="btn btn-sm btn-white dropdown-toggle rounded-0 rounded-end"
			data-bs-toggle="dropdown"
		>
			{$adminPostsFilters.published ? 'да' : 'нет'}
		</button>
		<ul class="dropdown-menu">
			<li>
				<button
					class="dropdown-item"
					on:click={() => {
						$adminPostsFilters.published = true;
						onSelect();
					}}>да</button
				>
			</li>
			<li>
				<button
					class="dropdown-item"
					on:click={() => {
						$adminPostsFilters.published = false;
						onSelect();
					}}>нет</button
				>
			</li>
		</ul>
	</div>
</div>
