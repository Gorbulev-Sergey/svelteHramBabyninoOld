<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navigation from '$lib/components/Navigation.svelte';

	let routesLeft = [
		{
			url: '/guest/posts',
			title: 'Публикации'
		},
		{
			url: '/guest/schedule',
			title: 'Расписание'
		},
		{
			url: '/guest/photos',
			title: 'Фотографии'
		},
		{
			url: '/guest/contacts',
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
<div class="container mb-4" style="margin-top:4.5em; min-height:90vh;">
	<slot />
</div>
<Footer />
