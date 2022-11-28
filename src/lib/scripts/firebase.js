import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDTYaF-wCPkWo0aStWuMwaw5yAWBQPAdmE',
	authDomain: 'sveltehrambabynino.firebaseapp.com',
	databaseURL: 'https://sveltehrambabynino-default-rtdb.firebaseio.com',
	projectId: 'sveltehrambabynino',
	storageBucket: 'sveltehrambabynino.appspot.com',
	messagingSenderId: '762814125883',
	appId: '1:762814125883:web:59c85e90c358d62c66891e',
	measurementId: 'G-HSLZ53GCM0'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
