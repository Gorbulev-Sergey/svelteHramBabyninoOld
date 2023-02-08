// @ts-nocheck
import { db } from '$lib/scripts/firebase';
import { onValue, ref } from 'firebase/database';

let tags;
let posts;

export let load = () => {
	onValue(ref(db, '/tags'), s => {
		tags = s.val();
	});
	onValue(ref(db, '/posts'), s => {
		posts = s.val();
	});

	return {
		tags: tags,
		posts: posts
	};
};
