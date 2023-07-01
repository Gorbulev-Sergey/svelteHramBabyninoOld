<script>
	// @ts-nocheck
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { theme } from '$lib/scripts/writableData';
	import After from '$lib/components/Breakpoint/After.svelte';
	import Before from '$lib/components/Breakpoint/Before.svelte';
	import IsAuth from '$lib/components/IsAuth.svelte';

	export let title = 'Название';
	export let routesLeft = new Array();
	export let routesRight = new Array();
	$: changeTheme = () => {
		$theme = $theme == 'light' ? 'dark' : 'light';
		localStorage.setItem('theme', $theme);
	};

	let color = 'rgba(255,50,60,0)';
</script>

<nav class="sticky-top bg-light text-dark bg-opacity-75 no-print py-2" style="backdrop-filter:blur(.5em)">
	<Before>
		<div class="container-fluid d-flex justify-content-between align-items-center dropdown">
			<div class="flex-grow-1 d-flex justify-content-between align-items-center">
				<button
					class="btn btn-light text-dark border-0 text-uppercase me-1"
					style="background-color: {color}"
					on:click={() => goto(routesLeft[0].url)}>
					<b>{@html title}</b>
				</button>
				<button class="btn btn-light bg-transparent text-dark border-0" on:click={async () => changeTheme()}>
					<i class="fa-regular fa-sun" />
				</button>
			</div>
			<button class="btn btn-light text-dark bg-transparent border-0 text-uppercase" data-bs-toggle="dropdown"
				><i class="fa-solid fa-bars" /></button>

			<div class="dropdown-menu border-0 rounded-0 w-100 bg-light text-dark shadow-sm">
				{#each routesLeft as item}
					<div class="bg-light text-dark">
						<a
							class="btn btn-light text-dark w-100 text-start rounded-0 ps-3 {decodeURI($page.url.pathname).indexOf(item.url) >= 0
								? 'fw-bold'
								: ''}"
							href={item.url}>{item.title}</a>
					</div>
				{/each}
				<IsAuth>
					{#each routesRight as item}
						<div class="bg-light text-dark">
							<button
								class="btn btn-light bg-transparent text-dark w-100 text-start rounded-0 ps-3"
								on:click={async () => {
									goto(item.url);
								}}>
								<b class="text-uppercase">
									{item.title}
								</b>
							</button>
						</div>
					{/each}
				</IsAuth>
			</div>
		</div>
	</Before>
	<After>
		<div class="container-fluid d-flex justify-content-between align-items-center">
			<div class="flex-grow-1 d-flex justify-content-between align-items-center">
				<button
					class="btn btn-light text-dark border-0 text-uppercase text-start me-3 rounded-1"
					style="background-color: {color}"
					on:click={() => goto(routesLeft[0].url)}><b class="text-nowrap">{@html title}</b></button>
				<div>
					{#each routesLeft as item}
						<a
							class="btn btn-light bg-light text-dark bg-transparent border-0 me-1 {decodeURI($page.url.pathname).indexOf(
								item.url
							) >= 0
								? 'fw-bold'
								: ''}"
							href={item.url}
							>{item.title}
						</a>
					{/each}
				</div>
			</div>
			<IsAuth>
				<div>
					{#each routesRight as item}
						<a class="btn btn-dark text-light border-0 me-1" href={item.url}>{item.title}</a>
					{/each}
				</div>
			</IsAuth>
			<button class="btn btn-light bg-light text-dark bg-transparent border-0" on:click={async () => changeTheme()}
				><i class="fa-regular fa-sun" /></button>
		</div>
	</After>
</nav>
