<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navigation from '$lib/components/Navigation.svelte';

	let routesLeft = [
		{
			url: '/posts',
			title: 'Публикации'
		},
		{
			url: '/schedule',
			title: 'Расписание'
		},
		{
			url: '/posts/о нашем храме',
			title: 'О храме'
		},
		{
			url: '/posts/видео',
			title: 'Видео'
		},
		{
			url: '/photos',
			title: 'Фотографии'
		},
		{
			url: '/contacts',
			title: 'Контакты'
		}
	];
	let routesRight = [
		{
			url: '/admin/posts',
			title: 'Панель управления'
		}
	];
</script>

<Navigation title="<span class='text-danger'>Храм</span> ВОЗНЕСЕНИЯ ГОСПОДНЯ" {routesLeft} {routesRight} />
<div class="container my-4 py-1" style=" min-height:90vh;">
	<slot />
</div>
<Footer />
