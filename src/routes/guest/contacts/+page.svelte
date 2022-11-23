<script>
	// @ts-nocheck
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { Contacts } from '$lib/models/Contacts';
	import { db } from '$lib/scripts/firebase';
	import { onValue, push, ref, set } from 'firebase/database';
	import { onMount } from 'svelte';

	let contacts;
	onMount(() => {
		onValue(ref(db, '/contacts'), (s) => {
			if (s.exists()) contacts = s.val();
		});
	});
</script>

<PageTitle title="Контакты" />

{#if contacts}
	<div class="row row-cols-1 row-cols-md-4 g-3">
		<div class="col-md-5">
			<div class="bg-white rounded p-3 w-100 h-100">
				<h5>Расписание работы храма:</h5>
				{#each contacts.scheduleOfWork as item}
					<div class="d-flex justify-content-between align-items-center mb-1">
						{item.day}
						<div class="badge bg-dark">{item.time}</div>
					</div>
				{/each}
			</div>
		</div>
		<div class="col-md-5">
			<div class="bg-white rounded p-3 w-100 h-100">
				<h5>Контактные телефоны:</h5>
				{#each contacts.phones as item}
					<div class="d-flex justify-content-between align-items-center mb-1">
						{item.title}
						<a class="badge bg-dark" style="text-decoration: none;" href="tel:{item.phone}"
							>{item.phone}</a
						>
					</div>
				{/each}
			</div>
		</div>
		<div class="col-md-2">
			<div class="bg-white rounded p-3 w-100 h-100">
				<h5>Соцсети:</h5>
				{#each contacts.socialNetworks as item}
					<a class="btn btn-dark rounded-circle me-1" href={item.url} target="_blanck" alt=""
						>{@html item.icon}</a
					>
				{/each}
			</div>
		</div>
	</div>
	<div class="row mt-3">
		<div class="col">
			<div class="bg-white rounded p-3">
				<h5>Адрес храма:</h5>
				<p>{contacts.address.title}</p>
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
