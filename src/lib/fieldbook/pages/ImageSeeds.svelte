<script lang="ts">
	import type { FbContext } from '../fieldbook';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/12;grid-row:1/3">Image seeds</div>
	<Tab {ctx} label="Ideas" />
	<div class="c hn sub" style="grid-column:12/23;grid-row:2/3">places to return to</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="c hn" style="grid-column:1/23;grid-row:3/4">
		The frame you saw without the light, and when it will be right.
	</div>
	<div class="th" style="grid-column:1/23;grid-row:4/5"></div>
	<div class="c ch" style="grid-column:1/7;grid-row:4/5">Where</div>
	<div class="c ch pl" style="grid-column:7/13;grid-row:4/5">Light · when</div>
	<div class="c ch pl" style="grid-column:13/23;grid-row:4/5">The frame</div>
	<div class="vl" style="grid-column:7/8;grid-row:4/33"></div>
	<div class="vl" style="grid-column:13/14;grid-row:4/33"></div>
	<div class="dl" style="grid-column:1/23;grid-row:6/7"></div>
	<div class="dl" style="grid-column:1/23;grid-row:8/9"></div>
	<div class="dl" style="grid-column:1/23;grid-row:10/11"></div>
	<div class="dl" style="grid-column:1/23;grid-row:12/13"></div>
	<div class="dl" style="grid-column:1/23;grid-row:14/15"></div>
	<div class="dl" style="grid-column:1/23;grid-row:16/17"></div>
	<div class="dl" style="grid-column:1/23;grid-row:18/19"></div>
	<div class="dl" style="grid-column:1/23;grid-row:20/21"></div>
	<div class="dl" style="grid-column:1/23;grid-row:22/23"></div>
	<div class="dl" style="grid-column:1/23;grid-row:24/25"></div>
	<div class="dl" style="grid-column:1/23;grid-row:26/27"></div>
	<div class="dl" style="grid-column:1/23;grid-row:28/29"></div>
	<div class="dl" style="grid-column:1/23;grid-row:30/31"></div>
</div>
