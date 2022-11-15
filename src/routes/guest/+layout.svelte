<script>
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
		}
	];
	let routesRight = [
		{
			url: '/admin/posts',
			title: 'Панель управления'
		}
	];
</script>

<Navigation title="<span class='text-danger'>Храм</span> ВОЗНЕСЕНИЯ" {routesLeft} {routesRight} />
<div class="container" style="margin-top:4.5em; margin-bottom:3em; min-height:60vh;">
	<slot />
</div>
