<script>
	// @ts-nocheck
	import { goto } from '$app/navigation';
	import PageTitleWrap from '$lib/components/PageTitleWrap.svelte';
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

<PageTitleWrap title="Редактировать контакты">
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
</PageTitleWrap>

{#if contacts}
	<div class="row row-cols-1 row-cols-md-3 g-3">
		<div class="col-md-8">
			<!-- Расписание работы храма -->
			<div class="col bg-light text-dark rounded p-3 mb-3">
				<div class="d-flex justify-content-between align-items-center mb-2">
					<h5>Расписание работы храма:</h5>
					<button
						class="btn btn-dark ms-1"
						on:click={async () => {
							contacts.scheduleOfWork = [...contacts.scheduleOfWork, { day: '', time: '' }];
						}}>Добавить <i class="fa-solid fa-circle-plus" /></button
					>
				</div>
				{#each contacts.scheduleOfWork as item}
					<div class="row g-2 mb-1">
						<div class="col">
							<div class="input-group">
								<span class="input-group-text">день недели:</span>
								<input class="form-control" bind:value={item.day} placeholder="день недели" />
							</div>
						</div>
						<div class="col">
							<div class="d-flex align-items-center">
								<div class="input-group me-2">
									<span class="input-group-text">время:</span>
									<input class="form-control" bind:value={item.time} placeholder="время" />
								</div>
								<button
									class="btn btn-dark"
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
			<div class="col bg-light text-dark rounded p-3 mb-3">
				<div class="d-flex justify-content-between align-items-center mb-2">
					<h5>Контактные телефоны:</h5>
					<button
						class="btn btn-dark ms-2"
						on:click={async () => {
							contacts.phones = [...contacts.phones, { title: '', phone: '' }];
						}}>Добавить <i class="fa-solid fa-circle-plus" /></button
					>
				</div>
				{#each contacts.phones as item}
					<div class="row g-2 mb-1">
						<div class="col">
							<div class="input-group">
								<span class="input-group-text">контакт:</span>
								<input class="form-control" bind:value={item.title} placeholder="контакт" />
							</div>
						</div>
						<div class="col">
							<div class="d-flex align-items-center">
								<div class="input-group me-2">
									<span class="input-group-text">телефон:</span>
									<input
										class="form-control"
										bind:value={item.phone}
										placeholder="номер телефона"
									/>
								</div>
								<button
									class="btn btn-dark"
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
			<div class="col bg-light text-dark rounded p-3 mb-3">
				<div class="d-flex justify-content-between align-items-start mb-2">
					<h5>Социальные сети:</h5>
					<button
						class="btn btn-dark"
						on:click={async () => {
							contacts.socialNetworks = [
								...contacts.socialNetworks,
								{ title: '', url: '', icon: '' }
							];
						}}>Добавить <i class="fa-solid fa-circle-plus" /></button
					>
				</div>
				{#each contacts.socialNetworks as item}
					<div class="row g-2 mb-1">
						<div class="col">
							<div class="input-group">
								<span class="input-group-text">название:</span>
								<input class="form-control" bind:value={item.title} placeholder="название" />
							</div>
						</div>
						<div class="col">
							<div class="input-group me-2">
								<span class="input-group-text">url:</span>
								<input class="form-control" bind:value={item.url} placeholder="url ссылки" />
							</div>
						</div>
						<div class="col">
							<div class="d-flex align-items-center">
								<div class="input-group me-2">
									<span class="input-group-text">иконка:</span>
									<input
										class="form-control"
										bind:value={item.icon}
										placeholder="иконка (html тег)"
									/>
									{#if item.icon}
										<span class="input-group-text" style="font-size: 1.3em;">
											{@html item.icon}
										</span>
									{/if}
								</div>
								<button
									class="btn btn-dark"
									on:click={async () => {
										contacts.socialNetworks = contacts.socialNetworks.filter((i) => i != item);
									}}><i class="fa-solid fa-trash" /></button
								>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
		<div class="col-md-4">
			<!-- Адрес -->
			<div class="col bg-light text-dark rounded p-3 mb-3">
				<div class="d-flex justify-content-between align-items-start">
					<h5>Адрес:</h5>
				</div>
				<div class="input-group mb-2">
					<span class="input-group-text">адрес:</span>
					<input class="form-control" bind:value={contacts.address.title} placeholder="адрес" />
				</div>
				<div class="input-group">
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
							<div class="bg-light rounded">
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
