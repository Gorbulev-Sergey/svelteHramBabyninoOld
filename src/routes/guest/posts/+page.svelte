<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Seo from '$lib/components/Seo.svelte';

	onMount(async () => {
		goto('/guest/posts/объявления');
	});
</script>

<Seo title="Публикации" description="Объявления, новости, видео, статьи из жизни нашего храма" />
