<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import SEO from '$lib/components/SEO.svelte';

	onMount(async () => {
		goto('/guest/posts/объявления');
	});
</script>

<SEO title="Публикации" description="Объявления, новости, видео, статьи из жизни нашего храма" />
