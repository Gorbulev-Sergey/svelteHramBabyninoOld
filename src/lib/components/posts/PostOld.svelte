<script>
	// @ts-nocheck
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Post } from '$lib/models/Post';

	export let uid = '';
	export let post = new Post();
	export let _class = '';
	let showContent = false;
</script>

<div id={uid ? uid : ''} class="col">
	<div class="card {!post.inverted ? 'bg-light text-dark' : 'bg-dark text-light'} border-0 h-100 border {_class}">
		<div class="card-header {!post.inverted ? 'bg-light text-dark' : 'bg-dark text-light'} border-0">
			<div class="d-flex justify-content-between">
				<h5 class="card-title my-1">{post.title}</h5>
				{#if post.pinned}
					<i class="fa-solid fa-thumbtack" />
				{/if}
			</div>
			<div class="d-flex justify-content-between align-items-center mb-1">
				<div class="small text-danger">
					{new Date(post.created).getDate()}
					{new Date(post.created).monthName()}
					{new Date(post.created).getFullYear()}
				</div>
				<div>
					{#if post.tags}
						{#each post.tags as tag}
							<button
								class="badge {!post.inverted
									? 'bg-primary text-dark'
									: 'bg-secondary text-light'} text-decoration-none p-1 ms-1 border-0"
								on:click={() => {
									goto(`/${$page.url.pathname.split('/')[1]}/posts/${tag.name}`);
								}}>{tag.name}</button>
						{/each}
					{/if}
				</div>
			</div>
		</div>
		{#if post.cover && post.cover.video}
			<div class="ratio ratio-21x9">
				<!-- svelte-ignore a11y-missing-attribute -->
				<iframe
					class="embed-responsive-item"
					src="{String(post.cover.video).replace('https://youtu.be', 'https://youtube.com/embed/')}?rel=0"
					frameborder="0"
					allowfullscreen />
			</div>
		{:else if post.cover && post.cover.image}
			<div
				class="img-fluid"
				style="background-image: url({post.cover.image});
					 background-repeat: no-repeat; background-position: center; background-size: cover; min-height:12em;" />
		{/if}
		<div class="card-body" style="font-size:1em;">
			{#if !showContent || (showContent && !post.content)}
				{@html post.description ? post.description : ''}
			{:else}
				{@html post.content ? post.content : ''}
			{/if}
			{#if post.content}
				<span
					class="badge bg-primary text-dark"
					style="cursor: pointer; font-size:.8em;"
					on:click={() => {
						showContent = !showContent;
						goto(`#${uid}`);
					}}>
					<i class="fa-solid {!showContent ? 'fa-circle-arrow-right' : 'fa-circle-arrow-left'} " />
					...
				</span>
			{/if}
		</div>
		{#if post.content}
			<div class="d-flex align-items-center justify-content-end mx-3 mb-3">
				<button
					class="btn btn-sm btn-primary text-dark"
					on:click={() => {
						if (uid) goto(`/posts/details/${uid}?returnUrl=${$page.url.pathname}`);
					}}><i class="fa-solid fa-circle-arrow-right me-1" />...</button>
			</div>
		{/if}

		<div class="d-flex align-items-center justify-content-between">
			{#if post.comments}
				<div>
					<button
						class="btn btn-sm btn-light text-dark"
						data-toggle="collapse"
						data-target="#comments"
						title="Комментарии"
						on:click={() => {}}>
						<i class="far fa-comment-alt" />
						{#if post.comments?.length > 0}
							<span class="ml-2">{post.comments.length}</span>
						{/if}
					</button>
				</div>
			{/if}
		</div>
		<slot name="admin" />
	</div>
</div>
