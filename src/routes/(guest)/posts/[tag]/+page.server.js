import { db } from '$lib/scripts/firebase';
import { onValue, ref } from 'firebase/database';

let posts = new Object();
let tags = new Object();

export let load = async () => {
	await onValue(ref(db, '/posts'), s => {
		if (s.exists()) posts = s.val();
	});
	await onValue(ref(db, '/tags'), s => {
		if (s.exists()) tags = s.val();
	});

	return {
		posts: posts,
		tags: tags
	};
};
