import { Tag } from '$lib/models/Tag';
import { writable } from 'svelte/store';

export let adminPostsFilters = writable({
	published: true,
	pinned: false,
	tag: new Tag('объявления', 'Объявления')
});
