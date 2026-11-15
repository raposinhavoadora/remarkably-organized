<script lang="ts">
	import { intersect, type PlannerSettings, type Timeframe } from '$lib';
	import Page from '$lib/components/Page.svelte';
	import type { FbEntry } from '$lib/fieldbook/fieldbook';
	import SideNav from './SideNav.svelte';
	import TopNav from './TopNav.svelte';

	/**
	 * A run of Field Book pages: the front pages, the season pages of a quarter or
	 * the back pages. Pages of a quarter get that quarter's navigation.
	 */
	let {
		entries = [] as FbEntry[],
		settings = {} as PlannerSettings,
		quarter = undefined as Timeframe | undefined,
	} = $props();
	const year = $derived(settings.years[0]);
</script>

{#each entries as entry (entry.id)}
	<article id={entry.id} use:intersect={{ rootMargin: '1000px 0px 1000px 0px' }}>
		{#if quarter}
			<SideNav {settings} tabs="quarters" timeframe={quarter} />
			<TopNav {settings} timeframe={quarter} breadcrumbs={entry.breadcrumbs} />
		{:else}
			<SideNav
				tabs={!settings.monthPage.disable ? 'months' : 'none'}
				{settings}
				timeframe={year}
				disableActiveIndicator />
			<TopNav {settings} breadcrumbs={entry.breadcrumbs} />
		{/if}
		<Page
			display={entry.template}
			{settings}
			timeframe={entry.timeframe ?? quarter ?? year}
			fieldBook={entry} />
	</article>
{/each}

<style lang="scss">
	article {
		display: flex;
		align-items: center;
		flex-direction: column;
		padding-left: var(--sidenav-width);
		padding-top: var(--topnav-height);
	}
	:global(main.side-nav-right) article {
		padding-right: var(--sidenav-width);
		padding-left: 0;
	}
</style>
