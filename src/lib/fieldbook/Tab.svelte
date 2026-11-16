<script lang="ts">
	import type { FbContext } from './fieldbook';

	/** The section tab in the top right corner of a page, with a counter for repeats */
	let { ctx, label }: { ctx: FbContext; label: string } = $props();
</script>

<div class="c tab" style="grid-column:14/23;grid-row:1/2">
	{#if ctx.count > 1}
		{#if ctx.nextId}
			<a class="pg" href="#{ctx.nextId}">{ctx.index + 1}/{ctx.count} →</a>
		{:else}
			<b class="pg">{ctx.index + 1}/{ctx.count}</b>
		{/if}
	{/if}
	<span>{ctx.tab ?? label}</span>
</div>
