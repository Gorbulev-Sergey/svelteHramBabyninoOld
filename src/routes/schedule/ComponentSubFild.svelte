<script>
	import SubFild from '../admin/schedule/SubFild';

	export let item = new SubFild();
</script>

<th scope="row" width="16%" class="border-top-0" />
<th scope="row" width="60%" class="border-top-0 font-weight-normal"
	><div class="">{item.event}</div></th
>
<th scope="row" width="20%" class="font-weight-normal text-right">
	<span class="">
		{item.prayer}
	</span>
</th>
<th scope="row" width="4%" class="font-weight-normal">
	<div class="text-right mr-1">{item.time}</div>
</th>
