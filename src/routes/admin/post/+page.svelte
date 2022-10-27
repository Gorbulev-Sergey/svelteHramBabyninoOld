<script>
	import { goto } from '$app/navigation';
	import { LOGONSERVER } from '$env/static/private';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import Pin from '$lib/components/Pin.svelte';
	import SelectTag from '$lib/components/SelectTag.svelte';
	import { Post } from '$lib/models/Post';
	import { Tag } from '$lib/models/Tag';
	import { db } from '$lib/scripts/firebase';
	import { onValue, push, ref } from 'firebase/database';
	import { onMount } from 'svelte';

	let post = new Post();
	$: tags = new Array();
	let selectedTag = new Tag();

	onMount(async () => {
		onValue(ref(db, 'tags/'), (s) => {
			if (s.exists()) tags = Object.values(s.val());
		});
	});
</script>

<PageTitle title="Создать публикацию">
	<div slot="navigation">
		<button
			class="btn btn-dark bg-opacity-10"
			on:click={async () => {
				if (post.title != '') {
					push(ref(db, '/posts'), post);
					goto('/posts');
				}
			}}>Сохранить</button
		>
	</div>
</PageTitle>

<div class="rounded p-3 {!post.inverted ? 'bg-white text-dark' : 'bg-dark text-light'}">
	<div class="d-flex justify-content-between align-items-center mb-3">
		<div class="nav nav-pills">
			<a class="btn btn-light border-0 me-1 active" data-bs-toggle="pill" href="#cover">Обложка</a>
			<a class="btn btn-light border-0" data-bs-toggle="pill" href="#content">Содержимое</a>
		</div>
		<div class="d-flex">
			<Pin
				classFontAwesome="fa-regular fa-eye"
				text="опубликовать"
				_class="me-4"
				bind:checked={post.published}
			/>
			<Pin
				classFontAwesome="fa-solid fa-thumbtack"
				text="закрепить наверху"
				_class="me-4"
				bind:checked={post.pinned}
			/>
			<Pin
				classFontAwesome="fa-solid fa-brush"
				text="инвертировать цвета"
				bind:checked={post.inverted}
			/>
		</div>
	</div>

	<div class="tab-content">
		<div class="tab-pane show" id="cover">
			<div class="row">
				<div class="col-md-8">
					<input
						class="form-control border-0 mb-3
						{!post.inverted ? 'bg-light text-dark bg-opacity-75' : 'bg-secondary text-light bg-opacity-10'}"
						placeholder="заголовок"
						bind:value={post.title}
					/>
					<textarea
						class="form-control border-0 mb-3
						{!post.inverted ? 'bg-light text-dark bg-opacity-75' : 'bg-secondary text-light bg-opacity-10'}"
						placeholder="краткое описание"
						style="min-height: 10em;"
						bind:value={post.description}
					/>
					<div class="mt-3" style="display: grid; grid-template-columns: auto 1fr;">
						<div>
							<SelectTag
								{tags}
								bind:selected={selectedTag}
								onSelect={() => {
									if (selectedTag.name != '') {
										post.tags = [...post.tags, selectedTag];
										selectedTag = new Tag();
									}
								}}
								_class="mb-2 me-2"
							/>
						</div>
						<div>
							{#each post.tags as item}
								<div class="badge mb-1 d-inline-flex p-0 me-1">
									<div class="bg-light text-dark px-2 py-1 rounded-start">{item.name}</div>
									<div
										class="btn btn-sm btn-light px-1 py-0 rounded-0 rounded-end"
										on:click={() => {
											post.tags = post.tags.filter((t) => t.name != item.name);
										}}
									>
										<i class="fa-solid fa-delete-left" />
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group mb-3">
						<input
							class="form-control border-0 mb-3
							{!post.inverted ? 'bg-light text-dark bg-opacity-75' : 'bg-secondary text-light bg-opacity-10'}"
							placeholder="обложка (url фото)"
							bind:value={post.cover.image}
						/>
						{#if post.cover.image}
							<img class="card-img rounded" src={post.cover.image} alt="" />
						{/if}
					</div>
					<div class="form-group mb-3">
						<input
							class="form-control border-0 mb-3
							{!post.inverted ? 'bg-light text-dark bg-opacity-75' : 'bg-secondary text-light bg-opacity-10'}"
							placeholder="обложка (url видео)"
							bind:value={post.cover.video}
						/>
						{#if post.cover.video}
							<div class="ratio ratio-16x9 rounded overflow-hidden mt-3">
								<!-- svelte-ignore a11y-missing-attribute -->
								<iframe
									class="embed-responsive-item"
									src="{post.cover.video
										.toString()
										.replace('https://youtu.be', 'https://youtube.com/embed/')}?rel=0"
									frameborder="0"
									allowfullscreen
								/>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
		<div class="tab-pane" id="content">
			<div
				class="form-control border-0
				{!post.inverted ? 'bg-light text-dark bg-opacity-75' : 'bg-secondary text-light bg-opacity-10'}"
				style="min-height: 20em;"
				placeholder="содержимое"
				contenteditable="true"
				bind:innerHTML={post.content}
			/>
		</div>
	</div>
</div>
