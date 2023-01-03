<script>
	// @ts-nocheck
	import { goto } from '$app/navigation';
	import Seo from '$lib/components/Seo.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		goto('/guest/posts');
	});
</script>

<Seo title="Публикации" description="Объявления, новости, видео, статьи из жизни нашего храма" />
