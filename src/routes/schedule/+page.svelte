<script>
	// @ts-nocheck

	import { db } from '$lib/scripts/firebase';
	import { push, ref, set, update } from 'firebase/database';
	import ComponentMonth from './ComponentMonth.svelte';

	let items = new Array();
	let month = { i: 10, name: 'октябрь' };
</script>

<button
	class="btn btn-dark"
	on:click={() => {
		console.log(items);
		let filterItems = items.filter((fild) => fild.subfilds.some((subfild) => subfild.event != ''));
		let it = new Map(filterItems.map((x) => [x.date, x.subfilds]));
		console.log(it);
		update(ref(db, `/schedule/2022/${month.name}`), Object.fromEntries(it));
		//filterItems.forEach((i) => push(ref(db, `/schedule/2022/${month.name}`), i));
	}}>Сохранить</button
>

<ComponentMonth class="mt-2" year={2022} month={month.i} bind:listFild={items} />
