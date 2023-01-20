<script>
	// @ts-nocheck
	import { goto } from '$app/navigation';
	import Seo from '$lib/components/SEO.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		goto('/posts');
	});
</script>

<Seo />
