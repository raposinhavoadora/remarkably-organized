import {
	getWeek,
	type PlannerSettings,
	type Quarter,
	type Timeframe,
	type Week,
} from '$lib';

/**
 * The Field Book: a bullet-journal style system woven into the planner.
 *
 * - Front pages (rules, key, rituals, index, threads, future log) follow the cover.
 * - Season pages (compass, race trace, board, heartbeat, red line, migration) follow
 *   every quarter page.
 * - Month, week and day pages are regular page templates of the planner.
 * - Back pages (projects, walks, ideas, system) follow the last day page.
 */

/** Where a page draws its dot grid: nowhere, below the title or on the whole sheet */
type Dots = false | 'body' | 'full';

/** Which planner pages a template is offered for in the settings */
type Scope = 'any' | 'month' | 'week' | 'day' | 'none';

export const fbTemplates = {
	'fb-rules': { name: 'Rules', dots: false, scope: 'none' },
	'fb-key': { name: 'Key', dots: false, scope: 'none' },
	'fb-rituals': { name: 'Rituals', dots: false, scope: 'none' },
	'fb-index': { name: 'Index', dots: false, scope: 'none' },
	'fb-threads': { name: 'Threads', dots: 'body', scope: 'any' },
	'fb-future-log': { name: 'Future log', dots: 'body', scope: 'none' },
	'fb-compass': { name: 'Season compass', dots: 'body', scope: 'any' },
	'fb-race-trace': { name: 'Race trace', dots: 'body', scope: 'none' },
	'fb-board': { name: 'Project board', dots: 'body', scope: 'any' },
	'fb-heartbeat': { name: 'Heartbeat', dots: 'body', scope: 'none' },
	'fb-month': { name: 'Month opener', dots: 'body', scope: 'month' },
	'fb-month-plan': { name: 'Month plan and close', dots: 'body', scope: 'month' },
	'fb-week': { name: 'Week plan', dots: 'body', scope: 'week' },
	'fb-inbox': { name: 'Inbox', dots: 'body', scope: 'any' },
	'fb-day': { name: 'Day', dots: 'full', scope: 'day' },
	'fb-red-line': { name: 'Red line', dots: 'body', scope: 'none' },
	'fb-migration': { name: 'Migration', dots: 'body', scope: 'none' },
	'fb-project': { name: 'Project card', dots: 'body', scope: 'any' },
	'fb-decisions': { name: 'Decisions', dots: 'body', scope: 'any' },
	'fb-evolution': { name: 'Evolution', dots: 'body', scope: 'any' },
	'fb-back-plan': { name: 'Back-plan', dots: 'body', scope: 'any' },
	'fb-walks': { name: 'Walks', dots: 'body', scope: 'any' },
	'fb-debriefs': { name: 'Debriefs', dots: 'body', scope: 'any' },
	'fb-ceiling': { name: 'Ceiling-breakers', dots: 'body', scope: 'any' },
	'fb-ideas': { name: 'Ideas Garage', dots: 'body', scope: 'any' },
	'fb-seeds': { name: 'Seeds', dots: 'body', scope: 'any' },
	'fb-image-seeds': { name: 'Image seeds', dots: 'body', scope: 'any' },
	'fb-asks': { name: 'Asks & chases', dots: 'body', scope: 'any' },
	'fb-i-owe': { name: 'I owe · waiting on', dots: 'body', scope: 'any' },
	'fb-energy': { name: 'Energy menu', dots: 'body', scope: 'any' },
	'fb-train': { name: 'Train list', dots: 'body', scope: 'any' },
	'fb-wins': { name: 'Wins', dots: 'body', scope: 'any' },
	'fb-lessons': { name: 'Lessons', dots: 'body', scope: 'any' },
	'fb-back-on': { name: 'Back on', dots: false, scope: 'none' },
} as const satisfies Record<string, { name: string; dots: Dots; scope: Scope }>;

export type FbTemplate = keyof typeof fbTemplates;

export function isFbTemplate(template: string): template is FbTemplate {
	return template in fbTemplates;
}

/** Everything a Field Book page needs to know about where it sits in the planner */
export interface FbContext {
	settings: PlannerSettings;

	/** The year, quarter, month, week or day the page belongs to */
	timeframe: Timeframe;

	/** The label of the tab in the top right corner. Each page has its own fallback */
	tab?: string;

	/** For pages that repeat: the 0-indexed position of this page */
	index: number;

	/** For pages that repeat: how many there are */
	count: number;

	/** For pages that repeat: the id of the page that follows this one */
	nextId?: string;

	/** The 1-indexed project slot the page belongs to */
	slot?: number;
}

