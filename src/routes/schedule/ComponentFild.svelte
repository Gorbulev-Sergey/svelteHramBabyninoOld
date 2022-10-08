<script>
	import ComponentSubFild from './ComponentSubFild.svelte';
	import Fild from './Fild';
	import SubFild from './SubFild';

	export let fild = new Fild();
</script>

<div class="d-flex align-items-start">
	<div class="btn me-1">{fild.date.toLocaleDateString()}</div>
	<button
		class="btn btn-light me-1"
		on:click={() => (fild.subfilds = [...fild.subfilds, new SubFild(new Date(), '', new Array())])}
	>
		<i class="fa-solid fa-circle-plus" />
	</button>
	<div class="flex-grow-1">
		{#each fild.subfilds as item}
			<ComponentSubFild {item} />
		{/each}
	</div>
</div>
