<script>
	// @ts-nocheck

	import { goto } from '$app/navigation';
	import { Post } from '$lib/models/Post';
	import { Tag } from '$lib/models/Tag';
	import { db } from '$lib/scripts/firebase';
	import { ref, get, set, update, push } from 'firebase/database';
	import { onMount } from 'svelte';

	let month = {
		'9': {
			'9:00': {
				event: 'Преподобного Сергия Радонежского',
				prayer: ['Литургия', 'молебен']
			},
			'16:30': {
				prayer: ['Всенощное бдение']
			}
		},
		'10': {
			'9:00': {
				event: 'Апостола и евангелиста Иоанна Богослова',
				prayer: ['Литургия', 'молебен', 'панихида']
			}
		}
	};
</script>

<button
	class="btn btn-light"
	on:click={() => {
		update(ref(db, 'schedule/2022/январь'), month);
	}}>Добавить</button
>
