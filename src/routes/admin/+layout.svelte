<script>
	import Navigation from '$lib/components/Navigation.svelte';
	let routesLeft = [
		{
			url: '/admin/posts',
			title: 'Публикации'
		},
		{
			url: '/admin/schedule',
			title: 'Расписание'
		},

		{
			url: '/admin/tags',
			title: 'Теги'
		}
	];
	let routesRight = [
		{
			url: '/posts',
			title: 'Сайт'
		}
	];
</script>

<Navigation title="Панель управления" {routesLeft} {routesRight} />
<div class="container" style="margin-top:4.5em; margin-bottom:3em; min-height:60vh;">
	<slot />
</div>
