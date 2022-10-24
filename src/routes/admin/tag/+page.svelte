<script>
	// @ts-nocheck
	import ComponentPageTitle from '$lib/components/ComponentPageTitle.svelte';
	import { Tag } from '$lib/models/Tag';
	import { db } from '$lib/scripts/firebase';
	import { onValue, push, query, ref, set } from 'firebase/database';
	import { onMount } from 'svelte';

	let tags = new Array();
	let tag = new Tag();

	onMount(async () => {
		onValue(ref(db, 'tags/'), (s) => {
			if (s.exists()) {
				tags = Object.values(s.val());
			}
		});
	});
</script>

<ComponentPageTitle title="Теги" />

<div class="bg-white rounded p-3">
	<h5>Добавить новый тег</h5>
	<div class="input-group">
		<input class="form-control" placeholder="название" bind:value={tag.title} />
		<input class="form-control" placeholder="описание" bind:value={tag.description} />
		<button
			class="btn btn-dark"
			on:click={async () => {
				if (tag.title != '') {
					push(ref(db, 'tags/', tag));
					tag = new Tag();
				}
			}}>Сохранить</button
		>
	</div>
</div>
