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

<PageTitle title="Редактировать контакты">
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
	<div class="row row-cols-1 row-cols-md-3 g-3">
		<div class="col-md-8">
			<!-- Расписание работы храма -->
			<div class="col bg-white rounded p-3 mb-3">
				<div class="d-flex justify-content-between align-items-center mb-1">
					<h5>Расписание работы храма:</h5>
					<button
						class="btn btn-sm btn-dark ms-1"
						on:click={async () => {
							contacts.scheduleOfWork = [...contacts.scheduleOfWork, { day: '', time: '' }];
						}}>Добавить <i class="fa-solid fa-circle-plus" /></button
					>
				</div>
				{#each contacts.scheduleOfWork as item}
					<div class="row g-2 mb-1">
						<div class="col">
							<div class="input-group input-group-sm">
								<span class="input-group-text">день недели:</span>
								<input class="form-control" bind:value={item.day} placeholder="день недели" />
							</div>
						</div>
						<div class="col">
							<div class="d-flex align-items-center">
								<div class="input-group input-group-sm me-2">
									<span class="input-group-text">время:</span>
									<input class="form-control" bind:value={item.time} placeholder="время" />
								</div>
								<button
									class="btn btn-sm btn-dark"
									on:click={async () => {
										contacts.scheduleOfWork = contacts.scheduleOfWork.filter((i) => i != item);
									}}><i class="fa-solid fa-trash" /></button
								>
							</div>
						</div>
					</div>
				{/each}
			</div>
			<!-- Контактные телефоны -->
			<div class="col bg-white rounded p-3 mb-3">
				<div class="d-flex justify-content-between align-items-center mb-1">
					<h5>Контактные телефоны:</h5>
					<button
						class="btn btn-sm btn-dark ms-2"
						on:click={async () => {
							contacts.phones = [...contacts.phones, { title: '', phone: '' }];
						}}>Добавить <i class="fa-solid fa-circle-plus" /></button
					>
				</div>
				{#each contacts.phones as item}
					<div class="row g-2 mb-1">
						<div class="col">
							<div class="input-group input-group-sm">
								<span class="input-group-text">контакт:</span>
								<input class="form-control" bind:value={item.title} placeholder="контакт" />
							</div>
						</div>
						<div class="col">
							<div class="d-flex align-items-center">
								<div class="input-group input-group-sm me-2">
									<span class="input-group-text">телефон:</span>
									<input
										class="form-control"
										bind:value={item.phone}
										placeholder="номер телефона"
									/>
								</div>
								<button
									class="btn btn-sm btn-dark"
									on:click={async () => {
										contacts.phones = contacts.phones.filter((i) => i != item);
									}}><i class="fa-solid fa-trash" /></button
								>
							</div>
						</div>
					</div>
				{/each}
			</div>
			<!-- Социальные сети -->
			<div class="col bg-white rounded p-3 mb-3">
				<div class="d-flex justify-content-between align-items-start">
					<h5>Социальные сети:</h5>
					<button
						class="btn btn-sm btn-dark"
						on:click={async () => {
							contacts.socialNetworks = [
								...contacts.socialNetworks,
								{ title: '', url: '', icon: '' }
							];
						}}>Добавить <i class="fa-solid fa-circle-plus" /></button
					>
				</div>
				<div class="input-group input-group-sm">
					<div class="form-control border-0">
						<span class="badge bg-dark text-light">название</span>
					</div>
					<div class="form-control border-0">
						<span class="badge bg-dark text-light">url ссылка на страницу</span>
					</div>
					<div class="form-control border-0">
						<span class="badge bg-dark text-light">иконка соц.сети (html теги)</span>
					</div>
					<button class="btn btn-sm invisible"><i class="fa-solid fa-delete-left" /></button>
				</div>
				{#each contacts.socialNetworks as item}
					<div class="input-group input-group-sm mb-1">
						<input
							class="form-control form-control-sm"
							bind:value={item.title}
							placeholder="название"
						/>
						<input class="form-control form-control-sm" bind:value={item.url} placeholder="url" />
						<div class="form-control form-control-sm">
							<div class="input-group input-group-sm align-items-center p-0">
								{#if item.icon}
									<div class="me-2" style="font-size: 1.5em;">
										{@html item.icon}
									</div>
								{/if}
								<input class="form-control border-0" bind:value={item.icon} placeholder="иконка" />
							</div>
						</div>

						<button
							class="btn btn-sm btn-dark"
							on:click={async () => {
								contacts.socialNetworks = contacts.socialNetworks.filter((i) => i != item);
							}}><i class="fa-solid fa-trash" /></button
						>
					</div>
				{/each}
			</div>
		</div>
		<div class="col-md-4">
			<!-- Адрес -->
			<div class="col bg-white rounded p-3 mb-3">
				<div class="d-flex justify-content-between align-items-start">
					<h5>Адрес:</h5>
				</div>
				<div class="input-group input-group-sm mb-1">
					<span class="input-group-text">адрес:</span>
					<input class="form-control" bind:value={contacts.address.title} placeholder="адрес" />
				</div>
				<div class="input-group input-group-sm">
					<span class="input-group-text">url яндекс карт:</span>
					<input
						class="form-control"
						bind:value={contacts.address.yandexMapsUrl}
						placeholder="url яндекс карт"
					/>
				</div>
				{#if contacts.address.yandexMapsUrl}
					<div class="row mt-3">
						<div class="col">
							<div class="bg-white rounded">
								<div class="rounded w-100" style="overflow:hidden; height:400px">
									<iframe
										title="fghjfghj"
										src={contacts.address.yandexMapsUrl.replace(
											'https://yandex.ru/maps/',
											'https://yandex.ru/map-widget/v1/'
										)}
										width="100%"
										height="100%"
										frameborder="1"
										allowfullscreen="true"
									/>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}
