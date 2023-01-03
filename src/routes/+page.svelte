<script>
	// @ts-nocheck
	import { goto } from '$app/navigation';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		goto('/guest/posts');
	});
</script>

<PageTitle
	title="Публикации"
	description="Объявления, новости, видео, статьи из жизни нашего храма"
/>
