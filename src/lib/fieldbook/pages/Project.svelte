<script lang="ts">
	import { fbTags, type FbContext } from '../fieldbook';
	import Ref from '../Ref.svelte';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();

	/** The tag of the project slot this page belongs to, if it has one */
	const tag = $derived(ctx.slot ? fbTags(ctx.settings)[ctx.slot - 1]?.tag : undefined);
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/8;grid-row:1/3">Project</div>
	<Tab {ctx} label="Projects" />
	<div class="c hn sub" style="grid-column:16/23;grid-row:2/3">
		tag{#if tag}<b>{tag}</b>{:else}<span class="f" style="width:64px;margin-right:0">
			</span>{/if}
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="c ch" style="grid-column:1/5;grid-row:3/4">Why</div>
	<div class="dl" style="grid-column:1/23;grid-row:4/5"></div>
	<div class="c ch" style="grid-column:1/5;grid-row:5/6">Season win</div>
	<div class="dl" style="grid-column:1/23;grid-row:6/7"></div>
	<div class="c ch" style="grid-column:1/5;grid-row:7/8">Now</div>
	<div class="vl" style="grid-column:5/6;grid-row:3/8"></div>
	<div class="r1" style="grid-column:1/23;grid-row:7/8"></div>

	<div class="c lb" style="grid-column:1/23;grid-row:9/10">
		Next 3 · thirty minutes each, at most
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:10/11">1</div>
	<div class="c ctr" style="grid-column:2/3;grid-row:10/11">
		<span class="bx" style="margin:0"></span>
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:11/12">2</div>
	<div class="c ctr" style="grid-column:2/3;grid-row:11/12">
		<span class="bx" style="margin:0"></span>
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:12/13">3</div>
	<div class="c ctr" style="grid-column:2/3;grid-row:12/13">
		<span class="bx" style="margin:0"></span>
	</div>
	<div class="r1" style="grid-column:1/23;grid-row:12/13"></div>

	<div class="c ch" style="grid-column:1/5;grid-row:14/15">Blocked by</div>
	<div class="dl" style="grid-column:1/23;grid-row:15/16"></div>
	<div class="c ch" style="grid-column:1/5;grid-row:16/17">Done when</div>
	<div class="vl" style="grid-column:5/6;grid-row:14/18"></div>
	<div class="r1" style="grid-column:1/23;grid-row:17/18"></div>

	<div class="c lb" style="grid-column:1/23;grid-row:19/20">
		Shipped · one tally per week
	</div>
	<div class="hb" style="grid-column:1/17;grid-row:20/21"></div>
	<div class="c hn" style="grid-column:1/3;grid-row:21/22">wk 1</div>
	<div class="c hn end" style="grid-column:14/17;grid-row:21/22">16</div>

	<div class="c lb" style="grid-column:1/23;grid-row:23/24">Notes</div>
	{#if ctx.slot}
		<div class="c hn end" style="grid-column:1/23;grid-row:32/33">
			→&nbsp;<Ref {ctx} to="fb-project-{ctx.slot}-decisions">
				Decisions
			</Ref>&nbsp;·&nbsp;<Ref {ctx} to="fb-project-{ctx.slot}-evolution">
				Evolution
			</Ref>&nbsp;·&nbsp;<Ref {ctx} to="fb-project-{ctx.slot}-back-plan">Back-plan</Ref>
		</div>
	{/if}
</div>

<style lang="scss">
	b {
		font-weight: 700;
		color: var(--ink);
		margin: 0 12px 0 6px;
	}
</style>
