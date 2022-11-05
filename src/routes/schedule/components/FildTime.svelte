<script>
	import FildTime from '../models/FildTime';

	export let fildTime = new FildTime();
</script>

<div style="display: grid; grid-template-columns: 1fr .3fr .1fr">
	<div class="px-3 py-1" style="min-width: 12em;">{@html fildTime.event}</div>
	<div class="px-3 py-1 text-end" style="min-width: 8em;">
		<i class="">{@html fildTime.prayer ? fildTime.prayer : ''}</i>
	</div>
	<div class="text-center px-3 py-1" style="min-width: 5em;"><b>{@html fildTime.time}</b></div>
</div>
