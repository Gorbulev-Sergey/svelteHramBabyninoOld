// @ts-nocheck
import { db } from '$lib/scripts/firebase';
import { onValue, ref } from 'firebase/database';

let contacts;

export let load = () => {
	onValue(ref(db, '/contacts'), s => {
		if (s.exists()) contacts = s.val();
	});

	return {
		contacts: contacts
	};
};
