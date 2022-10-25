<script>
	// @ts-nocheck

	import { goto } from '$app/navigation';
	import { Post } from '$lib/models/Post';

	export let post = new Post();
	export let onClickTag = () => {};
	Date.prototype.monthName = function () {
		switch (this.getMonth() + 1) {
			case 1:
				return 'января';
			case 2:
				return 'февраля';
			case 3:
				return 'марта';
			case 4:
				return 'апреля';
			case 5:
				return 'мая';
			case 6:
				return 'июня';
			case 7:
				return 'июля';
			case 8:
				return 'августа';
			case 9:
				return 'сентября';
			case 10:
				return 'октября';
			case 11:
				return 'ноября';
			case 12:
				return 'декабря';
		}
	};
</script>

<div class="col mb-4">
	<div
		class="card {!post.inverted
			? 'bg-white text-dark'
			: 'bg-dark text-light'} border-0  h-100 border"
	>
		<div
			class="card-header {!post.inverted ? 'bg-white text-dark' : 'bg-dark text-light'} border-0"
		>
			<div class="d-flex justify-content-between">
				<h5 class="card-title mb-1">{post.title}</h5>
				{#if post.pinned}
					<i class="fa-solid fa-thumbtack" />
				{/if}
			</div>
			<div class="d-flex justify-content-between align-items-center">
				<div class="small text-danger">
					{new Date(post.created).getDate()}
					{new Date(post.created).monthName()}
					{new Date(post.created).getFullYear()}
				</div>
				<div>
					{#if post.tags}
						{#each post.tags as tag}
							<button
								class="badge bg-secondary bg-opacity-10 text-dark text-decoration-none p-1 me-1 border-0"
								on:click={() => {
									goto(`/posts/${tag.name}`).then(() => onClickTag());
								}}>{tag.name}</button
							>
						{/each}
					{/if}
				</div>
			</div>
		</div>
		{#if post.cover && post.cover.video}
			<div class="ratio ratio-16x9 mt-3">
				<!-- svelte-ignore a11y-missing-attribute -->
				<iframe
					class="embed-responsive-item"
					src="{String(post.cover.video).replace(
						'https://youtu.be',
						'https://youtube.com/embed/'
					)}?rel=0"
					frameborder="0"
					allowfullscreen
				/>
			</div>
		{:else if post.cover && post.cover.image}
			<div
				class="img-fluid"
				style="background-image: url({post.cover.image});
					 background-size: no-repeat; background-position: center; background-size: cover; min-height:12em;"
			/>
		{/if}
		<div class="card-body" style="font-size:1em">
			<p class="card-text">{@html post.description}</p>
		</div>
		{#if post.content}
			<div
				class="card-footer {!post.inverted ? 'bg-white text-dark' : 'bg-dark text-light'} border-0"
			>
				<div class="d-flex align-items-center justify-content-between">
					<button
						class="btn btn-sm {!post.inverted ? 'btn-light text-dark' : 'btn-dark text-light'}"
						on:click={() => {}}
					>
						Подробнее
						<i class="fas fa-chevron-right mr-2" />
					</button>
					<div>
						<button
							class="btn {!post.inverted
								? 'btn-light text-dark'
								: 'btn-dark text-light'} border-0 text-dark"
							data-toggle="collapse"
							data-target="#comments"
							title="Комментарии"
							on:click={() => {}}
						>
							<i class="far fa-comment-alt" />
							{#if post.comments?.length > 0}
								<span class="ml-2">{post.comments.length}</span>
							{/if}
						</button>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
