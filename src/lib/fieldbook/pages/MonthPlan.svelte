<script lang="ts">
	import { fbPageWith, fbTarget, type FbContext } from '../fieldbook';
	import Ref from '../Ref.svelte';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();

	const start = $derived(ctx.timeframe.start);
	/** The month and year for the tab, when the page belongs to a month */
	const name = $derived(
		ctx.timeframe.month ? `${ctx.timeframe.nameShort} ${start.getUTCFullYear()}` : '',
	);
	/** The plan of the following month, if the planner has one */
	const next = $derived.by(() => {
		if (!ctx.timeframe.month) return undefined;
		const date = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth() + 1));
		const id = `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}`;
		const target = fbTarget(
			ctx.settings,
			fbPageWith(ctx.settings, 'month', id, 'fb-month-plan'),
		);
		if (!target) return undefined;
		return {
			id: target,
			name: date.toLocaleDateString('default', { timeZone: 'UTC', month: 'long' }),
		};
	});
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/12;grid-row:1/3">Month plan</div>
	<Tab {ctx} label={name || 'Month'} />
	<div class="c hn sub" style="grid-column:12/23;grid-row:2/3">
		drawn once, closed once
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="c lb" style="grid-column:1/23;grid-row:3/4">Three outcomes · no more</div>
	<div class="c n" style="grid-column:1/2;grid-row:4/5">1</div>
	<div class="c n" style="grid-column:1/2;grid-row:6/7">2</div>
	<div class="c n" style="grid-column:1/2;grid-row:8/9">3</div>

	<div class="c lb" style="grid-column:1/23;grid-row:10/11">Burners</div>
	<div class="c ch" style="grid-column:1/6;grid-row:11/12">Front · 2 max</div>
	<div class="c ch" style="grid-column:1/6;grid-row:12/13">Back</div>
	<div class="c ch" style="grid-column:1/6;grid-row:13/14">Off</div>
	<div class="vl" style="grid-column:6/7;grid-row:11/14"></div>

	<div class="c lb" style="grid-column:1/23;grid-row:15/16">
		Back-planned · from the big day
	</div>
	<div class="c" style="grid-column:4/5;grid-row:16/17">
		<span class="dm" style="margin-left:-6px"></span>
	</div>
	<div class="vl" style="grid-column:4/5;grid-row:16/22"></div>
	<div class="c hn end" style="grid-column:1/4;grid-row:16/17;padding-right:10px">
		date
	</div>

	<div class="r1" style="grid-column:1/23;grid-row:22/23"></div>
	<div class="c lb rd" style="grid-column:1/12;grid-row:23/24">Month close</div>
	<div class="c hn end" style="grid-column:11/23;grid-row:23/24">
		first Sunday after month end
	</div>
	<div class="c ch" style="grid-column:1/10;grid-row:24/25">
		Score
		<span class="f" style="width:46px"></span>
		/ 5
	</div>
	<div class="c ch" style="grid-column:1/9;grid-row:25/26">Line of the month</div>
	<div class="c ch" style="grid-column:1/11;grid-row:27/28">Evolved</div>
	<div class="c ch pl" style="grid-column:12/23;grid-row:27/28">Stuck</div>
	<div class="vl" style="grid-column:12/13;grid-row:27/30"></div>
	<div class="c ch" style="grid-column:1/9;grid-row:30/31">Stop · start · keep</div>
	<div class="c hn" style="grid-column:1/23;grid-row:31/32">
		<span class="bx"></span>
		channels tested
		<span class="bx" style="margin-left:20px"></span>
		renewals, cards
		<span class="bx" style="margin-left:20px"></span>
		Garage verdicts
	</div>
	<div class="c ch" style="grid-column:1/23;grid-row:32/33">
		Carry to next month →&nbsp;{#if next}<Ref {ctx} to={next.id}>
				{next.name}
			</Ref>{:else}<span class="f" style="width:120px"></span>{/if}
	</div>
</div>
