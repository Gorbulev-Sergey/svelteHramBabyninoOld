<script>
	import { goto } from '$app/navigation';

	let routes = [
		{
			url: '/posts',
			title: 'Публикации'
		}
	];
</script>

<div class="fixed-top bg-light py-1">
	<div class="container d-flex justify-content-between align-items-center">
		<div class="flex-grow-1 d-flex justify-content-start align-items-center">
			<button class="btn btn-light text-uppercase" on:click={() => goto('/')}><b>ХРАМ</b></button>
			<div>
				{#each routes as item}
					<a class="btn btn-light" href={item.url}>{item.title}</a>
				{/each}
			</div>
		</div>
		<div>
			<a class="btn btn-light" href="/admin/schedule">Редактировать расписание</a>
		</div>
	</div>
</div>
