import type { Component } from 'svelte';
import type { FbContext, FbTemplate } from '../fieldbook';
import Asks from './Asks.svelte';
import BackOn from './BackOn.svelte';
import BackPlan from './BackPlan.svelte';
import Board from './Board.svelte';
import Ceiling from './Ceiling.svelte';
import Compass from './Compass.svelte';
import Day from './Day.svelte';
import Debriefs from './Debriefs.svelte';
import Decisions from './Decisions.svelte';
import Energy from './Energy.svelte';
import Evolution from './Evolution.svelte';
import FutureLog from './FutureLog.svelte';
import Heartbeat from './Heartbeat.svelte';
import IOwe from './IOwe.svelte';
import Ideas from './Ideas.svelte';
import ImageSeeds from './ImageSeeds.svelte';
import Inbox from './Inbox.svelte';
import Index from './Index.svelte';
import Key from './Key.svelte';
import Lessons from './Lessons.svelte';
import Migration from './Migration.svelte';
import Month from './Month.svelte';
import MonthPlan from './MonthPlan.svelte';
import Project from './Project.svelte';
import RaceTrace from './RaceTrace.svelte';
import RedLine from './RedLine.svelte';
import Rituals from './Rituals.svelte';
import Rules from './Rules.svelte';
import Seeds from './Seeds.svelte';
import Threads from './Threads.svelte';
import Train from './Train.svelte';
import Walks from './Walks.svelte';
import Week from './Week.svelte';
import Wins from './Wins.svelte';

/** The component that draws each Field Book page template */
export const fbComponents: Record<FbTemplate, Component<{ ctx: FbContext }>> = {
	'fb-rules': Rules,
	'fb-key': Key,
	'fb-rituals': Rituals,
	'fb-index': Index,
	'fb-threads': Threads,
	'fb-future-log': FutureLog,
	'fb-compass': Compass,
	'fb-race-trace': RaceTrace,
	'fb-board': Board,
	'fb-heartbeat': Heartbeat,
	'fb-month': Month,
	'fb-month-plan': MonthPlan,
	'fb-week': Week,
	'fb-inbox': Inbox,
	'fb-day': Day,
	'fb-red-line': RedLine,
	'fb-migration': Migration,
	'fb-project': Project,
	'fb-decisions': Decisions,
	'fb-evolution': Evolution,
	'fb-back-plan': BackPlan,
	'fb-walks': Walks,
	'fb-debriefs': Debriefs,
	'fb-ceiling': Ceiling,
	'fb-ideas': Ideas,
	'fb-seeds': Seeds,
	'fb-image-seeds': ImageSeeds,
	'fb-asks': Asks,
	'fb-i-owe': IOwe,
	'fb-energy': Energy,
	'fb-train': Train,
	'fb-wins': Wins,
	'fb-lessons': Lessons,
	'fb-back-on': BackOn,
};
