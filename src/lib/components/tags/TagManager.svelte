<script>
	import Tag from './Tag.svelte';
	import { Tag as _Tag } from '$lib/models/Tag';
	import TagSelector from './TagSelector.svelte';
	import { onMount } from 'svelte';

	export let title = 'Добавить тег:';
	export let tags = new Array();
	export let selectedTags = new Array();
	export let onSelect = () => {
		tags = tags.filter((t) => !selectedTags.includes(t));
	};
	export let _class = '';
	let selectedTag = new _Tag();

	onMount(async () => {
		setTimeout(() => onSelect(), 10000);
	});
</script>

<div class={_class} style="display: grid; grid-template-columns: auto 1fr;">
	<div class={tags.length == 0 ? 'hide' : ''}>
		<TagSelector
			{title}
			{tags}
			bind:selected={selectedTag}
			onSelect={() => {
				if (selectedTag.name != '') {
					if (!selectedTags) selectedTags = new Array();
					selectedTags = [...selectedTags, selectedTag];
					tags = tags.filter((t) => t.name != selectedTag.name);
					selectedTag = new _Tag();
					onSelect();
				}
			}}
			_class="mb-2 me-2"
		/>
	</div>
	<div>
		{#if selectedTags}
			{#each selectedTags as item}
				<Tag
					{item}
					onDelete={() => {
						tags = [...tags, item];
						selectedTags = selectedTags.filter((t) => t.name != item.name);
						onSelect();
					}}
				/>
			{/each}
		{/if}
	</div>
</div>
