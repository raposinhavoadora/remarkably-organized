<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fbTarget, type FbContext } from './fieldbook';

	/** A link to another page of the planner. Plain text if that page doesn't exist */
	let {
		ctx,
		to,
		plain = false,
		children,
	}: {
		ctx: FbContext;
		to: string | undefined;
		/** Leave out the underline (for links that are part of the page structure) */
		plain?: boolean;
		children: Snippet;
	} = $props();

	const id = $derived(fbTarget(ctx.settings, to));
</script>

{#if id}<a href="#{id}" class={plain ? null : 'ref'}>
		{@render children()}
	</a>{:else}{@render children()}{/if}
