<script>
	// @ts-nocheck
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { tag } from '$lib/models/tag';
	import { db } from '$lib/scripts/firebase';
	import { onValue, push, query, ref, set, update } from 'firebase/database';
	import { onMount } from 'svelte';

	let tags = new Object();
	let tag = { uid: '', tag: new tag() };

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
						tag = { uid: uid, tag: item };
					}}
				>
					<i class="fa-solid fa-pencil" />
				</div>
				<div class="btn btn-dark"><i class="fa-solid fa-trash text-danger" /></div>
			</div>
		{/each}
	</div>
	<div class="col-md-6">
		<h5>Добавить новый тег</h5>
		<div class="input-group">
			<input class="form-control" placeholder="название" bind:value={tag.tag.name} />
			<input class="form-control" placeholder="описание" bind:value={tag.tag.description} />
			<button
				class="btn btn-dark"
				on:click={async () => {
					if (tag.tag.name != '') {
						tag.tag.name = tag.tag.name.toLocaleLowerCase();
						if (!tag.tag.description)
							tag.tag.description = tag.tag?.name[0].toLocaleUpperCase() + tag.tag?.name.slice(1);
						else
							tag.tag.description =
								tag.tag?.description[0].toLocaleUpperCase() + tag.tag?.description.slice(1);
						if (!tag.uid) push(ref(db, 'tags/'), tag.tag);
						else update(ref(db, `tags/${tag.uid}`), tag.tag);
						tag = { uid: '', tag: new tag() };
					}
				}}>Сохранить</button
			>
		</div>
	</div>
</div>
