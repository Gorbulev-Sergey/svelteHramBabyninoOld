<script>
	import { goto } from '$app/navigation';

	let routes = [
		{
			url: '/posts',
			title: 'Публикации'
		},
		{
			url: '/posts/grid',
			title: 'Публикации в сетке'
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
			<button class="btn btn-light bg-white border-0 me-1" data-bs-toggle="dropdown">
				Панель управления
			</button>
			<div class="dropdown-menu bg-light  border-secondary border-opacity-10">
				<a class="btn btn-light rounded-0 border-0 text-start w-100" href="/admin/schedule"
					>Редактировать расписание</a
				><br />
				<a class="btn btn-light rounded-0 border-0 text-start w-100" href="/admin/post"
					>Создать публикацию</a
				>
			</div>
		</div>
	</div>
</div>
