<script>
	let innerWidth = 0;
	export let breakpoint = 922;
</script>

<svelte:window bind:innerWidth />

{#if innerWidth < breakpoint}
	<slot />
{/if}
