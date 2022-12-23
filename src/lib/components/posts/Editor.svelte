<script>
	import { Post } from '$lib/models/Post';
	import EditorControls from './EditorControls.svelte';

	export let post = new Post();
	let showCode = false;
</script>

<EditorControls
	_class="mb-2"
	codeOnClick={() => {
		showCode = !showCode;
	}}
/>
{#if !showCode}
	<div
		class="form-control border-primary mb-3
					{!post.inverted ? 'bg-light text-dark' : 'bg-dark text-light'}"
		style="min-height: 20em;"
		placeholder="содержимое"
		contenteditable="true"
		bind:innerHTML={post.content}
	/>
{:else}
	<div
		class="form-control border-primary mb-3 {!post.inverted
			? 'bg-light text-dark'
			: 'bg-dark text-light'}"
		style="min-height: 20em;"
		contenteditable="true"
		bind:textContent={post.content}
	/>
{/if}
