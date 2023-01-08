<script>
	import { goto } from '$app/navigation';
	import IsAuth from '$lib/components/IsAuth.svelte';
	import { auth } from '$lib/scripts/firebase';
</script>

<footer class="bg-light text-dark no-print">
	<div class="p-3">
		<div class="d-flex flex-column justify-content-center align-items-center">
			<div class="py-2 text-center">
				<IsAuth>
					<i
						class="fa-solid fa-copyright me-1"
						style="cursor: pointer;"
						title="Выйти из аккаунта"
						on:click={() => {
							auth.signOut();
							goto('/');
						}} />
					<i
						slot="notAuth"
						class="fa-solid fa-copyright me-1"
						style="cursor: pointer;"
						title="Вход для администраторов"
						on:click={() => {
							goto('/auth/login');
						}} />
				</IsAuth>
				<span>Храм "Вознесения Господня", посёлок Бабынино, Калужская область, {new Date(Date.now()).getFullYear()} год</span>
			</div>
			<img
				class="mt-1 rounded-3"
				style="width: 8em;"
				src="https://mana.su/wp-content/uploads/2017/06/kartinka-s-rozhdestvom-3.jpg"
				alt="" />
		</div>
	</div>
</footer>