/** A Field Book page that is added to the planner outside of the page templates */
export interface FbEntry extends Omit<FbContext, 'settings' | 'timeframe'> {
	id: string;
	template: FbTemplate;
	timeframe?: Timeframe;
	tab: string;
	breadcrumbs: { name: string; href: string }[];
}

/** The pages that follow each quarter, in order. The key is the suffix of the page id */
export const fbSeasonPages = {
	compass: 'fb-compass',
	trace: 'fb-race-trace',
	board: 'fb-board',
	heartbeat: 'fb-heartbeat',
	redline: 'fb-red-line',
	migration: 'fb-migration',
} as const satisfies Record<string, FbTemplate>;

/** How many pages each of the repeating back-of-book lists gets */
const repeats = {
	threads: 2,
	debriefs: 4,
	ideas: 4,
	seeds: 4,
	imageSeeds: 2,
	asks: 4,
	iOwe: 2,
	train: 2,
	wins: 4,
	lessons: 2,
};

/** The project tags from the settings: one per line, the tag first and then its name */
export function fbTags(settings: PlannerSettings) {
	return settings.fieldBook.tags
		.split('\n')
		.map((line) => line.trim())
		.filter(Boolean)
		.map((line) => {
			const [tag, ...label] = line.split(/\s+/);
			return { tag, label: label.join(' ') };
		});
}

function entries(
	base: string,
	template: FbTemplate,
	tab: string,
	count = 1,
	parents: FbEntry['breadcrumbs'] = [],
): FbEntry[] {
	const name = fbTemplates[template].name;
	const idOf = (index: number) => (index === 0 ? base : `${base}-pg${index + 1}`);
	return Array.from({ length: count }, (_, index) => ({
		id: idOf(index),
		template,
		tab,
		index,
		count,
		nextId: index < count - 1 ? idOf(index + 1) : undefined,
		breadcrumbs: [
			...parents,
			{ name, href: `#${base}` },
			...(index > 0 ? [{ name: `${index + 1}`, href: `#${idOf(index)}` }] : []),
		],
	}));
}

/** The pages that follow the cover */
export function fbFront(settings: PlannerSettings): FbEntry[] {
	return [
		...entries('fb-rules', 'fb-rules', 'Front'),
		...entries('fb-key', 'fb-key', 'Front'),
		...entries('fb-rituals', 'fb-rituals', 'Front'),
		...entries('fb-index', 'fb-index', 'Front'),
		...entries('fb-threads', 'fb-threads', 'Front', repeats.threads),
		...settings.quarters.map((quarter, index, quarters) => ({
			id: fbFutureLogId(quarter),
			template: 'fb-future-log' as const,
			timeframe: quarter,
			tab: 'Front',
			index,
			count: quarters.length,
			nextId: quarters[index + 1] ? fbFutureLogId(quarters[index + 1]) : undefined,
			breadcrumbs: [
				{ name: 'Future log', href: `#${fbFutureLogId(quarters[0])}` },
				...(index > 0
					? [{ name: `${index + 1}`, href: `#${fbFutureLogId(quarter)}` }]
					: []),
			],
		})),
	];
}

/** The pages that follow a quarter page */
export function fbSeason(quarter: Quarter): FbEntry[] {
	return Object.entries(fbSeasonPages).flatMap(([suffix, template]) =>
		entries(`${quarter.id}-${suffix}`, template, `${quarter.nameShort} ${quarter.year}`),
	);
}

/** The label of a project slot: its tag from the settings or its number */
export function fbProjectName(settings: PlannerSettings, slot: number) {
	return fbTags(settings)[slot - 1]?.tag || `Project ${slot}`;
}

