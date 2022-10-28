<script>
	import { tag } from '$lib/models/tag';
	import Tag from './Tag.svelte';
	import TagSelector from './TagSelector.svelte';

	export let tags = new Array();
	export let selectedTags = new Array();
	let selectedTag = new tag();
</script>

<div class="mt-3" style="display: grid; grid-template-columns: auto 1fr;">
	<div class={tags.length == 0 ? 'hide' : ''}>
		<TagSelector
			{tags}
			bind:selected={selectedTag}
			onSelect={() => {
				if (selectedTag.name != '') {
					selectedTags = [...selectedTags, selectedTag];
					tags = tags.filter((t) => t.name != selectedTag.name);
					selectedTag = new tag();
				}
			}}
			_class="mb-2 me-2"
		/>
	</div>
	<div>
		{#each selectedTags as item}
			<Tag
				{item}
				onDelete={() => {
					tags = [...tags, item];
					selectedTags = selectedTags.filter((t) => t.name != item.name);
				}}
			/>
		{/each}
	</div>
</div>
