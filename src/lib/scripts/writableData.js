import { writable } from 'svelte/store';

export let adminPostsFilters = writable({
	published: true,
	pinned: false
});
