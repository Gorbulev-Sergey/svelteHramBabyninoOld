<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let isAdmin = true;
	let isCPanel = false;
	let routes = new Array();
	let routesSite = [
		{
			url: '/posts',
			title: 'Публикации'
		},
		{
			url: '/schedule',
			title: 'Расписание'
		}
	];
	let routesCPanel = [
		{
			url: '/admin/post',
			title: 'Публикации'
		},
		{
			url: '/admin/schedule',
			title: 'Расписание'
		},

		{
			url: '/admin/tag',
			title: 'Теги'
		}
	];
	let setRoutes = () => {
		if (!isCPanel) routes = routesSite;
		else routes = routesCPanel;
	};
	let innerWidth = 0;
	let breakpoint = 922;

	onMount(async () => setRoutes());
</script>

<svelte:window bind:innerWidth />

<div class="fixed-top bg-white py-2">
	{#if innerWidth > breakpoint}
		<div class="container-fluid d-flex justify-content-between align-items-center">
			<div class="flex-grow-1 d-flex justify-content-start align-items-center">
				<button
					class="btn btn-light bg-white border-0 text-uppercase me-2"
					on:click={() => (!isCPanel ? goto('/') : goto('/admin/post'))}
					><b>{@html !isCPanel ? 'ХРАМ' : 'ПАНЕЛЬ УПРАВЛЕНИЯ'}</b></button
				>
				<div>
					{#each routes as item}
						<a
							class="btn btn-light bg-white border-0 me-1 {item.url.replace('/', '') ==
							$page.url.pathname.split('/')[1]
								? 'fw-bold'
								: ''}"
							href={item.url}>{item.title}</a
						>
					{/each}
				</div>
			</div>
			{#if isAdmin}
				<div>
					<button
						class="btn btn-light bg-white border-0 me-1"
						on:click={async () => {
							isCPanel = !isCPanel;
							setRoutes();
							goto(routes[0].url);
						}}
					>
						{!isCPanel ? 'Панель управления' : 'Сайт'}
					</button>
				</div>
			{/if}
		</div>
	{:else}
		<div class="container-fluid d-flex justify-content-between align-items-center dropdown">
			<button
				class="btn btn-light bg-white border-0 text-uppercase me-2"
				on:click={() => (!isCPanel ? goto('/') : goto('/admin/post'))}
				><b>{@html !isCPanel ? 'ХРАМ' : 'ПАНЕЛЬ УПРАВЛЕНИЯ'}</b></button
			>
			<button class="btn btn-light bg-white border-0 text-uppercase me-2" data-bs-toggle="dropdown"
				><i class="fa-solid fa-bars" /></button
			>
			<ul class="dropdown-menu border-0 rounded-0 w-100 mt-1 pb-3">
				{#each routes as item}
					<li>
						<a
							class="dropdown-item py-2 {item.url.replace('/', '') ==
							$page.url.pathname.split('/')[1]
								? 'fw-bold'
								: ''}"
							href={item.url}>{item.title}</a
						>
					</li>
				{/each}
				{#if isAdmin}
					<li>
						<button
							class="dropdown-item"
							on:click={async () => {
								isCPanel = !isCPanel;
								setRoutes();
								goto(routes[0].url);
							}}
						>
							<b class="text-uppercase text-danger">
								{!isCPanel ? 'Панель управления' : 'Сайт'}
							</b>
						</button>
					</li>
				{/if}
			</ul>
		</div>
	{/if}
</div>