/** The pages that follow the last day page */
export function fbBack(settings: PlannerSettings): FbEntry[] {
	const projects = Array.from(
		{ length: Math.max(0, Math.min(40, Math.round(settings.fieldBook.projects) || 0)) },
		(_, i) => i + 1,
	).flatMap((slot) => {
		const base = `fb-project-${slot}`;
		const name = fbProjectName(settings, slot);
		const parents = [
			{ name: 'Projects', href: '#fb-index' },
			{ name, href: `#${base}` },
		];
		return [
			{ ...entries(base, 'fb-project', name)[0], breadcrumbs: parents },
			...entries(`${base}-decisions`, 'fb-decisions', name, 1, parents),
			...entries(`${base}-evolution`, 'fb-evolution', name, 1, parents),
			...entries(`${base}-back-plan`, 'fb-back-plan', name, 1, parents),
		].map((entry) => ({ ...entry, slot }));
	});
	return [
		...projects,
		...entries('fb-walks', 'fb-walks', 'Walks'),
		...entries('fb-debriefs', 'fb-debriefs', 'Walks', repeats.debriefs),
		...entries('fb-ceiling', 'fb-ceiling', 'Walks'),
		...entries('fb-ideas', 'fb-ideas', 'Ideas', repeats.ideas),
		...entries('fb-seeds', 'fb-seeds', 'Ideas', repeats.seeds),
		...entries('fb-image-seeds', 'fb-image-seeds', 'Ideas', repeats.imageSeeds),
		...entries('fb-asks', 'fb-asks', 'System', repeats.asks),
		...entries('fb-i-owe', 'fb-i-owe', 'System', repeats.iOwe),
		...entries('fb-energy', 'fb-energy', 'System'),
		...entries('fb-train', 'fb-train', 'System', repeats.train),
		...entries('fb-wins', 'fb-wins', 'System', repeats.wins),
		...entries('fb-lessons', 'fb-lessons', 'System', repeats.lessons),
		...entries('fb-back-on', 'fb-back-on', 'System'),
	];
}

/** The links to the Field Book shown next to the collection links in the navigation */
export function fbNavLinks(settings: PlannerSettings, all = true) {
	if (settings.fieldBook.disable) return [];
	return [
		{ id: 'fb-index', name: 'Index' },
		...(all
			? [
					...(settings.fieldBook.projects >= 1
						? [{ id: 'fb-project-1', name: 'Projects' }]
						: []),
					{ id: 'fb-ideas', name: 'Ideas' },
					{ id: 'fb-asks', name: 'System' },
				]
			: []),
	];
}

export function fbFutureLogId(quarter: Quarter) {
	return `fb-future-${quarter.id}`;
}

export function fbDayId(date: Date | number) {
	const day = new Date(date);
	return `${day.getUTCFullYear()}-${day.getUTCMonth() + 1}-${day.getUTCDate()}`;
}

/** The week a date falls in */
export function fbWeekOf(settings: PlannerSettings, date: Date | number) {
	return getWeek(date, settings.date.startWeekOnSunday) as Week;
}

/**
 * The quarter whose season pages a week is logged in. Weeks at either end of the
 * planner that belong to a quarter outside of it are logged in the nearest one.
 */
export function fbSeasonOf(settings: PlannerSettings, week: Week): Quarter | undefined {
	const quarters = settings.quarters;
	if (!quarters.length) return undefined;
	const own = quarters.find((q) => q.year === week.year && q.quarter === week.quarter);
	if (own) return own;
	return week.start.getTime() < quarters[0].start.getTime()
		? quarters[0]
		: quarters[quarters.length - 1];
}

/** The weeks that are logged in the season pages of a quarter */
export function fbWeeksOf(settings: PlannerSettings, quarter: Timeframe) {
	return settings.weeks.filter((week) => fbSeasonOf(settings, week)?.id === quarter.id);
}

/** The id of a season page (like the race trace) for the week a date falls in */
export function fbSeasonId(
	settings: PlannerSettings,
	date: Date | number,
	page: keyof typeof fbSeasonPages,
) {
	const quarter = fbSeasonOf(settings, fbWeekOf(settings, date));
	return quarter ? `${quarter.id}-${page}` : undefined;
}

/** Returns the id if that page is part of the planner, so that no link leads nowhere */
export function fbTarget(settings: PlannerSettings, id: string | undefined) {
	if (!id) return undefined;
	if (id.startsWith('fb-')) {
		if (settings.fieldBook.disable) return undefined;
		const slot = id.match(/^fb-project-(\d+)/)?.[1];
		if (slot && +slot > settings.fieldBook.projects) return undefined;
		const quarter = id.match(/^fb-future-(.+)$/)?.[1];
		if (quarter && !settings.quarters.some((q) => q.id === quarter)) return undefined;
		return id;
	}
	const season = id.match(/^(\d+-q\d)-([a-z]+)$/);
	if (season) {
		const exists =
			!settings.fieldBook.disable &&
			!settings.quarterPage.disable &&
			season[2] in fbSeasonPages &&
			settings.pageIds.has(season[1]);
		return exists ? id : undefined;
	}
	const page2 = id.match(/^(.+)-pg2$/);
	if (page2) {
		const amount = /-wk\d+$/.test(page2[1])
			? settings.weekPage.notePagesAmount
			: /^\d+-\d+$/.test(page2[1])
				? settings.monthPage.notePagesAmount
				: 0;
		return amount >= 1 && settings.pageIds.has(page2[1]) ? id : undefined;
	}
	return settings.pageIds.has(id) ? id : undefined;
}
