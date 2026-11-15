<script lang="ts">
	import type { PlannerSettings, Timeframe } from '$lib';
	import './fieldbook.scss';
	import { fbTemplates, type FbContext, type FbTemplate } from './fieldbook';
	import { fbComponents } from './pages';

	let {
		template,
		settings,
		timeframe,
		tab = undefined,
		index = 0,
		count = 1,
		nextId = undefined,
		slot = undefined,
	}: { template: FbTemplate } & Pick<FbContext, 'settings' | 'timeframe'> &
		Partial<FbContext> = $props();

	// The size of the sheet the pages are drawn on (see fieldbook.scss)
	const sheetWidth = 702.4;
	const sheetHeight = 1014.4;
	// The width of a planner page (see the --doc-width of the planner)
	const docWidth = 702;

	/**
	 * Scales the sheet to fit in the space left by the side & top navigation.
	 * It is applied with `zoom` rather than a transform: a transform leaves the
	 * layout box at full size, and printing then breaks whatever part of that box
	 * crosses the bottom of the page onto the next page.
	 */
	const scale = $derived(
		Math.min(
			(docWidth - (settings.sideNav.disable ? 0 : settings.sideNav.width)) / sheetWidth,
			(docWidth / (settings.design.aspectRatio || 0.75) -
				(settings.topNav.disable ? 0 : settings.topNav.height)) /
				sheetHeight,
		),
	);
	const dots = $derived(fbTemplates[template].dots);
	const Component = $derived(fbComponents[template]);
	const ctx = $derived({
		settings: settings as PlannerSettings,
		timeframe: timeframe as Timeframe,
		tab,
		index,
		count,
		nextId,
		slot,
	} satisfies FbContext);
</script>

<div class="fb">
	<div class="fb-sheet" style:zoom={scale}>
		{#if dots}<div class="dots" class:full={dots === 'full'}></div>{/if}
		<Component {ctx} />
	</div>
</div>
