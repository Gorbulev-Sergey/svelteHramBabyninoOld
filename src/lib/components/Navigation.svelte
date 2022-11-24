<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { db } from '$lib/scripts/firebase';
	import { onValue, ref, set } from 'firebase/database';
	import { onMount } from 'svelte';
	import CheckBreakepoint from './CheckBreakepoint.svelte';

	export let title = 'Название';
	export let routesLeft = new Array();
	export let routesRight = new Array();
	export let isAdmin = true;
	$: theme = 'light';
	onMount(() => {
		onValue(ref(db, '/settings'), (s) => (theme = s.val().theme));
	});
	function changeTheme() {
		theme = theme == 'light' ? 'dark' : 'light';
		set(ref(db, '/settings/theme'), theme);
	}
</script>

<svelte:head>
	<link href="/bootstrap.{theme}.min.css" rel="stylesheet" />
</svelte:head>

<div class="fixed-top bg-light text-dark py-2">
	<CheckBreakepoint>
		<div slot="big">
			<div class="container-fluid d-flex justify-content-between align-items-center">
				<div class="flex-grow-1 d-flex justify-content-start align-items-center">
					<button
						class="btn btn-light bg-transparent text-dark border-0 text-uppercase me-2"
						on:click={() => goto(routesLeft[0].url)}><b>{@html title}</b></button
					>
					<div>
						{#each routesLeft as item}
							<a
								class="btn btn-light text-dark border-0 me-1 {item.url.split('/')[2] ==
								$page.url.pathname.split('/')[2]
									? 'fw-bold'
									: ''}"
								href={item.url}>{item.title}</a
							>
						{/each}
					</div>
				</div>
				<button class="btn btn-light text-dark border-0 me-1" on:click={async () => changeTheme()}
					><i class="fa-regular fa-sun" /></button
				>
				{#if isAdmin}
					<div>
						{#each routesRight as item}
							<a class="btn btn-light text-dark border-0 me-1" href={item.url}>{item.title}</a>
						{/each}
					</div>
				{/if}
			</div>
		</div>
		<div slot="small">
			<div class="container-fluid d-flex justify-content-between align-items-center dropdown">
				<div class="flex-grow-1 d-flex justify-content-between align-items-center">
					<button
						class="btn btn-light text-dark border-0 text-uppercase"
						on:click={() => goto(routesLeft[0].url)}><b>{@html title}</b></button
					><button
						class="btn btn-light text-dark border-0 me-1"
						on:click={async () => changeTheme()}><i class="fa-regular fa-sun" /></button
					>
				</div>
				<button class="btn btn-light text-dark border-0 text-uppercase" data-bs-toggle="dropdown"
					><i class="fa-solid fa-bars" /></button
				>

				<div class="dropdown-menu border-0 rounded-0 w-100 bg-light text-dark shadow-sm">
					{#each routesLeft as item}
						<div class="bg-light text-dark">
							<a
								class="btn btn-light text-dark w-100 text-start rounded-0 ps-4 {item.url.split(
									'/'
								)[2] == $page.url.pathname.split('/')[2]
									? 'fw-bold'
									: ''}"
								href={item.url}>{item.title}</a
							>
						</div>
					{/each}
					{#if isAdmin}
						{#each routesRight as item}
							<div class="bg-light text-dark">
								<button
									class="btn btn-light text-dark w-100 text-start rounded-0 ps-4"
									on:click={async () => {
										goto(item.url);
									}}
								>
									<b class="text-uppercase">
										{item.title}
									</b>
								</button>
							</div>
						{/each}
					{/if}
				</div>
			</div>
		</div>
	</CheckBreakepoint>
</div>
