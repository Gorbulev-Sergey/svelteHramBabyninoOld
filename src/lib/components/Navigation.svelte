<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { theme } from '$lib/scripts/writableData';
	import AfterBreakpoint from '$lib/components/Breakpoint/AfterBreakpoint.svelte';
	import BeforeBreakpoint from '$lib/components/Breakpoint/BeforeBreakpoint.svelte';
	import IsAuth from '$lib/components/IsAuth.svelte';

	export let title = 'Название';
	export let routesLeft = new Array();
	export let routesRight = new Array();
	let changeTheme = () => {
		$theme = $theme == 'light' ? 'dark' : 'light';
		localStorage.setItem('theme', $theme);
	};
</script>

<div class="fixed-top bg-light text-dark no-print py-2">
	<AfterBreakpoint>
		<div class="container-fluid d-flex justify-content-between align-items-center">
			<div class="flex-grow-1 d-flex justify-content-start align-items-center">
				<button
					class="btn btn-light bg-transparent text-dark border-0 text-uppercase me-2"
					on:click={() => goto(routesLeft[0].url)}><b>{@html title}</b></button>
				<div>
					{#each routesLeft as item}
						<a
							class="btn btn-light text-dark border-0 me-1 {item.url.split('/')[2] == $page.url.pathname.split('/')[2]
								? 'fw-bold'
								: ''}"
							href={item.url}>{item.title}</a>
					{/each}
				</div>
			</div>
			<IsAuth>
				<div>
					{#each routesRight as item}
						<a class="btn btn-light text-dark border-0 me-1" href={item.url}>{item.title}</a>
					{/each}
				</div>
			</IsAuth>
			<button class="btn btn-light text-dark border-0" on:click={async () => changeTheme()}
				><i class="fa-regular fa-sun" /></button>
		</div>
	</AfterBreakpoint>
	<BeforeBreakpoint>
		<div class="container-fluid d-flex justify-content-between align-items-center dropdown">
			<div class="flex-grow-1 d-flex justify-content-between align-items-center">
				<button
					class="btn btn-light text-dark bg-transparent border-0 text-uppercase ps-1 me-1"
					on:click={() => goto(routesLeft[0].url)}><b>{@html title}</b></button
				><button class="btn btn-light text-dark border-0" on:click={async () => changeTheme()}
					><i class="fa-regular fa-sun" /></button>
			</div>
			<button class="btn btn-light text-dark border-0 text-uppercase" data-bs-toggle="dropdown"
				><i class="fa-solid fa-bars" /></button>

			<div class="dropdown-menu border-0 rounded-0 w-100 bg-light text-dark shadow-sm">
				{#each routesLeft as item}
					<div class="bg-light text-dark">
						<a
							class="btn btn-light text-dark w-100 text-start rounded-0 ps-3 {item.url.split('/')[2] ==
							$page.url.pathname.split('/')[2]
								? 'fw-bold'
								: ''}"
							href={item.url}>{item.title}</a>
					</div>
				{/each}
				<IsAuth>
					{#each routesRight as item}
						<div class="bg-light text-dark">
							<button
								class="btn btn-light text-dark w-100 text-start rounded-0 ps-3"
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
	</BeforeBreakpoint>
</div>
