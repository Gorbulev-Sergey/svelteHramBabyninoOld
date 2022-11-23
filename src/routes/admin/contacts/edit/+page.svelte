<script>
	// @ts-nocheck

	import { goto } from '$app/navigation';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import Album from '$lib/components/photos/Album.svelte';
	import { db } from '$lib/scripts/firebase';
	import { onValue, ref, set } from 'firebase/database';
	import { onMount } from 'svelte';

	let contacts;
	onMount(() => {
		onValue(ref(db, '/contacts'), (s) => {
			if (s.exists()) {
				contacts = s.val();
			}
		});
	});
</script>

<PageTitle>
	<div slot="navigation">
		<button class="btn btn-light" on:click={() => goto('/admin/contacts')}>Отмена</button>
		<button
			class="btn btn-dark"
			on:click={async () => {
				set(ref(db, '/contacts'), contacts);
				goto('/admin/contacts');
			}}>Сохранить</button
		>
	</div>
</PageTitle>

{#if contacts}
	<div class="bg-white rounded p-3">
		<div class="d-flex justify-content-between align-items-start mb-2">
			<h5>Расписание работы храма:</h5>
			<button
				class="btn btn-sm btn-dark"
				on:click={async () => {
					contacts.scheduleOfWork = [...contacts.scheduleOfWork, { day: '', time: '' }];
				}}><i class="fa-solid fa-circle-plus" /></button
			>
		</div>
		{#each contacts.scheduleOfWork as item}
			<div class="input-group mb-1">
				<input class="form-control" bind:value={item.day} />
				<input class="form-control" bind:value={item.time} />
				<button
					class="btn btn-sm btn-dark"
					on:click={async () => {
						contacts.scheduleOfWork = contacts.scheduleOfWork.filter((i) => i != item);
					}}><i class="fa-solid fa-delete-left" /></button
				>
			</div>
		{/each}
	</div>
{/if}
