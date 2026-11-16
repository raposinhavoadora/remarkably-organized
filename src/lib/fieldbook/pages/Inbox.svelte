<script lang="ts">
	import type { FbContext } from '../fieldbook';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/9;grid-row:1/3">Inbox</div>
	<Tab {ctx} label="Week" />
	<div class="c hn sub" style="grid-column:7/23;grid-row:2/3">
		{#if ctx.timeframe.weekSinceYear}W{ctx.timeframe.weekSinceYear} ·&nbsp;{:else}W
			<span class="f" style="width:50px"></span>{/if}spills · brain dumps · big days
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="th" style="grid-column:1/23;grid-row:3/4"></div>
	<div class="c ch" style="grid-column:1/18;grid-row:3/4">Capture</div>
	<div class="c ch pl" style="grid-column:18/23;grid-row:3/4">Went to</div>
	<div class="vd" style="grid-column:18/19;grid-row:3/32"></div>
	<div class="r2" style="grid-column:1/23;grid-row:31/32"></div>
	<div class="c hn" style="grid-column:1/23;grid-row:32/33">
		every line leaves with an arrow · strike what no longer matters
	</div>
</div>
