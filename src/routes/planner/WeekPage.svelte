<script lang="ts">
	import { PlannerSettings, intersect, type Week } from '$lib';
	import Page from '$lib/components/Page.svelte';
	import SideNav from './SideNav.svelte';
	import TopNav from './TopNav.svelte';

	let { week = {} as Week, settings = {} as PlannerSettings } = $props();
</script>

{#each settings.weekPage.pages as template, i (i)}
	{@const id = i === 0 ? week.id : `${week.id}-pg${i + 1}`}
	<article {id} use:intersect={{ rootMargin: '1000px 0px 1000px 0px' }}>
		<SideNav {settings} tabs={settings.weekPage.sideNavDisplay} timeframe={week} />
		<TopNav
			{settings}
			timeframe={week}
			breadcrumbs={i === 0 ? [] : [{ href: `#${id}`, name: `Page ${i + 1}` }]} />
		<Page display={template} {settings} timeframe={week} />
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
