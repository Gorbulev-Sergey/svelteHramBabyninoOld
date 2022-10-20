<script>
	import { goto } from '$app/navigation';

	let routes = [
		{
			url: '/posts',
			title: 'Публикации'
		},
		{
			url: '/schedule',
			title: 'Расписание'
		},
		{
			url: '/check',
			title: 'Проверка'
		}
	];
</script>

<div class="fixed-top bg-white py-2">
	<div class="container-fluid d-flex justify-content-between align-items-center">
		<div class="flex-grow-1 d-flex justify-content-start align-items-center">
			<button class="btn btn-light bg-white border-0 text-uppercase me-2" on:click={() => goto('/')}
				><b>ХРАМ</b></button
			>
			<div>
				{#each routes as item}
					<a class="btn btn-light bg-white border-0 me-1" href={item.url}>{item.title}</a>
				{/each}
			</div>
		</div>
		<div>
			<a class="btn btn-light bg-white border-0 me-1" href="/admin/schedule"
				>Редактировать расписание</a
			>
		</div>
	</div>
</div>
