<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import CheckBreakepoint from './CheckBreakepoint.svelte';

	export let title = 'Название';
	export let routesLeft = new Array();
	export let routesRight = new Array();
	export let isAdmin = true;
</script>

<div class="fixed-top bg-white py-2">
	<CheckBreakepoint>
		<div slot="big">
			<div class="container-fluid d-flex justify-content-between align-items-center">
				<div class="flex-grow-1 d-flex justify-content-start align-items-center">
					<button
						class="btn btn-light bg-white border-0 text-uppercase me-2"
						on:click={() => goto(routesLeft[0].url)}><b>{@html title}</b></button
					>
					<div>
						{#each routesLeft as item}
							<a
								class="btn btn-light bg-white border-0 me-1 {item.url.split('/')[2] ==
								$page.url.pathname.split('/')[2]
									? 'fw-bold'
									: ''}"
								href={item.url}>{item.title}</a
							>
						{/each}
					</div>
				</div>
				{#if isAdmin}
					<div>
						{#each routesRight as item}
							<a class="btn btn-light bg-white border-0 me-1" href={item.url}>{item.title}</a>
						{/each}
					</div>
				{/if}
			</div>
		</div>
		<div slot="small">
			<div class="container-fluid d-flex justify-content-between align-items-center dropdown">
				<button
					class="btn btn-light bg-white border-0 text-uppercase me-2"
					on:click={() => goto(routesLeft[0].url)}><b>{@html title}</b></button
				>
				<button
					class="btn btn-light bg-white border-0 text-uppercase me-2"
					data-bs-toggle="dropdown"><i class="fa-solid fa-bars" /></button
				>
				<ul class="dropdown-menu border-0 rounded-0 w-100 py-2 mt-1">
					{#each routesLeft as item}
						<li>
							<a
								class="dropdown-item ps-4 py-2 {item.url.split('/')[2] ==
								$page.url.pathname.split('/')[2]
									? 'fw-bold'
									: ''}"
								href={item.url}>{item.title}</a
							>
						</li>
					{/each}
					{#if isAdmin}
						{#each routesRight as item}
							<li>
								<button
									class="dropdown-item ps-4 py-2"
									on:click={async () => {
										goto(item.url);
									}}
								>
									<b class="text-uppercase">
										{item.title}
									</b>
								</button>
							</li>
						{/each}
					{/if}
				</ul>
			</div>
		</div>
	</CheckBreakepoint>
</div>
