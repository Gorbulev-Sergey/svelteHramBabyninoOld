<script>
	let innerWidth = 0;
	export let breakpoint = 922;
</script>

<svelte:window bind:innerWidth />

<slot />
{#if innerWidth > breakpoint}
	<slot name="big" />
{:else}
	<slot name="small" />
{/if}
