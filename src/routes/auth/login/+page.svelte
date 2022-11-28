<script>
	import { goto } from '$app/navigation';
	import { auth } from '$lib/scripts/firebase';
	import { signInWithEmailAndPassword } from 'firebase/auth';

	let credential = { email: '', password: '' };
	function login() {
		if (
			credential.email.trim() !== '' &&
			credential.email.includes('@') &&
			credential.email.includes('.') &&
			credential.password.trim() !== '' &&
			credential.password.length > 3
		) {
			signInWithEmailAndPassword(auth, credential.email, credential.password).then((r) =>
				goto('/')
			);
		}
	}
</script>

<div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
	<div class="bg-light text-dark p-3 rounded">
		<b class="text-uppercase">Вход для администраторов сайта</b>
		<div class="mt-4">
			<div class="input-group mb-2">
				<input class="form-control" placeholder="email" bind:value={credential.email} />
			</div>
			<div class="input-group mb-4">
				<input
					class="form-control"
					type="password"
					placeholder="пароль"
					bind:value={credential.password}
				/>
			</div>
			<div class="d-flex flex-column justify-content-center align-items-center">
				<button class="btn btn-dark text-light" on:click={() => login()}>Войти</button>
				<button class="btn btn-sm btn-link text-dark">или зарегистрироваться</button>
			</div>
		</div>
	</div>
</div>
