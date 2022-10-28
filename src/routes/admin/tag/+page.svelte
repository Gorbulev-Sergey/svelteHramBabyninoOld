<script>
	// @ts-nocheck
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { tag } from '$lib/models/tag';
	import { db } from '$lib/scripts/firebase';
	import { onValue, push, query, ref, remove, set, update } from 'firebase/database';
	import { onMount } from 'svelte';

	let tags = new Object();
	let _tag = { uid: '', tag: new tag() };

	onMount(async () => {
		onValue(ref(db, 'tags/'), (s) => {
			if (s.exists()) {
				tags = s.val();
			}
		});
	});
</script>

<PageTitle title="Теги" />

<div class="row bg-white rounded p-3">
	<div class="col-md-6">
		<h5>Доступные теги</h5>
		{#each Object.entries(tags) as [uid, item]}
			<div class="btn-group btn-group-sm me-2 mb-2">
				<div class="bg-light text-dark py-1 px-2 rounded-start">{item.name}</div>
				<div
					class="btn btn-dark"
					on:click={() => {
						_tag = { uid: uid, tag: item };
					}}
				>
					<i class="fa-solid fa-pencil" />
				</div>
				<div
					class="btn btn-dark"
					on:click={async () => {
						remove(ref(db, `tags/${uid}`));
					}}
				>
					<i class="fa-solid fa-trash text-danger" />
				</div>
			</div>
		{/each}
	</div>
	<div class="col-md-6">
		<h5>Добавить новый тег</h5>
		<div class="input-group">
			<input class="form-control" placeholder="название" bind:value={_tag.tag.name} />
			<input class="form-control" placeholder="описание" bind:value={_tag.tag.description} />
			<button
				class="btn btn-dark"
				on:click={async () => {
					if (_tag.tag.name != '') {
						_tag.tag.name = _tag.tag.name.toLocaleLowerCase();
						if (!_tag.tag.description)
							_tag.tag.description =
								_tag.tag?.name[0].toLocaleUpperCase() + _tag.tag?.name.slice(1);
						else
							_tag.tag.description =
								_tag.tag?.description[0].toLocaleUpperCase() + _tag.tag?.description.slice(1);
						if (!_tag.uid) push(ref(db, 'tags/'), _tag.tag);
						else update(ref(db, `tags/${_tag.uid}`), _tag.tag);
						_tag = { uid: '', tag: new tag() };
					}
				}}>Сохранить</button
			>
		</div>
	</div>
</div>
