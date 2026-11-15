<script lang="ts">
	import { fbTags, type FbContext } from '../fieldbook';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();

	/** The tag of the project slot this page belongs to, if it has one */
	const tag = $derived(ctx.slot ? fbTags(ctx.settings)[ctx.slot - 1]?.tag : undefined);
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/12;grid-row:1/3">Decisions</div>
	<Tab {ctx} label="Projects" />
	<div class="c hn sub" style="grid-column:9/23;grid-row:2/3">
		tag{#if tag}<b>{tag}</b>{:else}<span class="f" style="width:56px"></span>{/if}decided
		once, stays decided
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="th" style="grid-column:1/23;grid-row:3/4"></div>
	<div class="c ch" style="grid-column:1/4;grid-row:3/4">Date</div>
	<div class="c ch pl" style="grid-column:4/14;grid-row:3/4">Decision</div>
	<div class="c ch pl" style="grid-column:14/20;grid-row:3/4">Why</div>
	<div class="c ch pl" style="grid-column:20/23;grid-row:3/4">Reopen</div>
	<div class="vl" style="grid-column:4/5;grid-row:3/32"></div>
	<div class="vl" style="grid-column:14/15;grid-row:3/32"></div>
	<div class="vl" style="grid-column:20/21;grid-row:3/32"></div>
	<div class="dl" style="grid-column:1/23;grid-row:5/6"></div>
	<div class="dl" style="grid-column:1/23;grid-row:7/8"></div>
	<div class="dl" style="grid-column:1/23;grid-row:9/10"></div>
	<div class="dl" style="grid-column:1/23;grid-row:11/12"></div>
	<div class="dl" style="grid-column:1/23;grid-row:13/14"></div>
	<div class="dl" style="grid-column:1/23;grid-row:15/16"></div>
	<div class="dl" style="grid-column:1/23;grid-row:17/18"></div>
	<div class="dl" style="grid-column:1/23;grid-row:19/20"></div>
	<div class="dl" style="grid-column:1/23;grid-row:21/22"></div>
	<div class="dl" style="grid-column:1/23;grid-row:23/24"></div>
	<div class="dl" style="grid-column:1/23;grid-row:25/26"></div>
	<div class="dl" style="grid-column:1/23;grid-row:27/28"></div>
	<div class="dl" style="grid-column:1/23;grid-row:29/30"></div>
	<div class="r2" style="grid-column:1/23;grid-row:31/32"></div>
	<div class="c hn" style="grid-column:1/23;grid-row:32/33">
		Reopen only at a gate. Never erase: write the new one below.
	</div>
</div>

<style lang="scss">
	b {
		font-weight: 700;
		color: var(--ink);
		margin: 0 12px 0 6px;
	}
</style>
