<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { db } from '$lib/scripts/firebase';
	import { onValue, ref, remove } from 'firebase/database';
	import PostHorizontal from '../../posts/PostHorizontal.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let posts = new Object();

	onMount(async () => {
		onValue(ref(db, '/posts'), (s) => {
			if (s.exists()) posts = s.val();
			console.log(posts);
		});
	});
</script>

<PageTitle title="Публикации" />

<div class="row">
	{#each Object.entries(posts) as [uid, item]}
		<PostHorizontal {uid} post={item}>
			<div slot="adminControls" class="d-flex">
				<button class="btn btn-sm btn-light me-1" on:click={() => goto(`/admin/post/edit/${uid}`)}
					><i class="fa-solid fa-pencil" /></button
				>
				<div class="dropdown dropend">
					<button class="btn btn-sm btn-light" data-bs-toggle="dropdown"
						><i class="fa-solid fa-trash text-danger" /></button
					>
					<div class="dropdown-menu p-2 text-center">
						<p>Вы действительно хотите удалить эту публикацию?</p>
						<button class="btn btn-sm btn-light" data-bs-toggle="dropdown">Отмена</button>
						<button
							class="btn btn-sm btn-light text-danger"
							data-bs-toggle="dropdown"
							on:click={() => remove(ref(db, `/posts/${uid}`))}>Удалить</button
						>
					</div>
				</div>
			</div>
		</PostHorizontal>
	{/each}
</div>
