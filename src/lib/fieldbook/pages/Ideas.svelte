<script lang="ts">
	import type { FbContext } from '../fieldbook';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/12;grid-row:1/3">Ideas Garage</div>
	<Tab {ctx} label="Ideas" />
	<div class="c hn sub" style="grid-column:12/23;grid-row:2/3">
		capture is not commitment
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="c hn" style="grid-column:1/23;grid-row:3/4">
		Cool-off +7 days before anything leaves, unless it takes 15 min.
	</div>
	<div class="th" style="grid-column:1/23;grid-row:4/5"></div>
	<div class="c ch" style="grid-column:1/4;grid-row:4/5">Date</div>
	<div class="c ch pl" style="grid-column:4/13;grid-row:4/5">Idea</div>
	<div class="c ch ctr" style="grid-column:13/15;grid-row:4/5">Tag</div>
	<div class="c ch ctr" style="grid-column:15/17;grid-row:4/5">Heat</div>
	<div class="c ch ctr" style="grid-column:17/20;grid-row:4/5">Cool to</div>
	<div class="c ch ctr" style="grid-column:20/23;grid-row:4/5">Verdict</div>
	<div class="vl" style="grid-column:4/5;grid-row:4/31"></div>
	<div class="vl" style="grid-column:13/14;grid-row:4/31"></div>
	<div class="vl" style="grid-column:15/16;grid-row:4/31"></div>
	<div class="vl" style="grid-column:17/18;grid-row:4/31"></div>
	<div class="vl" style="grid-column:20/21;grid-row:4/31"></div>
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
	<div class="r2" style="grid-column:1/23;grid-row:30/31"></div>
	<div class="c hn" style="grid-column:1/23;grid-row:31/32">
		heat
		<span class="o fl" style="margin-left:12px"></span>
		<span class="o"></span>
		<span class="o"></span>
		to
		<span class="o fl" style="margin-left:10px"></span>
		<span class="o fl"></span>
		<span class="o fl" style="margin-right:12px"></span>
		· two lines per idea, at most
	</div>
	<div class="c hn" style="grid-column:1/23;grid-row:32/33">
		→N task · →p. a card · × let go · ↑ graduate when a burner frees
	</div>
</div>
