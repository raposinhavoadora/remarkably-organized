<script lang="ts">
	import { fbDayId, fbWeekOf, type FbContext } from '../fieldbook';
	import Ref from '../Ref.svelte';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();

	const year = $derived(ctx.timeframe.start.getUTCFullYear());
	const month = $derived(ctx.timeframe.start.getUTCMonth());
	const lastWeekday = $derived(ctx.settings.date.startWeekOnSunday ? 6 : 0);

	/** The month as two columns of rows: the 1st to the 16th and the 17th onwards */
	const days = $derived(
		Array.from(
			{ length: new Date(Date.UTC(year, month + 1, 0)).getUTCDate() },
			(_, i) => {
				const date = new Date(Date.UTC(year, month, i + 1));
				const week = fbWeekOf(ctx.settings, date);
				return {
					day: i + 1,
					id: fbDayId(date),
					weekday: date.toLocaleDateString('default', {
						timeZone: 'UTC',
						weekday: 'short',
					}),
					weekend: date.getUTCDay() === 0 || date.getUTCDay() === 6,
					// The week number is shown on the first day of every week on the page
					week: i === 0 || week.start.getTime() === date.getTime() ? week : undefined,
					endsWeek: date.getUTCDay() === lastWeekday,
					events: ctx.settings.events
						.filter((event) => !event.duration && event.start * 1000 === date.getTime())
						.map((event) => event.name)
						.join(' · '),
					// The grid placement
					row: (i % 16) + 4,
					col: i < 16 ? 1 : 12,
				};
			},
		),
	);
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/12;grid-row:1/3">{ctx.timeframe.nameLong}</div>
	<Tab {ctx} label={`${year}`} />
	<div class="c hn sub" style="grid-column:12/23;grid-row:2/3">
		word
		<span class="f" style="width:170px;margin-right:0"></span>
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="th" style="grid-column:1/23;grid-row:3/4"></div>
	<div class="c ch" style="grid-column:1/3;grid-row:3/4">Day</div>
	<div class="c ch pl" style="grid-column:3/10;grid-row:3/4">Events · rooms</div>
	<div class="c ch ctr" style="grid-column:10/11;grid-row:3/4">K</div>
	<div class="c ch ctr" style="grid-column:11/12;grid-row:3/4">Wk</div>
	<div class="c ch pl" style="grid-column:12/14;grid-row:3/4">Day</div>
	<div class="c ch pl" style="grid-column:14/21;grid-row:3/4">Events · rooms</div>
	<div class="c ch ctr" style="grid-column:21/22;grid-row:3/4">K</div>
	<div class="c ch ctr" style="grid-column:22/23;grid-row:3/4">Wk</div>
	<div class="vl" style="grid-column:3/4;grid-row:3/20"></div>
	<div class="vl" style="grid-column:10/11;grid-row:3/20"></div>
	<div class="vl" style="grid-column:11/12;grid-row:3/20"></div>
	<div
		class="vl"
		style="grid-column:12/13;grid-row:3/20;border-left-width:2.4px;border-left-color:var(--ink);margin-left:-1.2px">
	</div>
	<div class="vl" style="grid-column:14/15;grid-row:3/20"></div>
	<div class="vl" style="grid-column:21/22;grid-row:3/20"></div>
	<div class="vl" style="grid-column:22/23;grid-row:3/20"></div>

	{#each days as d (d.day)}
		{#if d.endsWeek && d.row < 19}
			<div
				class="dl"
				style="grid-column:{d.col}/{d.col + 11};grid-row:{d.row}/{d.row + 1}">
			</div>
		{/if}
		<div
			class="c ch day"
			class:pl={d.col !== 1}
			style="grid-column:{d.col}/{d.col + 2};grid-row:{d.row}/{d.row + 1}">
			<Ref {ctx} to={d.id} plain>
				<span class="num">{d.day}</span>
				<span class="wd" class:weekend={d.weekend}>{d.weekday.slice(0, 2)}</span>
			</Ref>
		</div>
		{#if d.events}
			<div
				class="c hn pl event"
				style="grid-column:{d.col + 2}/{d.col + 9};grid-row:{d.row}/{d.row + 1}">
				<span>{d.events}</span>
			</div>
		{/if}
		{#if d.week}
			<div
				class="c hn ctr"
				style="grid-column:{d.col + 10}/{d.col + 11};grid-row:{d.row}/{d.row + 1}">
				<Ref {ctx} to={d.week.id} plain>{d.week.weekSinceYear}</Ref>
			</div>
		{/if}
	{/each}

	<div class="r2" style="grid-column:1/23;grid-row:19/20"></div>
	<div class="c hn" style="grid-column:1/23;grid-row:20/21">
		K = kids with me · fixed times only · tasks live in Notion
	</div>

	<div class="c lb" style="grid-column:1/23;grid-row:22/23">Notes</div>
</div>

<style lang="scss">
	.day {
		:global(a) {
			display: flex;
			align-items: baseline;
			width: 100%;
		}
	}
	.num {
		min-width: 22px;
	}
	.wd {
		font-size: 12.5px;
		font-weight: 500;
		letter-spacing: 0.04em;
		margin-left: 4px;
		color: var(--hint);
		&.weekend {
			font-weight: 700;
			color: var(--ink);
		}
	}
	.event {
		overflow: hidden;
		span {
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
</style>
