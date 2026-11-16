<script lang="ts">
	import {
		fbFutureLogId,
		fbProjectName,
		fbSeasonPages,
		fbTemplates,
		type FbContext,
	} from '../fieldbook';
	import Ref from '../Ref.svelte';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();

	interface Line {
		/** A section heading. Otherwise the line is a row of links */
		heading?: string;
		/** A short label in front of the links */
		label?: string;
		links?: { name: string; to: string }[];
	}

	const settings = $derived(ctx.settings);

	/** Short names so that the six pages of a season fit on one line */
	const seasonNames: Record<keyof typeof fbSeasonPages, string> = {
		compass: 'Compass',
		trace: 'Race trace',
		board: 'Board',
		heartbeat: 'Heartbeat',
		redline: 'Red line',
		migration: 'Migration',
	};

	/** The map of the book: every section and the pages to jump to */
	const lines = $derived.by(() => {
		const lines: Line[] = [];
		const section = (heading: string, ...rows: Line[]) => {
			const filled = rows.filter((row) => row.links?.length);
			if (filled.length) lines.push({ heading }, ...filled, {});
		};
		const page = (to: string, template: keyof typeof fbTemplates) => ({
			name: fbTemplates[template].name,
			to,
		});

		section('Front', {
			links: [
				page('fb-rules', 'fb-rules'),
				page('fb-key', 'fb-key'),
				page('fb-rituals', 'fb-rituals'),
				page('fb-threads', 'fb-threads'),
				...(settings.quarters.length
					? [page(fbFutureLogId(settings.quarters[0]), 'fb-future-log')]
					: []),
			],
		});
		if (!settings.quarterPage.disable) {
			section(
				'Seasons',
				...settings.quarters.slice(0, 8).map((quarter) => ({
					label: `${quarter.nameShort} ${quarter.year}`,
					links: Object.keys(fbSeasonPages).map((suffix) => ({
						name: seasonNames[suffix as keyof typeof fbSeasonPages],
						to: `${quarter.id}-${suffix}`,
					})),
				})),
			);
		}
		if (!settings.monthPage.disable) {
			section(
				'Months',
				...settings.years.slice(0, 3).map((year) => ({
					label: `${year.year}`,
					links: settings.months
						.filter((month) => month.year === year.year)
						.map((month) => ({ name: month.nameShort, to: month.id })),
				})),
			);
		}
		const slots = Math.max(0, Math.min(40, Math.round(settings.fieldBook.projects) || 0));
		section(
			'Projects',
			...[0, 1].map((row) => ({
				links: Array.from({ length: slots }, (_, i) => i + 1)
					.slice(row * 10, row * 10 + 10)
					.map((slot) => ({
						name: fbProjectName(settings, slot).replace('Project ', ''),
						to: `fb-project-${slot}`,
					})),
			})),
		);
		section('Walks', {
			links: [
				page('fb-walks', 'fb-walks'),
				page('fb-debriefs', 'fb-debriefs'),
				page('fb-ceiling', 'fb-ceiling'),
			],
		});
		section('Ideas', {
			links: [
				page('fb-ideas', 'fb-ideas'),
				page('fb-seeds', 'fb-seeds'),
				page('fb-image-seeds', 'fb-image-seeds'),
			],
		});
		section(
			'System',
			{
				links: [
					page('fb-asks', 'fb-asks'),
					page('fb-i-owe', 'fb-i-owe'),
					page('fb-energy', 'fb-energy'),
				],
			},
			{
				links: [
					page('fb-train', 'fb-train'),
					page('fb-wins', 'fb-wins'),
					page('fb-lessons', 'fb-lessons'),
					page('fb-back-on', 'fb-back-on'),
				],
			},
		);
		// The index has 30 rows below its title
		return lines.slice(0, 30).map((line, i) => ({ ...line, row: i + 3 }));
	});
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/12;grid-row:1/3">Index</div>
	<Tab {ctx} label="Front" />
	<div class="c hn sub" style="grid-column:10/23;grid-row:2/3">the fixed map</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	{#each lines as line (line.row)}
		{#if line.heading}
			<div class="c lb" style="grid-column:1/23;grid-row:{line.row}/{line.row + 1}">
				{line.heading}
			</div>
		{:else if line.links}
			{#if line.label}
				<div class="c ch" style="grid-column:1/5;grid-row:{line.row}/{line.row + 1}">
					{line.label}
				</div>
			{/if}
			<div
				class="c links"
				class:tx={!line.label}
				class:hn={line.label}
				style="grid-column:{line.label ? 5 : 1}/23;grid-row:{line.row}/{line.row + 1}">
				{#each line.links as link, i (link.to)}
					{#if i > 0}<span class="dot">·</span>{/if}
					<Ref {ctx} to={link.to}>{link.name}</Ref>
				{/each}
			</div>
		{/if}
	{/each}
</div>

<style lang="scss">
	.links {
		color: var(--ink);
		.dot {
			margin: 0 9px;
		}
		&.hn .dot {
			margin: 0 6px;
		}
	}
</style>
