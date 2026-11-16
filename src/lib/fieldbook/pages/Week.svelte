<script lang="ts">
	import { fbDayId, type FbContext } from '../fieldbook';
	import Ref from '../Ref.svelte';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();

	const format = (date: Date, options: Intl.DateTimeFormatOptions) =>
		date.toLocaleDateString('default', { timeZone: 'UTC', ...options });

	const start = $derived(ctx.timeframe.start);
	const end = $derived(new Date(start.getTime() + 6 * 86400000));
	/** The dates of the week, like "28 Dec – 3 Jan" */
	const dates = $derived(
		start.getUTCMonth() === end.getUTCMonth()
			? `${start.getUTCDate()} – ${format(end, { day: 'numeric', month: 'short' })}`
			: `${format(start, { day: 'numeric', month: 'short' })} – ${format(end, {
					day: 'numeric',
					month: 'short',
				})}`,
	);
	/** The seven days, each on its own row of the anchors table */
	const days = $derived(
		Array.from({ length: 7 }, (_, i) => {
			const date = new Date(start.getTime() + i * 86400000);
			return {
				id: fbDayId(date),
				weekday: format(date, { weekday: 'short' }).slice(0, 2),
				day: date.getUTCDate(),
				row: 16 + i * 2,
			};
		}),
	);
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/8;grid-row:1/3">
		Week{ctx.timeframe.weekSinceYear ? ` ${ctx.timeframe.weekSinceYear}` : ''}
	</div>
	<Tab {ctx} label="Week" />
	<div class="c hn sub" style="grid-column:8/23;grid-row:2/3">
		dates
		<b>{dates}</b>
		laps
		<span class="f" style="width:56px"></span>
		D
		<span class="f" style="width:64px;margin-right:0"></span>
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="c hn" style="grid-column:1/23;grid-row:3/4">
		countdown D–
		<span class="f" style="width:50px"></span>
		→
		<span class="f" style="width:330px"></span>
	</div>

	<div class="c lb" style="grid-column:1/20;grid-row:4/5">The week’s 3 · never a 4th</div>
	<div class="c ch ctr" style="grid-column:20/23;grid-row:4/5">Tag</div>
	<div class="vl" style="grid-column:20/21;grid-row:5/11"></div>
	<div class="c n" style="grid-column:1/2;grid-row:5/6">1</div>
	<div class="c ctr" style="grid-column:2/3;grid-row:5/6">
		<span class="bx" style="margin:0"></span>
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:7/8">2</div>
	<div class="c ctr" style="grid-column:2/3;grid-row:7/8">
		<span class="bx" style="margin:0"></span>
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:9/10">3</div>
	<div class="c ctr" style="grid-column:2/3;grid-row:9/10">
		<span class="bx" style="margin:0"></span>
	</div>

	<div class="c lb" style="grid-column:1/16;grid-row:11/12">Rooms · day, room → ask</div>
	<div class="c hn end" style="grid-column:14/23;grid-row:11/12">
		one ask, decided before
	</div>
	<div class="vl" style="grid-column:4/5;grid-row:12/15"></div>

	<div class="th" style="grid-column:1/23;grid-row:15/16"></div>
	<div class="c ch" style="grid-column:1/3;grid-row:15/16">Day</div>
	<div class="c ch ctr" style="grid-column:3/4;grid-row:15/16">M</div>
	<div class="c ch pl" style="grid-column:4/20;grid-row:15/16">
		Anchors · fixed times only
	</div>
	<div class="c ch ctr" style="grid-column:20/23;grid-row:15/16">3s</div>
	<div class="vl" style="grid-column:3/4;grid-row:15/30"></div>
	<div class="vl" style="grid-column:4/5;grid-row:15/30"></div>
	<div class="vl" style="grid-column:20/21;grid-row:15/30"></div>
	{#each days as d (d.id)}
		<div class="c ch" style="grid-column:1/3;grid-row:{d.row}/{d.row + 1}">
			<Ref {ctx} to={d.id} plain>
				{d.weekday}
				<span class="num">{d.day}</span>
			</Ref>
		</div>
	{/each}
	<div class="dl" style="grid-column:1/23;grid-row:17/18"></div>
	<div class="dl" style="grid-column:1/23;grid-row:19/20"></div>
	<div class="dl" style="grid-column:1/23;grid-row:21/22"></div>
	<div class="dl" style="grid-column:1/23;grid-row:23/24"></div>
	<div class="dl" style="grid-column:1/23;grid-row:25/26"></div>
	<div class="dl" style="grid-column:1/23;grid-row:27/28"></div>
	<div class="r2" style="grid-column:1/23;grid-row:29/30"></div>

	<div class="c ch" style="grid-column:1/4;grid-row:30/31">Protect</div>
	<div class="c ch" style="grid-column:1/4;grid-row:31/32">Home</div>
	<div class="c ch" style="grid-column:1/4;grid-row:32/33">Joy</div>
	<div class="vl" style="grid-column:4/5;grid-row:30/33"></div>
</div>

<style lang="scss">
	b {
		font-weight: 700;
		color: var(--ink);
		margin: 0 14px 0 8px;
	}
	.num {
		font-weight: 500;
		margin-left: 5px;
	}
</style>
