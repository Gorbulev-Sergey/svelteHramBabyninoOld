<script>
	import FildTime from '../models/FildTime';

	export let fildTime = new FildTime();
</script>

<div style="display: grid; grid-template-columns: 1fr .3fr .1fr">
	<div class="px-3 py-1">{@html fildTime.event}</div>
	<div class="px-3 py-1 text-end">
		<i class="">{@html fildTime.prayer ? fildTime.prayer : ''}</i>
	</div>
	<div class="text-center px-3 py-1"><b>{@html fildTime.time}</b></div>
</div>
