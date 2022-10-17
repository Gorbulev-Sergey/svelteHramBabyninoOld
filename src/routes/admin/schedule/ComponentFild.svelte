<script>
	import ComponentSubFild from './ComponentSubFild.svelte';
	import Fild from './Fild';
	import ScheduleFild from './ScheduleFild';
	import SubFild from './SubFild';

	export let fild = new ScheduleFild();
</script>

<div class="d-flex align-items-start">
	<div class="btn me-1">{fild.date}</div>
	<div class="flex-grow-1">
		{#each fild.subfilds as item, i}
			{#if i == 0}
				<ComponentSubFild
					{item}
					onAdd={() => {
						fild.subfilds = [...fild.subfilds, new SubFild()];
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
