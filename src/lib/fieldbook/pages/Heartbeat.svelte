<script lang="ts">
	import { fbWeeksOf, type FbContext } from '../fieldbook';
	import Ref from '../Ref.svelte';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();

	/** The weeks marked on this page: those of the quarter (each row has 16 boxes) */
	const weeks = $derived(
		ctx.timeframe.quarter ? fbWeeksOf(ctx.settings, ctx.timeframe).slice(0, 16) : [],
	);
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/12;grid-row:1/3">Heartbeat</div>
	<Tab {ctx} label="Season" />
	<div class="c hn sub" style="grid-column:10/23;grid-row:2/3">
		Sunday: one mark per row
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="th" style="grid-column:1/23;grid-row:3/4"></div>
	<div class="c ch" style="grid-column:1/3;grid-row:3/4">Tag</div>
	<div class="hb" style="grid-column:3/19;grid-row:3/4;background-color:#ffffff"></div>
	<div class="wk" style="grid-column:3/19;grid-row:3/4">
		{#each weeks as week (week.id)}
			<span><Ref {ctx} to={week.id} plain>{week.weekSinceYear}</Ref></span>
		{/each}
	</div>
	<div class="c ch pl" style="grid-column:19/23;grid-row:3/4">Blocked by</div>
	<div class="vl" style="grid-column:3/4;grid-row:3/32"></div>
	<div class="vl" style="grid-column:19/20;grid-row:3/32"></div>

	<div class="hb" style="grid-column:3/19;grid-row:4/5"></div>
	<div class="dl" style="grid-column:1/23;grid-row:7/8"></div>
	<div class="hb" style="grid-column:3/19;grid-row:8/9"></div>
	<div class="dl" style="grid-column:1/23;grid-row:11/12"></div>
	<div class="hb" style="grid-column:3/19;grid-row:12/13"></div>
	<div class="dl" style="grid-column:1/23;grid-row:15/16"></div>
	<div class="hb" style="grid-column:3/19;grid-row:16/17"></div>
	<div class="dl" style="grid-column:1/23;grid-row:19/20"></div>
	<div class="hb" style="grid-column:3/19;grid-row:20/21"></div>
	<div class="dl" style="grid-column:1/23;grid-row:23/24"></div>
	<div class="hb" style="grid-column:3/19;grid-row:24/25"></div>
	<div class="dl" style="grid-column:1/23;grid-row:27/28"></div>
	<div class="hb" style="grid-column:3/19;grid-row:28/29"></div>
	<div class="r2" style="grid-column:1/23;grid-row:31/32"></div>

	<div class="c hn" style="grid-column:1/23;grid-row:32/33">
		<span class="o fl" style="margin-left:0"></span>
		moved
		<span class="o hf" style="margin-left:14px"></span>
		touched
		<span class="o" style="margin-left:14px"></span>
		untouched
		<span style="margin-left:14px">× blocked · – off</span>
	</div>
</div>
