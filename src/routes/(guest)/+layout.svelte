<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Theme from '$lib/components/Theme.svelte';

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

<Theme />
<Navigation title="<span class='text-danger'>Храм</span> ВОЗНЕСЕНИЯ ГОСПОДНЯ" {routesLeft} {routesRight} />
<div class="container mb-4" style="margin-top:4.5em; min-height:90vh;">
	<slot />
</div>
<Footer />
