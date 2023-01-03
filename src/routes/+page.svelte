<script>
	// @ts-nocheck
	import { goto } from '$app/navigation';
	import SEO from '$lib/components/SEO.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		goto('/guest/posts');
	});
</script>

<SEO title="Публикации" description="Объявления, новости, видео, статьи из жизни нашего храма" />
