<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { db } from '$lib/scripts/firebase';
	import { onValue, ref, remove, update } from 'firebase/database';
	import PostHorizontal from '../../posts/PostHorizontal.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Pin from '$lib/components/Pin.svelte';
	import TagManager from '$lib/components/TagManager.svelte';
	import { adminPostsFilters } from '$lib/scripts/writableData';
	import Filter from './Filter.svelte';
	import FilterTags from './FilterTags.svelte';

	let posts = new Object();
	$: tags = new Array();

	onMount(async () => {
		onValue(ref(db, '/posts'), (s) => {
			if (s.exists()) posts = s.val();
		});
		onValue(ref(db, 'tags/'), (s) => {
			if (s.exists()) tags = Object.values(s.val());
		});
	});
</script>

<PageTitle title="Публикации">
	<div slot="navigation">
		<button class="btn btn-sm btn-dark" on:click={() => goto('/admin/post/create')}>Создать</button>
	</div>
</PageTitle>

<div class="d-flex align-items-center flex-wrap mb-3">
	<Filter
		title="опубликованныe:"
		_class="me-1"
		onSelect={(v) => ($adminPostsFilters.published = v)}
		selected={$adminPostsFilters.published}
	/>
	<FilterTags
		title="тип публикации:"
		{tags}
		onSelect={(v) => ($adminPostsFilters.tag = v)}
		selected={$adminPostsFilters.tag}
	/>
</div>

<div class="row">
	{#each Object.entries(posts).filter(([k, v]) => v.published == $adminPostsFilters.published && v.tags.find((t) => t.name == $adminPostsFilters.tag.name)) as [uid, item]}
		<PostHorizontal {uid} post={item}>
			<div slot="adminControls" class="card-body">
				<div class="d-flex justify-content-between align-items-center flex-wrap">
					<div class="d-flex me-3">
						<TagManager
							title="Теги:"
							tags={tags.filter((t) => !item.tags?.find((i) => i.name == t.name))}
							bind:selectedTags={item.tags}
							onSelect={() => update(ref(db, `/posts/${uid}`), item)}
							_class={item.inverted ? 'text-dark' : ''}
						/>
					</div>
					<div class="d-flex mb-2 flex-wrap">
						<div class="d-flex me-3">
							<Pin
								classFontAwesome="fa-regular fa-eye"
								text="опубликовать"
								_class="me-2"
								bind:checked={item.published}
								onChange={() => {
									update(ref(db, `/posts/${uid}`), item);
								}}
							/>
							<Pin
								classFontAwesome="fa-solid fa-thumbtack"
								text="закрепить"
								_class="me-2"
								bind:checked={item.pinned}
								onChange={() => {
									update(ref(db, `/posts/${uid}`), item);
								}}
							/>
							<Pin
								classFontAwesome="fa-solid fa-brush"
								text="инвертировать"
								bind:checked={item.inverted}
								onChange={() => {
									update(ref(db, `/posts/${uid}`), item);
								}}
							/>
						</div>
						<div class="d-flex">
							<button
								class="btn btn-sm btn-light me-1"
								on:click={() => goto(`/admin/post/edit/${uid}`)}
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
					</div>
				</div>
			</div>
		</PostHorizontal>
	{/each}
</div>
