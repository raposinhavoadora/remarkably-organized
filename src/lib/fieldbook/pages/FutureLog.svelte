<script lang="ts">
	import type { FbContext } from '../fieldbook';
	import Ref from '../Ref.svelte';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();

	/** The months of the quarter this page looks ahead to */
	const months = $derived(
		ctx.timeframe.quarter && !ctx.timeframe.month
			? ctx.settings.months.filter(
					(month) =>
						month.year === ctx.timeframe.year && month.quarter === ctx.timeframe.quarter,
				)
			: [],
	);
	/** Three blocks of ten rows: a heading and nine lines to write on */
	const blocks = $derived(
		Array.from({ length: 3 }, (_, i) => ({ row: 3 + i * 10, month: months.at(i) })),
	);
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/12;grid-row:1/3">Future log</div>
	<Tab {ctx} label="Front" />
	<div class="c hn sub" style="grid-column:10/23;grid-row:2/3">
		dates only · tasks live in Notion
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	{#each blocks as block, i (block.row)}
		<div class="th" style="grid-column:1/23;grid-row:{block.row}/{block.row + 1}"></div>
		<div class="c ch" style="grid-column:1/12;grid-row:{block.row}/{block.row + 1}">
			{#if block.month}
				<Ref {ctx} to={block.month.id} plain>
					{block.month.nameLong}
					{block.month.year}
				</Ref>
			{:else}
				Month
			{/if}
		</div>
		{#if i === 0}
			<div
				class="c ch end"
				style="grid-column:16/23;grid-row:{block.row}/{block.row + 1}">
				! = hard deadline
			</div>
		{/if}
		<div class="vl" style="grid-column:4/5;grid-row:{block.row + 1}/{block.row + 10}">
		</div>
	{/each}
</div>
