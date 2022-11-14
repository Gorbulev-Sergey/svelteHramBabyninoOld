<script>
	import { goto } from '$app/navigation';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import Pin from '$lib/components/Pin.svelte';
	import TagManager from '$lib/components/tags/TagManager.svelte';
	import { Post } from '$lib/models/Post';
	import { Tag } from '$lib/models/Tag';
	import { db } from '$lib/scripts/firebase';
	import { onValue, push, ref } from 'firebase/database';
	import { onMount } from 'svelte';
	import Editor from '$lib/components/posts/Editor.svelte';

	let post = new Post();
	$: tags = new Array();
	let selectedTag = new Tag();
	let showCode = false;

	onMount(async () => {
		onValue(ref(db, 'tags/'), (s) => {
			if (s.exists()) tags = Object.values(s.val());
		});
	});
</script>

<PageTitle title="Создать публикацию">
	<div slot="navigation">
		<button class="btn btn-light" on:click={() => goto(`/admin/posts`)}>Отмена</button>
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
	<div class="d-flex flex-wrap justify-content-between align-items-center mb-3">
		<div class="nav nav-pills">
			<a class="btn btn-light border-0 me-1 active" data-bs-toggle="pill" href="#cover">Обложка</a>
			<a class="btn btn-light border-0" data-bs-toggle="pill" href="#content">Содержимое</a>
		</div>
		<div class="d-flex flex-wrap">
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
					<TagManager {tags} bind:selectedTags={post.tags} />
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
			<Editor {post} />
		</div>
	</div>
</div>
