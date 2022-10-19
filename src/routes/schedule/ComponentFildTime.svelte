<script>
	import FildTime from './FildTime';

	export let fildTime = new FildTime();
</script>

<div style="display: grid; grid-template-columns: 1fr .11fr .3fr">
	<div class="px-3 py-1">{@html fildTime.event}</div>
	<div class="text-end px-3 py-1">{@html fildTime.time}</div>
	<div class="px-3 py-1">{@html fildTime.prayer ? fildTime.prayer : ''}</div>
</div>
