<script lang="ts">
	import type { FbContext } from '../fieldbook';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/12;grid-row:1/3">I owe</div>
	<Tab {ctx} label="System" />
	<div class="c hn sub" style="grid-column:10/23;grid-row:2/3">
		promises, so they get kept
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="th" style="grid-column:1/23;grid-row:3/4"></div>
	<div class="c ch" style="grid-column:1/3;grid-row:3/4">Date</div>
	<div class="c ch pl" style="grid-column:3/8;grid-row:3/4">To</div>
	<div class="c ch pl" style="grid-column:8/18;grid-row:3/4">What</div>
	<div class="c ch ctr rd" style="grid-column:18/21;grid-row:3/4">By</div>
	<div class="c ch ctr" style="grid-column:21/23;grid-row:3/4">✓</div>
	<div class="vl" style="grid-column:3/4;grid-row:3/18"></div>
	<div class="vl" style="grid-column:8/9;grid-row:3/18"></div>
	<div class="vl" style="grid-column:18/19;grid-row:3/18"></div>
	<div class="vl" style="grid-column:21/22;grid-row:3/18"></div>
	<div class="r2" style="grid-column:1/23;grid-row:17/18"></div>

	<div class="c st" style="grid-column:1/12;grid-row:18/20">Waiting on</div>
	<div class="c hn sub" style="grid-column:12/23;grid-row:19/20;padding-bottom:9px">
		nudge date, not worry
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:19/20"></div>
	<div class="tip" style="grid-column:1/3;grid-row:19/20"></div>

	<div class="th" style="grid-column:1/23;grid-row:20/21"></div>
	<div class="c ch" style="grid-column:1/3;grid-row:20/21">Since</div>
	<div class="c ch pl" style="grid-column:3/8;grid-row:20/21">Who</div>
	<div class="c ch pl" style="grid-column:8/18;grid-row:20/21">What</div>
	<div class="c ch ctr rd" style="grid-column:18/23;grid-row:20/21">Nudge</div>
	<div class="vl" style="grid-column:3/4;grid-row:20/33"></div>
	<div class="vl" style="grid-column:8/9;grid-row:20/33"></div>
	<div class="vl" style="grid-column:18/19;grid-row:20/33"></div>
</div>
