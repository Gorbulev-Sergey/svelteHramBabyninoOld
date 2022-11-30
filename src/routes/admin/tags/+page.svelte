<script>
	// @ts-nocheck
	import PageTitleWrap from '$lib/components/PageTitleWrap.svelte';
	import { Tag } from '$lib/models/Tag';
	import { db } from '$lib/scripts/firebase';
	import { onValue, push, query, ref, remove, set, update } from 'firebase/database';
	import { onMount } from 'svelte';

	let tags = new Object();
	let tag = { uid: '', tag: new Tag() };

	onMount(async () => {
		onValue(ref(db, '/tags'), (s) => {
			if (s.exists()) {
				tags = s.val();
			}
		});
	});
</script>

<PageTitleWrap title="Теги">
	<div slot="navigation" class="d-flex align-items-center">
		<div class="input-group">
			<span class="input-group-text border-0"><i class="fa-solid fa-circle-plus" /></span>
			<input class="form-control border-0" placeholder="название" bind:value={tag.tag.name} />
			<input
				class="form-control border-0"
				placeholder="описание"
				bind:value={tag.tag.description}
			/>
			<button class="btn btn-primary text-dark" on:click={() => (tag = { uid: '', tag: new Tag() })}
				>Отмена</button
			>
			<button
				class="btn btn-primary text-dark"
				on:click={async () => {
					if (tag.tag.name.trim() != '') {
						tag.tag.name = tag.tag.name.toLocaleLowerCase();
						if (!tag.tag.description)
							tag.tag.description = tag.tag?.name[0].toLocaleUpperCase() + tag.tag?.name.slice(1);
						else
							tag.tag.description =
								tag.tag?.description[0].toLocaleUpperCase() + tag.tag?.description.slice(1);
						if (!tag.uid) push(ref(db, 'tags/'), tag.tag);
						else update(ref(db, `tags/${tag.uid}`), tag.tag);
						tag = { uid: '', tag: new Tag() };
					}
				}}>Сохранить</button
			>
		</div>
	</div>
</PageTitleWrap>

<div class="bg-light text-dark rounded p-3">
	<h5 class="mb-3">Доступные теги</h5>
	{#each Object.entries(tags) as [uid, item]}
		<div class="btn-group btn-group-sm me-2 mb-2">
			<div class="bg-primary text-dark py-1 px-2 rounded-start">{item.name}</div>
			<div
				class="btn btn-dark text-light"
				on:click={() => {
					tag = { uid: uid, tag: item };
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
