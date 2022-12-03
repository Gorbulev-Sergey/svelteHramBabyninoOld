import { Tag } from '$lib/models/Tag';
import { Month } from '$lib/models/schedule/Month';
import { writable } from 'svelte/store';

export let theme = writable('');
export let adminPostsFilters = writable({
	published: true,
	pinned: false,
	newFirst: true,
	tag: new Tag('объявления', 'Объявления')
});

export let showedPosts = writable(new Object());

export let scheduleMonth = writable(
	new Month(new Date(Date.now()).getMonth() + 1, new Date(Date.now()).getFullYear())
);
