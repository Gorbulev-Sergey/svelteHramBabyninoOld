<script>
	import { Post } from '$lib/models/Post';

	export let post = new Post();
</script>

<div class="card mb-3 bg-white border-0">
	<div class="row g-0">
		<div class="col-md-8">
			<div class="card-body">
				<h5 class="card-title">{post.title}</h5>
				<p class="card-text">{@html post.content}</p>
				<p class="card-text">
					<small class="text-muted">{post.description}</small>
				</p>
			</div>
		</div>
		<div class="col-md-4">
			<img src={post.cover.image} class="img-fluid rounded-end" alt="..." />
		</div>
	</div>
</div>
