<script>
	import { goto } from '$app/navigation';
	import Navigation from '$lib/components/Navigation.svelte';
	import { auth } from '$lib/scripts/firebase';
	import { onMount } from 'svelte';

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
	/**
	 * @type {import("@firebase/auth").User | null}
	 */
	let currentUser;
	onMount(async () => (currentUser = auth.currentUser));
</script>

<Navigation
	title="<span class='text-danger'>Храм</span> ВОЗНЕСЕНИЯ ГОСПОДНЯ"
	{routesLeft}
	{routesRight}
/>
<div class="container" style="margin-top:4.5em; margin-bottom:3em; min-height:90vh;">
	<slot />
</div>
<footer class="bg-light text-dark no-print">
	<div class="p-3">
		<div class="d-flex justify-content-between align-items-start">
			<div class="pt-2">
				<i class="fa-solid fa-copyright me-2" />
				<span>Храм "Вознесения Господня", посёлок Бабынино, Калужская область</span>
			</div>

			{#if currentUser}
				<button
					class="btn btn-light text-dark"
					title="Выйти"
					on:click={() => {
						auth.signOut();
						goto('/');
					}}><i class="fa-solid fa-unlock" /></button
				>{:else}
				<button
					class="btn btn-light text-dark"
					title="Для администраторов"
					on:click={() => {
						goto('/auth/login');
					}}><i class="fa-solid fa-lock" /></button
				>
			{/if}
		</div>
	</div>
</footer>
