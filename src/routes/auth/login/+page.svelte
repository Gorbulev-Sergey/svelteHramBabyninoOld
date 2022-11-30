<script>
	import { goto } from '$app/navigation';
	import { auth } from '$lib/scripts/firebase';
	import { signInWithEmailAndPassword } from 'firebase/auth';

	let credential = { email: '', password: '' };
	let errorMessage = '';
	function login() {
		checkEmailAndPassword();
		if (
			credential.email.trim() !== '' &&
			credential.email.includes('@') &&
			credential.email.includes('.') &&
			credential.password.trim() !== '' &&
			credential.password.length > 3
		) {
			signInWithEmailAndPassword(auth, credential.email, credential.password).then((r) =>
				goto('/admin/posts')
			);
		}
	}
	function checkEmailAndPassword() {
		if (credential.email.trim() == '') errorMessage += `отсутствует email<br/>`;
		if (!credential.email.includes('@') || !credential.email.includes('.'))
			errorMessage += `email должен содержать символы "@" и "."<br/>`;
		if (credential.password.trim() == '') errorMessage += `пароль не должен быть пустым<br/>`;
		if (credential.password.length < 4)
			errorMessage += `пароль должен состоять минимум из 4 символов<br/>`;
	}
</script>

<div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
	<div class="bg-light text-dark p-3 rounded">
		<b class="text-uppercase">Вход для администраторов сайта</b>
		<div class="text-danger small">{@html errorMessage}</div>
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
			<div class="d-flex justify-content-between align-items-center">
				<button class="btn btn-dark text-light" on:click={() => login()}>Войти</button>
				<button class="btn btn-light text-dark" on:click={() => goto('/')}>Отмена</button>
			</div>
		</div>
	</div>
</div>
