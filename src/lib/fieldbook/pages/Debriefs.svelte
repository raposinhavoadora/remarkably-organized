<script lang="ts">
	import type { FbContext } from '../fieldbook';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/12;grid-row:1/3">Debriefs</div>
	<Tab {ctx} label="Walks" />
	<div class="c hn sub" style="grid-column:10/23;grid-row:2/3">
		the same night, ten minutes
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="th" style="grid-column:1/23;grid-row:3/4"></div>
	<div class="c ch" style="grid-column:1/4;grid-row:3/4">Walk</div>
	<div class="c ch" style="grid-column:1/4;grid-row:4/5">Landed</div>
	<div class="c ch" style="grid-column:1/4;grid-row:5/6">Broke</div>
	<div class="c ch" style="grid-column:1/4;grid-row:6/7">Change</div>
	<div class="c ch" style="grid-column:1/4;grid-row:7/8">Quote</div>
	<div class="c hn end" style="grid-column:17/23;grid-row:7/8">
		ok to use
		<span class="bx" style="margin:0 0 0 9px"></span>
	</div>
	<div class="vl" style="grid-column:4/5;grid-row:4/9"></div>

	<div class="th" style="grid-column:1/23;grid-row:10/11"></div>
	<div class="c ch" style="grid-column:1/4;grid-row:10/11">Walk</div>
	<div class="c ch" style="grid-column:1/4;grid-row:11/12">Landed</div>
	<div class="c ch" style="grid-column:1/4;grid-row:12/13">Broke</div>
	<div class="c ch" style="grid-column:1/4;grid-row:13/14">Change</div>
	<div class="c ch" style="grid-column:1/4;grid-row:14/15">Quote</div>
	<div class="c hn end" style="grid-column:17/23;grid-row:14/15">
		ok to use
		<span class="bx" style="margin:0 0 0 9px"></span>
	</div>
	<div class="vl" style="grid-column:4/5;grid-row:11/16"></div>

	<div class="th" style="grid-column:1/23;grid-row:17/18"></div>
	<div class="c ch" style="grid-column:1/4;grid-row:17/18">Walk</div>
	<div class="c ch" style="grid-column:1/4;grid-row:18/19">Landed</div>
	<div class="c ch" style="grid-column:1/4;grid-row:19/20">Broke</div>
	<div class="c ch" style="grid-column:1/4;grid-row:20/21">Change</div>
	<div class="c ch" style="grid-column:1/4;grid-row:21/22">Quote</div>
	<div class="c hn end" style="grid-column:17/23;grid-row:21/22">
		ok to use
		<span class="bx" style="margin:0 0 0 9px"></span>
	</div>
	<div class="vl" style="grid-column:4/5;grid-row:18/23"></div>

	<div class="th" style="grid-column:1/23;grid-row:24/25"></div>
	<div class="c ch" style="grid-column:1/4;grid-row:24/25">Walk</div>
	<div class="c ch" style="grid-column:1/4;grid-row:25/26">Landed</div>
	<div class="c ch" style="grid-column:1/4;grid-row:26/27">Broke</div>
	<div class="c ch" style="grid-column:1/4;grid-row:27/28">Change</div>
	<div class="c ch" style="grid-column:1/4;grid-row:28/29">Quote</div>
	<div class="c hn end" style="grid-column:17/23;grid-row:28/29">
		ok to use
		<span class="bx" style="margin:0 0 0 9px"></span>
	</div>
	<div class="vl" style="grid-column:4/5;grid-row:25/30"></div>

	<div class="c hn" style="grid-column:1/23;grid-row:32/33">
		more walks → the next page
	</div>
</div>
