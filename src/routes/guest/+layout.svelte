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
<div class="container mb-4" style="margin-top:4.5em; min-height:90vh;">
	<div class="d-flex justify-content-center">
		<img
			class="mb-2 rounded-3"
			style="width: 5em;"
			src="https://mana.su/wp-content/uploads/2017/06/kartinka-s-rozhdestvom-3.jpg"
			alt="" />
	</div>
	<slot />
</div>
<Footer />
