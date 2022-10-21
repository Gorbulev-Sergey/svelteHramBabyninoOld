<script>
	import { Post } from '$lib/models/Post';

	export let post = new Post();
</script>

<div class="col mb-4">
	<div class="card bg-white border-0 text-dark h-100 border">
		<div class="card-header bg-white text-dark border-0">
			<h5 class="card-title">{@html post.title}</h5>
			<div class="d-flex justify-content-between align-items-center">
				<div class="small text-danger">{new Date(post.created).toLocaleDateString()}</div>
				<div>
					{#if post.tags}
						{#each post.tags as tag}
							<a class="badge bg-info text-dark p-1 ml-1" href="/posts/{tag.title}">{tag.title}</a>
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
				style="background:url({post.cover.image}); background-size:cover; height:220px"
			/>
		{/if}
		<div class="card-body" style="font-size:1em">
			<p class="card-text">{@html post.description}</p>
		</div>
		{#if post.content}
			<div class="card-footer bg-white text-dark border-0">
				<div class="d-flex align-items-center justify-content-between">
					<button class="btn btn-sm btn-light text-dark" on:click={() => {}}>
						Подробнее
						<i class="fas fa-chevron-right mr-2" />
					</button>
					<div>
						<button
							class="btn btn-light text-dark"
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
