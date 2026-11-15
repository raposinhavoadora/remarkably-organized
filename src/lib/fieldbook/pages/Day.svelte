<script lang="ts">
	import { fbSeasonId, fbWeekOf, type FbContext } from '../fieldbook';
	import Ref from '../Ref.svelte';

	let { ctx }: { ctx: FbContext } = $props();

	const date = $derived(ctx.timeframe.start);
	const startWeekOnSunday = $derived(ctx.settings.date.startWeekOnSunday);
	/**
	 * The Pit Wall closes the week that ends on its Sunday and plans the one that
	 * starts on Monday. (When weeks start on Sunday, that Sunday opens the new week.)
	 */
	const closing = $derived(date.getTime() - (startWeekOnSunday ? 86400000 : 0));
	const week = $derived(fbWeekOf(ctx.settings, closing));
	const nextWeek = $derived(fbWeekOf(ctx.settings, date.getTime() + 86400000));

	const weekdays = $derived(
		startWeekOnSunday
			? ['S', 'M', 'T', 'W', 'T', 'F', 'S']
			: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
	);
	const weekday = $derived((date.getUTCDay() - (startWeekOnSunday ? 0 : 1) + 7) % 7);

	/** Sunday is half a page: the Pit Wall takes the lower half */
	const pitWall = $derived(date.getUTCDay() === 0);
	/** The row of the night line: the last row of the day */
	const night = $derived(pitWall ? 16 : 32);
</script>

