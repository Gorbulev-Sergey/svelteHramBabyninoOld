<script>
	import { goto } from '$app/navigation';
	import IsAuth from '$lib/components/IsAuth.svelte';
	import { auth } from '$lib/scripts/firebase';
</script>

<footer class="bg-light text-dark no-print">
	<div class="p-3">
		<div class="d-flex flex-column justify-content-center align-items-center">
			<div class="pt-2 text-center">
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
			<div class="pb-1 text-center">
				Контакты:
				<span>
					храм: <a class="badge bg-primary text-dark" style="text-decoration: none;" href="tel:8-902-934-63-62">8-902-934-63-62</a
					>,
				</span>
				<span>
					иерей Алексий:
					<a
						class="text-success"
						style="text-decoration: none;"
						href="https://api.whatsapp.com/send?phone=79208768928"
						target="_blank"
						title="Написать в Whatsapp"
						rel="noopener noreferrer">
						<i class="fa-brands fa-whatsapp" />
					</a>
					<a class="badge bg-primary text-dark" style="text-decoration: none;" href="tel:8-920-876-89-28">8-920-876-89-28</a>,
				</span>
				<span>
					иерей Сергий:
					<a
						class="text-success"
						style="text-decoration: none;"
						href="https://api.whatsapp.com/send?phone=79105163686"
						target="_blank"
						title="Написать в Whatsapp"
						rel="noopener noreferrer">
						<i class="fa-brands fa-whatsapp" />
					</a>
					<a class="badge bg-primary text-dark" style="text-decoration: none;" href="tel:8-910-516-36-86">8-910-516-36-86</a>
				</span>
			</div>
			<img
				hidden
				class="my-2 rounded-3"
				style="width: 8em;"
				src="https://mana.su/wp-content/uploads/2017/06/kartinka-s-rozhdestvom-3.jpg"
				alt="" />
		</div>
	</div>
</footer>
