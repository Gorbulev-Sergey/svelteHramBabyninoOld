<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { auth, db } from '$lib/scripts/firebase';
	import { theme } from '$lib/scripts/writableData';
	import { onMount } from 'svelte';
	import AfterBreakpoint from './breakpoint/AfterBreakpoint.svelte';
	import BeforeBreakpoint from './breakpoint/BeforeBreakpoint.svelte';

	export let title = 'Название';
	export let routesLeft = new Array();
	export let routesRight = new Array();
	function changeTheme() {
		$theme = $theme == 'light' ? 'dark' : 'light';
		localStorage.setItem('theme', $theme);
	}
	/**
	 * @type {import("@firebase/auth").User | null}
	 */
	let currentUser;
	onMount(async () => (currentUser = auth.currentUser));
</script>

<div class="fixed-top bg-light text-dark py-2">
	<AfterBreakpoint>
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
			<button class="btn btn-light text-dark border-0" on:click={async () => changeTheme()}
				><i class="fa-regular fa-sun" /></button
			>
			{#if currentUser}
				<div>
					{#each routesRight as item}
						<a class="btn btn-light text-dark border-0 me-1" href={item.url}>{item.title}</a>
					{/each}
				</div>
			{/if}
		</div>
	</AfterBreakpoint>
	<BeforeBreakpoint>
		<div class="container-fluid d-flex justify-content-between align-items-center dropdown">
			<div class="flex-grow-1 d-flex justify-content-between align-items-center">
				<button
					class="btn btn-light text-dark bg-transparent border-0 text-uppercase ps-1"
					on:click={() => goto(routesLeft[0].url)}><b>{@html title}</b></button
				><button class="btn btn-light text-dark border-0" on:click={async () => changeTheme()}
					><i class="fa-regular fa-sun" /></button
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
				{#if currentUser}
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
	</BeforeBreakpoint>
</div>
