<script>
	export let title = '';
	export let description = '';
	export let author = 'Сергей Горбулёв';
	export let copyright = 'Храм Вознесения Господня пос. Бабынино';
	export let address = '249210, Калужская обл., пос. Бабынино, Базарная пл., 1';
	export let keywords =
		'храм бабынино, храм Вознесения Господня, церковь бабынино, храм поселок бабынино, калуга храм, калужская область храм, бабынинский район храм, Вознесение Господне';
	export let _class = '';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content={author} />
	<meta name="Copyright" content={copyright} />
	<meta name="Address" content={address} />
	<meta name="keywords" content={keywords} />
</svelte:head>

<div class="d-flex justify-content-between flex-wrap align-items-center mb-3 no-print {_class}">
	<div class="d-flex justify-content-between align-items-center flex-wrap">
		<h4 class="text-dark ms-1 my-0 me-3 text-nowrap">{title}</h4>
		<div class="mt-2 my-md-0">
			<slot name="center" />
		</div>
	</div>
	<div class="mt-2 my-md-0">
		<slot name="navigation" />
	</div>
</div>
