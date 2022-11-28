<script>
	import IfAuth from '$lib/components/IfAuth.svelte';
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
			url: '/admin/photos',
			title: 'Фотографии'
		},
		{
			url: '/admin/tags',
			title: 'Теги'
		},
		{
			url: '/admin/contacts',
			title: 'Контакты'
		},
		{
			url: '/admin/storage',
			title: 'Хранилище'
		}
	];
	let routesRight = [
		{
			url: '/guest/posts',
			title: 'Сайт'
		}
	];
</script>

<IfAuth>
	<Navigation title="Панель управления" {routesLeft} {routesRight} />
	<div class="container" style="margin-top:4.5em; margin-bottom:3em; min-height:60vh;">
		<slot />
	</div>
</IfAuth>
