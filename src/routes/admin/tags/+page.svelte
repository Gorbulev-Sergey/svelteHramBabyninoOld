<script>
	// @ts-nocheck
	import PageTitleWrap from '$lib/components/PageTitleWrap.svelte';
	import Filter from '$lib/components/posts/Filter.svelte';
	import { Tag } from '$lib/models/Tag';
	import { db } from '$lib/scripts/firebase';
	import { onValue, push, query, ref, remove, set, update } from 'firebase/database';
	import { onMount } from 'svelte';

	$: tags = new Array();
	$: tag = new Tag();
	let saveToDb = async () => {
		set(ref(db, `/tags`), tags);
	};

	onMount(async () => {
		onValue(ref(db, '/tags'), s => {
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
			<input class="form-control border-0" placeholder="название" bind:value={tag.name} />
			<input class="form-control border-0" placeholder="описание" bind:value={tag.description} />
			<button class="btn btn-primary text-dark" on:click={() => (tag = new Tag())}>Отмена</button>
			<button
				class="btn btn-primary text-dark"
				on:click={() => {
					if (tag.name.trim() != '') {
						tag.name = tag.name.toLocaleLowerCase();
						if (!tag.description) tag.description = tag?.name[0].toLocaleUpperCase() + tag?.name.slice(1);
						else tag.description = tag?.description[0].toLocaleUpperCase() + tag?.description.slice(1);
						if (!tags.find(t => t.name == tag.name && t.description == tag.description)) {
							tags = [...tags, tag];
						}
						saveToDb();
						tag = new Tag();
					}
				}}>Сохранить</button>
		</div>
	</div>
</PageTitleWrap>

<div class="bg-light text-dark rounded p-3">
	<h5 class="mb-3">Доступные теги</h5>
	{#each tags as item, i}
		<div class="btn-group btn-group-sm me-2 mb-2">
			<div class="d-flex text-dark border border-primary pb-1 px-2 rounded-start align-items-center" style="cursor:default;">
				{item.name}
			</div>
			<div
				class="btn btn-primary text-dark"
				on:click={async () => {
					tags.splice(i - 1, 0, tags.splice(i, 1)[0]);
					saveToDb();
				}}>
				<i class="fa-solid fa-angle-left" />
			</div>
			<div
				class="btn btn-primary text-dark"
				on:click={async () => {
					tags.splice(i + 1, 0, tags.splice(i, 1)[0]);
					saveToDb();
				}}>
				<i class="fa-solid fa-angle-right" />
			</div>
			<div
				class="btn btn-primary text-dark"
				on:click={() => {
					tag = item;
				}}>
				<i class="fa-solid fa-pencil" />
			</div>
			<div
				class="btn btn-primary text-dark"
				on:click={async () => {
					tags = tags.filter(t => t != item);
					saveToDb();
				}}>
				<i class="fa-solid fa-trash text-danger" />
			</div>
		</div>
	{/each}
</div>
