import { Tag } from '$lib/models/Tag';
import { Month } from '$lib/models/schedule/Month';
import { writable } from 'svelte/store';
import { onValue, ref } from 'firebase/database';
import { db } from './firebase';

// Для сохранения темы оформления (светлой или тёмной)
export let theme = writable('');

// Для работы фильтра публикаций на странице администрирования
export let adminPostsFilters = writable({
	published: true,
	pinned: false,
	newFirst: true,
	tag: new Tag('объявления', 'Объявления')
});

// Для работы расписания богослужений
export let scheduleMonth = writable(new Month(new Date(Date.now()).getMonth() + 1, new Date(Date.now()).getFullYear()));

// Для работы публикаций, чтобы публикации показывались порционно
// по showedPostsStep раз и для каждого тега отдельно
export let showedPostsStep = 6;
export let mapShowedPostsLength = writable(new Map());
onValue(ref(db, '/tags'), s => {
	let tags = Object.values(s.val());
	let m = new Map();
	tags.forEach(v => m.set(v.name, showedPostsStep));
	mapShowedPostsLength.set(m);
});
