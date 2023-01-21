<script>
	import { goto } from '$app/navigation';
	import Theme from '$lib/components/Theme.svelte';
	import { onMount } from 'svelte';
	onMount(() => {
		setTimeout(() => {
			goto('/');
		}, 2500);
	});
</script>

<Theme />
<div class="d-flex flex-column justify-content-center align-items-center text-dark w-100" style="height: 100vh;">
	<h4>Страница не найдена.</h4>
	<div>Через несколко секунд вы будете направлены на главную страницу сайта.</div>
</div>
