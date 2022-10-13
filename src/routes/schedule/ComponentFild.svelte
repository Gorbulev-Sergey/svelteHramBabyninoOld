<script>
	import Fild from '../admin/schedule/Fild';

	export let day = 1;
	export let fild = new Fild();
</script>

{#each fild.subfilds as subfild, i}
	<tr>
		<!-- {#if i == 0} -->
		<th scope="row" width="16%" class="mr-1 font-weight-normal">
			<span class="">
				{day}
			</span>
		</th>
		<th scope="row" width="59%" class="font-weight-normal"><div class="">{subfild.event}</div></th>
		<!-- {:else}
			<th scope="row" width="16%" class="border-top-0" />
			<th scope="row" width="60%" class="border-top-0 font-weight-normal">
				<div class="">{subfild.event}</div>
			</th>
		{/if} -->
		<th scope="row" width="20%" class="font-weight-normal text-right">
			<span class="">
				{subfild.prayer}
			</span>
		</th>
		<th scope="row" width="4%" class="font-weight-normal">
			<div class="text-right mr-1">{subfild.time}</div>
		</th>
	</tr>
{/each}
