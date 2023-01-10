<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Theme from '$lib/components/Theme.svelte';

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

<Theme />
<Navigation title="<span class='text-danger'>Храм</span> ВОЗНЕСЕНИЯ ГОСПОДНЯ" {routesLeft} {routesRight} />
<div class="container" style="margin-top:4.5em; margin-bottom:2em; min-height:90vh;">
	<slot />
</div>
<Footer />
