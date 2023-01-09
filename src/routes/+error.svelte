<script>
	import { goto } from '$app/navigation';
	import Theme from '$lib/components/Theme.svelte';
	import { onMount } from 'svelte';
	onMount(() => {
		setTimeout(() => {
			goto('/');
		}, 3000);
	});
</script>

<Theme />
<div class="d-flex justify-content-center align-items-center w-100" style="height: 100vh;">
	<h5>404 | Страница не найдена</h5>
</div>
