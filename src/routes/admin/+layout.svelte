<script>
	import { goto } from '$app/navigation';
	import AfterBreakpoint from '$lib/components/Breakpoint/AfterBreakpoint.svelte';
	import BeforeBreakpoint from '$lib/components/Breakpoint/BeforeBreakpoint.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import IsAuth from '$lib/components/IsAuth.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import NavigationAdminPanel from '$lib/components/NavigationAdminPanel.svelte';

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
			url: '/posts',
			title: 'Сайт'
		}
	];
</script>

<IsAuth>
	<BeforeBreakpoint>
		<Navigation title="Панель управления" {routesLeft} {routesRight} />
		<div class="container" style="margin-top:4.5em; margin-bottom:2em; min-height:90vh;">
			<slot />
		</div>
		<Footer />
	</BeforeBreakpoint>
	<AfterBreakpoint>
		<div class="d-flex align-items-start">
			<div class="sticky-top top-0 bg-light text-dark" style="min-width: 13.5em; min-height:100vh;">
				<div class="bg-primary text-dark px-1 py-4 mb-3">
					<button class="btn btn-primary bg-transparent mb-1" on:click={()=>goto(routesLeft[0].url)}>
						<b class="text-uppercase text-nowrap">Панель управления</b>
					</button>
				</div>
				<NavigationAdminPanel {routesLeft} {routesRight} />
			</div>
			<div class="w-100 mx-4 my-3">
				<slot />
			</div>
		</div>
	</AfterBreakpoint>
</IsAuth>
