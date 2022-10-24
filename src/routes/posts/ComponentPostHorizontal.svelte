<script>
	// @ts-nocheck
	import { Post } from '$lib/models/Post';

	export let post = new Post();
	export let reverse = false;
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

<div class="card mb-3 {!post.inverted ? 'bg-white text-dark' : 'bg-dark text-light'} border-0">
	<div class="row g-0">
		{#if !reverse}
			<div class="col-md-8">
				<div class="card-body">
					<div class="d-flex justify-content-between">
						<h5 class="card-title mb-1">{post.title}</h5>
						{#if post.pinned}
							<i class="fa-solid fa-thumbtack" />
						{/if}
					</div>
					<div class="text-danger small mb-2">
						{new Date(post.created).getDate()}
						{new Date(post.created).monthName()}
						{new Date(post.created).getFullYear()}
					</div>
					<div class="card-text">{@html post.description ? post.description : ''}</div>
				</div>
			</div>
			<div class="col-md-4">
				{#if post.cover && post.cover.image}
					<div
						class="img-fluid rounded-end h-100"
						style="background-image: url({post.cover.image});
					 background-size: no-repeat; background-position: center; background-size: cover; min-height:11em;"
					/>
				{/if}
			</div>
		{:else}
			<div class="col-md-4">
				{#if post.cover && post.cover.image}
					<div
						class="img-fluid rounded-start h-100"
						style="background-image: url({post.cover.image});
					 background-size: no-repeat; background-position: center; background-size: cover; min-height:11em;"
					/>
				{/if}
			</div>
			<div class="col-md-8">
				<div class="card-body">
					<div class="d-flex justify-content-between">
						<h5 class="card-title mb-1">{post.title}</h5>
						{#if post.pinned}
							<i class="fa-solid fa-thumbtack" />
						{/if}
					</div>
					<div class="text-danger small mb-2">{new Date(post.created).toLocaleDateString()}</div>
					<div class="card-text">{@html post.description ? post.description : ''}</div>
				</div>
			</div>
		{/if}
	</div>
</div>
