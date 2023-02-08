// @ts-nocheck
import { db } from '$lib/scripts/firebase';
import { onValue, ref } from 'firebase/database';

let albums;

export let load = () => {
	onValue(ref(db, '/photos'), s => {
		if (s.exists()) albums = s.val();
	});

	return {
		albums: albums
	};
};
