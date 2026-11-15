<script lang="ts">
	import type { FbContext } from '../fieldbook';
	import Ref from '../Ref.svelte';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();

	const format = (date: Date) =>
		date.toLocaleDateString('default', {
			timeZone: 'UTC',
			day: 'numeric',
			month: 'short',
			year: 'numeric',
		});
</script>

<div class="g">
	<Tab {ctx} label="Front" />
	<div
		class="c ttl"
		style="grid-column:1/23;grid-row:2/6;font-size:84px;padding-bottom:16px">
		Field Book
	</div>
	<div class="c tx" style="grid-column:1/23;grid-row:6/7">
		Paper holds attention. Notion holds inventory.
	</div>
	<div class="c st" style="grid-column:1/23;grid-row:7/9;padding-bottom:6px">
		Vol.
		<span class="f" style="width:150px;height:26px"></span>
	</div>
	<div class="c hn" style="grid-column:1/23;grid-row:9/10">
		from
		<b>{format(ctx.settings.date.start)}</b>
		to
		<b>{format(ctx.settings.date.end)}</b>
	</div>
	<div class="c hn" style="grid-column:1/23;grid-row:10/11">
		where
		<span class="f" style="width:420px"></span>
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:11/12"></div>
	<div class="tip" style="grid-column:1/3;grid-row:11/12"></div>

	<div class="c lb" style="grid-column:1/23;grid-row:12/13">House rules</div>
	<div class="c n" style="grid-column:1/2;grid-row:13/14">1</div>
	<div class="c tx w" style="grid-column:2/23;grid-row:13/15;padding-left:8px">
		Paper holds attention, Notion holds inventory. Never more than three tasks on a page.
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:16/17">2</div>
	<div class="c tx w" style="grid-column:2/23;grid-row:16/18;padding-left:8px">
		Every line leaves with an arrow (→N, →C, →p.__) or&#160;a&#160;strike.
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:19/20">3</div>
	<div class="c tx w" style="grid-column:2/23;grid-row:19/20;padding-left:8px">
		Tomorrow is drawn tonight, at 22:00.
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:21/22">4</div>
	<div class="c tx w" style="grid-column:2/23;grid-row:21/23;padding-left:8px">
		Three dots = flag it. Decide at 10:00, Mon · Wed · Fri: date it, hand it off, drop it,
		or park it.
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:24/25">5</div>
	<div class="c tx w" style="grid-column:2/23;grid-row:24/26;padding-left:8px">
		No backfilling. A gap is data, not debt. Fell off? →&#160;<Ref {ctx} to="fb-back-on">
			Back&#160;on
		</Ref>
	</div>

	<div class="r1" style="grid-column:1/23;grid-row:27/28"></div>
	<div class="c lb" style="grid-column:1/23;grid-row:28/29">
		One pen · one red · no decoration
	</div>
	<div class="c ch" style="grid-column:1/5;grid-row:30/31">If found</div>
	<div class="r1" style="grid-column:5/23;grid-row:30/31"></div>
	<div class="c ch" style="grid-column:1/5;grid-row:31/32">Reward</div>
	<div class="r1" style="grid-column:5/23;grid-row:31/32"></div>
</div>

<style lang="scss">
	b {
		font-weight: 700;
		color: var(--ink);
		margin: 0 14px 0 8px;
	}
</style>
