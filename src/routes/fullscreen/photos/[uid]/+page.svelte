<script>
	// @ts-nocheck
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Album } from '$lib/models/photos/Album';
	import { db } from '$lib/scripts/firebase';
	import { get, onValue, ref } from 'firebase/database';
	import { onMount } from 'svelte';

	let album = new Album();

	onMount(async () => {
		onValue(ref(db, `/photos/${$page.params.uid}`), (s) => {
			if (s.exists()) album = s.val();
		});
	});
</script>

{#if album.photos.length > 0}
	<button
		class="btn btn-close btn-close-white position-fixed m-3"
		style="z-index: 1000; right:0;"
		on:click={() => {
			document.exitFullscreen();
			$page.url.searchParams.get('returnTo')
				? goto($page.url.searchParams.get('returnTo'))
				: goto('/guest/photos');
		}}
	/>
	<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
		<div class="carousel-indicators">
			{#each album.photos as photo, i}
				<button
					data-bs-target="#carouselExampleIndicators"
					class={i == 0 ? 'active' : ''}
					data-bs-slide-to={i.toString()}
				/>
			{/each}
		</div>
		<div class="carousel-inner">
			{#each album.photos as photo, i}
				<div class="carousel-item {i == 0 ? 'active' : ''}">
					<div
						class="img-fluid h-100"
						style="background-image: url({photo.url});
							background-repeat: no-repeat; background-position: center; background-size: contain; min-height:100vh;"
					/>
				</div>
			{/each}
		</div>
		{#if album.photos.length > 1}
			<button
				class="carousel-control-prev"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="prev"
			>
				<span class="carousel-control-prev-icon" aria-hidden="true" />
				<span class="visually-hidden">Предыдущий</span>
			</button>
			<button
				class="carousel-control-next"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="next"
			>
				<span class="carousel-control-next-icon" aria-hidden="true" />
				<span class="visually-hidden">Следующий</span>
			</button>
		{/if}
	</div>
{/if}
