<script>
	// @ts-nocheck
	import { goto } from '$app/navigation';
	import { Post } from '$lib/models/Post';

	export let uid = '';
	export let post = new Post();
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
	let showContent = false;
</script>

<div
	id={uid ? uid : ''}
	class="card mb-3 {!post.inverted ? 'bg-white text-dark' : 'bg-dark text-light'} border-0"
>
	<div class="row g-0">
		<div class="col-md-8">
			<div class="card-body">
				<div class="d-flex justify-content-between">
					<h5 class="card-title mb-1">{post.title}</h5>
					{#if post.pinned}
						<i class="fa-solid fa-thumbtack" />
					{/if}
				</div>
				<div class="d-flex justify-content-between align-items-center mt-1">
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
										goto(`/posts/${tag.name}`);
									}}>{tag.name}</button
								>
							{/each}
						{/if}
					</div>
				</div>
				<div class="card-text" style="font-size:1em;">
					{#if !showContent || (showContent && !post.content)}
						{@html post.description ? post.description : ''}
					{:else}
						{@html post.content ? post.content : ''}
					{/if}
					{#if post.content}
						<span
							class="badge bg-light text-dark"
							style="cursor: pointer; font-size:.8em;"
							on:click={() => (showContent = !showContent)}
						>
							<i
								class="fa-solid {!showContent ? 'fa-circle-arrow-right' : 'fa-circle-arrow-left'} "
							/>
							...
						</span>
					{/if}
				</div>
			</div>
			<div class="card-body">
				<slot name="adminControls" />
			</div>
		</div>
		<div class="col-md-4 rounded-end overflow-hidden">
			{#if post.cover && post.cover.video}
				<div class="ratio ratio-16x9 h-100">
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
					class="img-fluid  rounded-end h-100"
					style="background-image: url({post.cover.image});
					 background-size: no-repeat; background-position: center; background-size: cover; min-height:12em;"
				/>
			{/if}
		</div>
	</div>
</div>
