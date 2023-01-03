<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import PageTitle from '$lib/components/PageTitle.svelte';

	onMount(async () => {
		goto('/guest/posts/объявления');
	});
</script>

<PageTitle
	title="Публикации"
	description="Объявления, новости, видео, статьи из жизни нашего храма"
/>
