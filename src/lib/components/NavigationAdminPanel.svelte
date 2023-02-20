<script>
	// @ts-nocheck
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { theme } from '$lib/scripts/writableData';
	import IsAuth from '$lib/components/IsAuth.svelte';

	export let routesLeft = new Array();
	export let routesRight = new Array();
	$: changeTheme = () => {
		$theme = $theme == 'light' ? 'dark' : 'light';
		localStorage.setItem('theme', $theme);
	};
</script>

<nav class="d-flex flex-column">
	<div>
		{#each routesLeft as item}
			<div class="bg-light text-dark">
				<a
					class="btn btn-light text-dark w-100 text-start rounded-0 ps-3 {decodeURI($page.url.pathname).indexOf(item.url) >= 0
						? 'fw-bold'
						: ''}"
					href={item.url}>{item.title}</a>
			</div>
		{/each}
	</div>
	<IsAuth>
		<div class="mt-3">
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
		</div>
	</IsAuth>
	<div class="p-2 fixed-bottom">
		<button class="btn btn-light text-dark border-0" on:click={async () => changeTheme()}>
			<i class="fa-regular fa-sun" />
		</button>
	</div>
</nav>
