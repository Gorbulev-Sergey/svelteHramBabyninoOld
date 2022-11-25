<script>
	export let titleNoPressed = 'кнопка';
	export let titlePressed = 'кнопка';
	export let pressed = false;
	export let onPressed = () => {};
	export let classNoPressed = 'btn-primary';
	export let classPressed = 'btn-primary';
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
