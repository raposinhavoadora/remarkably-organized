<script lang="ts">
	import { fbTags, type FbContext } from '../fieldbook';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();

	/** The tag of the project slot this page belongs to, if it has one */
	const tag = $derived(ctx.slot ? fbTags(ctx.settings)[ctx.slot - 1]?.tag : undefined);
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/12;grid-row:1/3">Evolution</div>
	<Tab {ctx} label="Projects" />
	<div class="c hn sub" style="grid-column:9/23;grid-row:2/3">
		tag{#if tag}<b>{tag}</b>{:else}<span class="f" style="width:56px"></span>{/if}what
		changed, learned, decided
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="th" style="grid-column:1/23;grid-row:3/4"></div>
	<div class="c ch" style="grid-column:1/4;grid-row:3/4">Date</div>
	<div class="c ch ctr" style="grid-column:4/5;grid-row:3/4">·</div>
	<div class="c ch pl" style="grid-column:5/23;grid-row:3/4">Entry</div>
	<div class="vl" style="grid-column:4/5;grid-row:3/32"></div>
	<div class="vl" style="grid-column:5/6;grid-row:3/32"></div>
	<div class="r2" style="grid-column:1/23;grid-row:31/32"></div>
	<div class="c hn" style="grid-column:1/23;grid-row:32/33">
		<svg class="sv" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
			<path
				d="M12 3L22 21H2z"
				fill="none"
				stroke="currentColor"
				stroke-width="3"
				stroke-linejoin="round">
			</path>
		</svg>
		changed · L learned · D decided, also on the Decisions page
	</div>
</div>

<style lang="scss">
	b {
		font-weight: 700;
		color: var(--ink);
		margin: 0 12px 0 6px;
	}
</style>
