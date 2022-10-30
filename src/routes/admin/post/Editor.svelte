<script>
	import { Post } from '$lib/models/Post';
	import EditorControls from './EditorControls.svelte';

	export let post = new Post();
	let showCode = false;
</script>

<EditorControls _class="mb-1" codeOnClick={() => (showCode = !showCode)} />
{#if !showCode}
	<div
		class="form-control border-0 mb-3
					{!post.inverted ? 'bg-light text-dark bg-opacity-75' : 'bg-secondary text-light bg-opacity-10'}"
		style="min-height: 20em;"
		placeholder="содержимое"
		contenteditable="true"
		bind:innerHTML={post.content}
	/>
{:else}
	<div
		class="form-control border-0 mb-3 {!post.inverted
			? 'bg-light text-dark bg-opacity-75'
			: 'bg-secondary text-light bg-opacity-10'}"
		style="min-height: 20em;"
		contenteditable="true"
		bind:textContent={post.content}
	/>
{/if}
