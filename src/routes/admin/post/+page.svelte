<script>
	import { goto } from '$app/navigation';
	import ComponentPageTitle from '$lib/components/ComponentPageTitle.svelte';
	import { Post } from '$lib/models/Post';
	import { Tag } from '$lib/models/Tag';
	import { db } from '$lib/scripts/firebase';
	import { onValue, push, ref } from 'firebase/database';
	import { onMount } from 'svelte';

	let post = new Post();
	let tags = new Array();
	let selectedTag = new Tag();

	onMount(async () => {
		onValue(ref(db, 'tags/'), (s) => {
			if (s.exists()) tags = Object.values(s.val());
		});
	});
</script>

<ComponentPageTitle title="Создать публикацию">
	<div slot="navigation">
		<button
			class="btn btn-dark bg-opacity-10"
			on:click={async () => {
				if (post.title != '') {
					push(ref(db, 'posts/'), post);
					goto('/posts');
				}
			}}>Сохранить</button
		>
	</div>
</ComponentPageTitle>

<div class="rounded p-3 {!post.inverted ? 'bg-white text-dark' : 'bg-dark text-light'}">
	<ul class="nav nav-pills mb-3">
		<a class="btn btn-light border-0 me-1 active" data-bs-toggle="pill" href="#cover">Обложка</a>
		<a class="btn btn-light border-0" data-bs-toggle="pill" href="#content">Содержимое</a>
	</ul>

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
					<div class="d-flex justify-content-between mb-3">
						<div>
							<input id="published" type="checkbox" bind:checked={post.published} />
							<label for="published">опубликовать</label>
						</div>
						<div>
							<input id="inverted" type="checkbox" bind:checked={post.inverted} />
							<label for="inverted">инвертировать цвета</label>
						</div>
						<div>
							<input id="pinned" type="checkbox" bind:checked={post.pinned} />
							<label for="pinned">закрепить наверху</label>
						</div>
					</div>
					<div class="d-flex">
						<div class="btn-group mb-2 me-3">
							<select class="form-select rounded-0 rounded-start" bind:value={selectedTag}>
								{#each tags as item}
									<option value={item}>{item.name}</option>
								{/each}
							</select>
							<button
								class="btn btn-light border"
								on:click={() => {
									if (selectedTag.name != '') {
										post.tags = [...post.tags, selectedTag];
										selectedTag = new Tag();
									}
								}}><i class="fa-solid fa-circle-plus" /></button
							>
						</div>
						<div>
							{#each post.tags as item}
								<div class="btn-group btn-group-sm me-2 mb-2">
									<div class="bg-light text-dark py-1 px-2 rounded-start">{item.name}</div>
									<div
										class="btn btn-dark"
										on:click={() => {
											post.tags = post.tags.filter((t) => t.name != item.name);
										}}
									>
										<i class="fa-solid fa-trash text-danger" />
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
			<textarea
				class="form-control border-0
				{!post.inverted ? 'bg-light text-dark bg-opacity-75' : 'bg-secondary text-light bg-opacity-10'}"
				style="min-height: 20em;"
				placeholder="содержимое"
				bind:value={post.content}
			/>
		</div>
	</div>
</div>