<div class="g">
	<div class="c lt" style="grid-column:1/6;grid-row:1/2">
		{#each weekdays as letter, i (i)}<span class:on={i === weekday}>{letter}</span>{/each}
	</div>
	<div class="c ch" style="grid-column:6/10;grid-row:1/2;padding-left:14px">
		{date.toLocaleDateString('default', {
			timeZone: 'UTC',
			day: 'numeric',
			month: 'short',
		})}
	</div>
	<div class="c ctr" style="grid-column:10/14;grid-row:1/2">
		<span class="lt pill">
			<span>F</span>
			<span>S</span>
			<span>T</span>
			<span>H</span>
			<span>R</span>
		</span>
	</div>
	<div class="c ch pl" style="grid-column:15/16;grid-row:1/2">D</div>
	<div class="c ch pl" style="grid-column:18/19;grid-row:1/2">L</div>
	<div class="c ch end" style="grid-column:20/23;grid-row:1/2">
		Rx
		<span class="bx" style="margin:0 0 0 9px"></span>
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:1/2"></div>

	<!-- The One and two more. Never a fourth. -->
	<div class="c" style="grid-column:1/2;grid-row:2/3"><span class="dm"></span></div>
	<div class="c" style="grid-column:1/2;grid-row:3/4"><span class="bu"></span></div>
	<div class="c" style="grid-column:1/2;grid-row:4/5"><span class="bu"></span></div>

	<!-- The lane on the right is for the arrows every line leaves with -->
	<div class="vd" style="grid-column:19/20;grid-row:5/{night}"></div>

	<!-- The night line -->
	<div class="dt" style="grid-column:1/23;grid-row:{night}/{night + 1}"></div>
	<div class="c ch" style="grid-column:1/4;grid-row:{night}/{night + 1}">6 words</div>
	<div class="c ch" style="grid-column:14/15;grid-row:{night}/{night + 1}">E</div>
	<div class="c" style="grid-column:15/18;grid-row:{night}/{night + 1}">
		<span class="o"></span>
		<span class="o hf"></span>
		<span class="o fl"></span>
	</div>
	<div class="c ch" style="grid-column:18/19;grid-row:{night}/{night + 1}">Km</div>
	<div class="c ch" style="grid-column:21/22;grid-row:{night}/{night + 1}">@</div>

	{#if pitWall}
		<div class="r2" style="grid-column:1/23;grid-row:16/17"></div>

		<div class="c st" style="grid-column:1/9;grid-row:17/19">Pit Wall</div>
		<div
			class="c hn"
			style="grid-column:8/14;grid-row:18/19;align-items:flex-end;padding-bottom:9px">
			<Ref {ctx} to={week.id}>W{week.weekSinceYear}</Ref>
		</div>
		<div
			class="c hn end"
			style="grid-column:13/23;grid-row:18/19;align-items:flex-end;padding-bottom:9px">
			Sunday 22:00 · 30 min
		</div>
		<div class="hr" style="grid-column:1/23;grid-row:18/19"></div>
		<div class="tip" style="grid-column:1/3;grid-row:18/19"></div>

		<div class="c ch" style="grid-column:1/23;grid-row:19/20">
			<svg class="sv" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
				<path
					d="M12 2.2l2.9 6.3 6.8.8-5 4.7 1.3 6.8L12 17.4l-6 3.4 1.3-6.8-5-4.7 6.8-.8z"
					fill="currentColor">
				</path>
			</svg>
			Three wins →&nbsp;<Ref {ctx} to="fb-wins">Wins</Ref>
		</div>
		<div class="c n" style="grid-column:1/2;grid-row:20/21">1</div>
		<div class="c n" style="grid-column:1/2;grid-row:21/22">2</div>
		<div class="c n" style="grid-column:1/2;grid-row:22/23">3</div>
		<div class="c ch" style="grid-column:1/23;grid-row:23/24">
			Numbers →&nbsp;<Ref {ctx} to={fbSeasonId(ctx.settings, closing, 'trace')}>
				Race trace
			</Ref>
		</div>
		<div class="c hn" style="grid-column:1/23;grid-row:24/25">
			asks
			<span class="f" style="width:48px"></span>
			chase
			<span class="f" style="width:48px"></span>
			yes
			<span class="f" style="width:48px"></span>
			€ in
			<span class="f" style="width:64px"></span>
		</div>
		<div class="c hn" style="grid-column:1/23;grid-row:25/26">
			shipped
			<span class="f" style="width:48px"></span>
			km
			<span class="f" style="width:48px"></span>
			E
			<span class="o" style="margin-left:10px"></span>
			<span class="o hf"></span>
			<span class="o fl" style="margin-right:18px"></span>
			score
			<span class="f" style="width:36px"></span>
			/ 5
		</div>
		<div class="c ch" style="grid-column:1/23;grid-row:26/27">
			<span style="margin-right:10px">···</span>
			Audit · flags for Monday 10:00
		</div>
		<div class="c ch" style="grid-column:1/12;grid-row:28/29">Drained by</div>
		<div class="c ch pl" style="grid-column:12/23;grid-row:28/29">Fuelled by</div>
		<div class="c ch" style="grid-column:1/12;grid-row:30/31">
			One lesson →&nbsp;<Ref {ctx} to="fb-lessons">Lessons</Ref>
		</div>
		<div class="c ch pl" style="grid-column:12/23;grid-row:30/31">Next week’s word</div>
		<div class="vl" style="grid-column:12/13;grid-row:28/32"></div>
		<div class="dt" style="grid-column:1/23;grid-row:32/33"></div>
		<div class="c hn" style="grid-column:1/23;grid-row:32/33">
			<span class="bx"></span>
			<Ref {ctx} to={fbSeasonId(ctx.settings, closing, 'trace')}>trace</Ref>
			<span class="bx" style="margin-left:16px"></span>
			<Ref {ctx} to={fbSeasonId(ctx.settings, closing, 'heartbeat')}>board</Ref>
			<span class="bx" style="margin-left:16px"></span>
			<Ref {ctx} to="fb-asks">chases</Ref>
			<span class="bx" style="margin-left:16px"></span>
			calendar
			<span class="bx" style="margin-left:16px"></span>
			<Ref {ctx} to={nextWeek.id}>Week’s 3 → Mon 10:00</Ref>
		</div>
	{/if}
</div>
