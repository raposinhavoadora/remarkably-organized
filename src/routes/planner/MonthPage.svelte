<script lang="ts">
	import { intersect, type Month, type PlannerSettings } from '$lib';
	import Page from '$lib/components/Page.svelte';
	import SideNav from './SideNav.svelte';
	import TopNav from './TopNav.svelte';

	let { month = {} as Month, settings = {} as PlannerSettings } = $props();
</script>

{#each settings.monthPage.pages as template, i (i)}
	{@const id = i === 0 ? month.id : `${month.id}-pg${i + 1}`}
	<article {id} use:intersect={{ rootMargin: '1000px 0px 1000px 0px' }}>
		<SideNav {settings} tabs="months" timeframe={month} />
		<TopNav
			{settings}
			timeframe={month}
			breadcrumbs={i === 0 ? [] : [{ href: `#${id}`, name: `Page ${i + 1}` }]} />
		<Page display={template} {settings} timeframe={month} />
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
