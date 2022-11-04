<script>
	export let titleNoPressed = 'кнопка';
	export let titlePressed = 'кнопка';
	export let pressed = false;
	export let onPressed = () => {};
	export let classNoPressed = 'btn-dark';
	export let classPressed = 'btn-dark';
	export let _class = '';
</script>

<button
	class="btn {pressed ? classPressed : classNoPressed} {_class}"
	on:click={() => {
		pressed = !pressed;
		onPressed();
	}}
>
	{pressed ? titlePressed : titleNoPressed}
</button>
