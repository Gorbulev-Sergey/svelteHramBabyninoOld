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

	onMount(async () => setRoutes());
</script>

<svelte:window bind:innerWidth />

<div class="fixed-top bg-white py-2">
	<div
		class="container-fluid d-flex {innerWidth > 992
			? 'justify-content-betweens align-items-center'
			: 'flex-column'}"
	>
		<div
			class="d-flex justify-content-betweens align-items-center {innerWidth > 992 ? '' : 'w-100'}"
		>
			<button
				class="btn btn-light bg-white border-0 text-uppercase me-2"
				on:click={() => (!isCPanel ? goto('/') : goto('/admin/post'))}
				><b>{@html !isCPanel ? 'ХРАМ' : 'ПАНЕЛЬ УПРАВЛЕНИЯ'}</b></button
			>
			<button class="btn btn-light {innerWidth > 992 ? 'hide' : ''}"
				><i class="fa-solid fa-bars" /></button
			>
		</div>
		<div
			class="flex-grow-1 d-flex {innerWidth > 992
				? 'justify-content-start align-items-center'
				: 'flex-column'}"
		>
			<div class={innerWidth > 992 ? '' : 'w-100 text-start'}>
				{#each routes as item}
					<a
						class="btn btn-light bg-white border-0 me-1 
						{innerWidth > 992 ? '' : 'w-100 text-start'}
						 {item.url.replace('/', '') == $page.url.pathname.split('/')[1] ? 'fw-bold' : ''}"
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
</div>
