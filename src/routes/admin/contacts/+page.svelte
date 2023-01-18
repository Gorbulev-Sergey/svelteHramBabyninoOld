<script>
	// @ts-nocheck
	import { goto } from '$app/navigation';
	import PageTitleWrap from '$lib/components/PageTitleWrap.svelte';
	import { db } from '$lib/scripts/firebase';
	import { onValue, ref } from 'firebase/database';
	import { onMount } from 'svelte';

	let contacts;
	onMount(() => {
		onValue(ref(db, '/contacts'), s => {
			if (s.exists()) {
				contacts = s.val();
			}
		});
	});
</script>

<PageTitleWrap title="Контакты">
	<div slot="navigation">
		<button class="btn btn-dark" on:click={() => goto('/admin/contacts/edit')}>Редактировать</button>
	</div>
</PageTitleWrap>

{#if contacts}
	<div class="row row-cols-1 row-cols-md-4 g-3">
		<div class="col-md-5">
			<div class="bg-light text-dark rounded p-3 w-100 h-100">
				<h5>Расписание работы храма:</h5>
				{#each contacts.scheduleOfWork as item}
					<div class="d-flex justify-content-between align-items-center mb-1">
						{item.day}
						<div class="badge bg-primary text-dark">{item.time}</div>
					</div>
				{/each}
			</div>
		</div>
		<div class="col-md-5">
			<div class="bg-light text-dark rounded p-3 w-100 h-100">
				<h5>Контактные телефоны:</h5>
				{#each contacts.phones as item}
					<div class="d-flex justify-content-between align-items-center mb-1">
						{item.title}
						<a class="badge bg-primary text-dark" style="text-decoration: none;" href="tel:{item.phone}">{item.phone}</a>
					</div>
				{/each}
			</div>
		</div>
		<div class="col-md-2">
			<div class="bg-light text-dark rounded p-3 w-100 h-100">
				<h5>Соцсети:</h5>
				{#each contacts.socialNetworks as item}
					<a
						class="btn btn-primary rounded-circle me-1 px-1"
						style="width: 2.5em; height:2.5em"
						href={item.url}
						target="_blank"
						title={item.title}
						alt={item.title}>{@html item.icon}</a>
				{/each}
			</div>
		</div>
	</div>
	<div class="row mt-3">
		<div class="col">
			<div class="bg-light text-dark rounded p-3">
				<h5>Адрес храма:</h5>
				<p>{contacts.address.title}</p>
				<div class="rounded w-100" style="overflow:hidden; height:400px">
					<!-- svelte-ignore a11y-missing-attribute -->
					<iframe
						src={contacts.address.yandexMapsUrl.replace('https://yandex.ru/maps/', 'https://yandex.ru/map-widget/v1/')}
						width="100%"
						height="100%"
						frameborder="1"
						allowfullscreen="true" />
				</div>
			</div>
		</div>
	</div>
{/if}
