<script>
	import { remove } from 'firebase/database';
	import { now } from 'svelte/internal';
	import ComponentSubFild from './ComponentSubFild.svelte';
	import Fild from './Fild';
	import SubFild from './SubFild';

	export let fild = new Fild();
</script>

<div class="d-flex align-items-start">
	<div class="btn me-1">{fild.date.toLocaleDateString()}</div>
	<div class="flex-grow-1">
		{#each fild.subfilds as item, i}
			{#if i == 0}
				<ComponentSubFild
					{item}
					onAdd={() => {
						fild.subfilds = [...fild.subfilds, new SubFild(new Date(Date.now()), '', new Array())];
					}}
				/>
			{:else}
				<ComponentSubFild
					{item}
					isRemove={true}
					onRemove={() => {
						fild.subfilds = [...fild.subfilds.filter((i) => i != item)];
					}}
				/>
			{/if}
		{/each}
	</div>
</div>
