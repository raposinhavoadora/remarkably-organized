<script lang="ts">
	import { fbWeeksOf, type FbContext } from '../fieldbook';
	import Ref from '../Ref.svelte';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();

	/** The weeks logged on this page: those of the quarter (the table has 16 rows) */
	const weeks = $derived(
		ctx.timeframe.quarter ? fbWeeksOf(ctx.settings, ctx.timeframe).slice(0, 16) : [],
	);
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/12;grid-row:1/3">Race trace</div>
	<Tab {ctx} label="Season" />
	<div class="c hn sub" style="grid-column:11/23;grid-row:2/3">
		outputs, not intentions
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="th" style="grid-column:1/23;grid-row:3/4"></div>
	<div class="c ch ctr" style="grid-column:1/3;grid-row:3/4">Wk</div>
	<div class="c ch ctr" style="grid-column:3/5;grid-row:3/4">Asks</div>
	<div class="c ch ctr" style="grid-column:5/7;grid-row:3/4">Chase</div>
	<div class="c ch ctr" style="grid-column:7/9;grid-row:3/4">Yes</div>
	<div class="c ch ctr" style="grid-column:9/11;grid-row:3/4">€ in</div>
	<div class="c ch ctr" style="grid-column:11/14;grid-row:3/4">Shipped</div>
	<div class="c ch ctr" style="grid-column:14/16;grid-row:3/4">Km</div>
	<div class="c ch ctr" style="grid-column:16/18;grid-row:3/4">E</div>
	<div class="c ch ctr" style="grid-column:18/20;grid-row:3/4">
		<svg width="13" height="13" viewBox="0 0 24 24" aria-hidden="true">
			<path
				d="M12 2.2l2.9 6.3 6.8.8-5 4.7 1.3 6.8L12 17.4l-6 3.4 1.3-6.8-5-4.7 6.8-.8z"
				fill="currentColor">
			</path>
		</svg>
		/5
	</div>
	<div class="c ch pl" style="grid-column:20/23;grid-row:3/4">Note</div>
	<div class="vl" style="grid-column:3/4;grid-row:3/21"></div>
	<div class="vl" style="grid-column:5/6;grid-row:3/21"></div>
	<div class="vl" style="grid-column:7/8;grid-row:3/21"></div>
	<div class="vl" style="grid-column:9/10;grid-row:3/21"></div>
	<div class="vl" style="grid-column:11/12;grid-row:3/21"></div>
	<div class="vl" style="grid-column:14/15;grid-row:3/21"></div>
	<div class="vl" style="grid-column:16/17;grid-row:3/21"></div>
	<div class="vl" style="grid-column:18/19;grid-row:3/21"></div>
	<div class="vl" style="grid-column:20/21;grid-row:3/21"></div>
	<div class="c ch ctr rd" style="grid-column:1/3;grid-row:4/5">Grid</div>
	<div class="dl" style="grid-column:1/23;grid-row:4/5"></div>
	{#each weeks as week, i (week.id)}
		<div class="c hn ctr" style="grid-column:1/3;grid-row:{5 + i}/{6 + i}">
			<Ref {ctx} to={week.id} plain>W{week.weekSinceYear}</Ref>
		</div>
	{/each}
	<div class="r2" style="grid-column:1/23;grid-row:20/21"></div>
	<div class="c hn" style="grid-column:1/23;grid-row:21/22">
		yes = seats, reservations, partner yeses
	</div>
	<div class="c hn" style="grid-column:1/23;grid-row:22/23">
		shipped = what left the building
	</div>

	<div class="c lb" style="grid-column:1/23;grid-row:23/24">
		Trace · cumulative yes, asks as a faint line
	</div>
	<div class="c hn end" style="grid-column:1/4;grid-row:24/25;padding-right:8px">↑</div>
	<div class="c hn end" style="grid-column:1/4;grid-row:31/32;padding-right:8px">0</div>
	<div
		class="vl"
		style="grid-column:4/5;grid-row:24/32;border-left-width:2.4px;margin-left:-1.2px">
	</div>
	<div class="r2" style="grid-column:4/21;grid-row:31/32"></div>
	<div class="c hn" style="grid-column:21/23;grid-row:31/32;padding-left:6px">wk</div>
	<div class="c hn end" style="grid-column:12/23;grid-row:24/25">
		one column per week, numbers below
	</div>
</div>
