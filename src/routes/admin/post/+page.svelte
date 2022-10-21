<script>
	import ComponentPageTitle from '$lib/components/ComponentPageTitle.svelte';
	import { Post } from '$lib/models/Post';

	let post = new Post();
</script>

<ComponentPageTitle title="Создать публикацию">
	<div slot="navigation">
		<button class="btn btn-dark bg-opacity-10">Сохранить</button>
	</div>
</ComponentPageTitle>

<ul class="nav nav-pills mb-3">
	<a class="btn btn-light me-1 active" data-bs-toggle="pill" href="#cover">Обложка</a>
	<a class="btn btn-light" data-bs-toggle="pill" href="#content">Содержимое</a>
</ul>

<div class="tab-content">
	<div class="tab-pane fade active show" id="cover">
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
				<input
					class="form-control border-0 mb-3"
					placeholder="обложка (url фото)"
					bind:value={post.cover.image}
				/><input
					class="form-control border-0 mb-3"
					placeholder="обложка (url видео)"
					bind:value={post.cover.video}
				/>
			</div>
		</div>
	</div>
	<div class="tab-pane fade" id="content">
		<textarea
			class="form-control border-0"
			style="min-height: 20em;"
			placeholder="содержимое"
			bind:value={post.content}
		/>
	</div>
</div>
