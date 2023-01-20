<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Seo from '$lib/components/SEO.svelte';

	onMount(async () => {
		goto('/posts/объявления');
	});
</script>

<Seo />
