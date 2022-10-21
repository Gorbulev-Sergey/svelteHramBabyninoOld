<script>
	import { goto } from '$app/navigation';
	import ComponentPageTitle from '$lib/components/ComponentPageTitle.svelte';
	import { Post } from '$lib/models/Post';
	import { db } from '$lib/scripts/firebase';
	import { push, ref } from 'firebase/database';

	let post = new Post();
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

<ul class="nav nav-pills mb-3">
	<a class="btn btn-light border-0 me-1 active" data-bs-toggle="pill" href="#cover">Обложка</a>
	<a class="btn btn-light border-0" data-bs-toggle="pill" href="#content">Содержимое</a>
</ul>

<div class="tab-content">
	<div class="tab-pane show" id="cover">
		<div class="row">
			<div class="col-md-8">
				<input class="form-control border-0 mb-3" placeholder="заголовок" bind:value={post.title} />
				<textarea
					class="form-control border-0 mb-3"
					placeholder="краткое описание"
					style="min-height: 10em;"
					bind:value={post.description}
				/>
				<div>
					<input
						id="published"
						type="checkbox"
						class="bg-dark text-light"
						bind:checked={post.published}
					/>
					<label for="published">опубликовать</label>
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group mb-3">
					<input
						class="form-control border-0 mb-3"
						placeholder="обложка (url фото)"
						bind:value={post.cover.image}
					/>
					{#if post.cover.image}
						<img class="card-img rounded" src={post.cover.image} alt="" />
					{/if}
				</div>
				<div class="form-group mb-3">
					<input
						class="form-control border-0 mb-3"
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
			class="form-control border-0"
			style="min-height: 20em;"
			placeholder="содержимое"
			bind:value={post.content}
		/>
	</div>
</div>
