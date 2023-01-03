<script>
	export let title = '';
	export let description = '';
	export let author = 'Сергей Горбулёв';
	export let copyright = 'Храм Вознесения Господня пос. Бабынино';
	export let address = '249210, Калужская обл., пос. Бабынино, Базарная пл., 1';
	export let keywords = '';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content={author} />
	<meta name="Copyright" content={copyright} />
	<meta name="Address" content={address} />
	<meta name="keywords" content={keywords} />
</svelte:head>
