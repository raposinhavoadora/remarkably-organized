<script lang="ts">
	import type { FbContext } from '../fieldbook';
	import Ref from '../Ref.svelte';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/12;grid-row:1/3">Rituals</div>
	<Tab {ctx} label="Front" />
	<div class="c hn sub" style="grid-column:10/23;grid-row:2/3">
		this is the whole system
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="c lb" style="grid-column:1/23;grid-row:3/4">
		Nightly shutdown · 22:00 · 10 min · day page
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:4/5">1</div>
	<div class="c tx pl" style="grid-column:2/23;grid-row:4/5">
		Read the Interior Route brief.
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:5/6">2</div>
	<div class="c tx pl" style="grid-column:2/23;grid-row:5/6">
		Every line: an arrow or a strike. Tasks →N: “add: …”
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:6/7">3</div>
	<div class="c tx pl" style="grid-column:2/23;grid-row:6/7">
		Unfinished: carry it with a dot. Three dots: flag it.
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:7/8">4</div>
	<div class="c tx pl" style="grid-column:2/23;grid-row:7/8">
		Night line: six words · E · km · @.
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:8/9">5</div>
	<div class="c tx pl" style="grid-column:2/23;grid-row:8/9">
		Tomorrow’s header: date · mode · D · L · Rx.
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:9/10">6</div>
	<div class="c tx pl" style="grid-column:2/23;grid-row:9/10">
		The One, two more at most. Ribbon on it. Close.
	</div>

	<div class="c lb" style="grid-column:1/23;grid-row:10/11">
		Decisions · Mon, Wed, Fri · 10:00 · 30 min
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:11/12">1</div>
	<div class="c tx pl" style="grid-column:2/23;grid-row:11/12">
		The night’s flags: date, hand off, drop or park.
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:12/13">2</div>
	<div class="c tx pl" style="grid-column:2/23;grid-row:12/13">
		Mondays: the Week’s 3 from Notion; Calendar → the lane.
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:13/14">3</div>
	<div class="c tx pl" style="grid-column:2/23;grid-row:13/14">
		No decisions after 19:00.
	</div>

	<div class="c lb" style="grid-column:1/23;grid-row:14/15">
		Pit Wall · Sunday 22:00 · 30 min
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:15/16">1</div>
	<div class="c tx pl" style="grid-column:2/23;grid-row:15/16">
		Fill the Pit Wall box at the foot of Sunday.
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:16/17">2</div>
	<div class="c tx pl" style="grid-column:2/23;grid-row:16/17">
		Numbers → Race trace · heartbeat → Board.
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:17/18">3</div>
	<div class="c tx pl" style="grid-column:2/23;grid-row:17/18">
		Wins →&nbsp;<Ref {ctx} to="fb-wins">Wins</Ref>&nbsp;· the lesson →&nbsp;<Ref
			{ctx}
			to="fb-lessons">
			Lessons
		</Ref>.
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:18/19">4</div>
	<div class="c tx pl" style="grid-column:2/23;grid-row:18/19">
		<Ref {ctx} to="fb-asks">Asks</Ref>: who gets chased this week?
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:19/20">5</div>
	<div class="c tx pl" style="grid-column:2/23;grid-row:19/20">
		A 1st of the month ahead? Its opener first.
	</div>

	<div class="c lb" style="grid-column:1/23;grid-row:20/21">
		Month close · first Sunday after month end · 45 min
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:21/22">1</div>
	<div class="c tx pl" style="grid-column:2/23;grid-row:21/22">
		Re-read the night lines. Line of the month. Score /5.
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:22/23">2</div>
	<div class="c tx pl" style="grid-column:2/23;grid-row:22/23">
		Channel check from outside: hello@, site, sign-up.
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:23/24">3</div>
	<div class="c tx pl" style="grid-column:2/23;grid-row:23/24">
		Renewals and cards: hosting, domains, subscriptions.
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:24/25">4</div>
	<div class="c tx pl" style="grid-column:2/23;grid-row:24/25">
		Burners: front (two at most) · back · off.
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:25/26">5</div>
	<div class="c tx pl" style="grid-column:2/23;grid-row:25/26">
		Ideas Garage: a verdict past every cool-off date.
	</div>

	<div class="c lb rd" style="grid-column:1/23;grid-row:26/27">
		Gates · re-plan only here
	</div>
	<div class="c hn" style="grid-column:1/23;grid-row:27/28">
		<span class="f" style="width:170px;margin-left:0"></span>
		·
		<span class="f" style="width:170px"></span>
		·
		<span class="f" style="width:170px"></span>
	</div>
	<div class="c tx" style="grid-column:1/23;grid-row:28/29">
		Between gates: execute, log, don’t redesign.
	</div>

	<div class="c lb" style="grid-column:1/23;grid-row:29/30">When it goes sideways</div>
	<div class="c tx w" style="grid-column:1/23;grid-row:30/32">
		Overloaded: five-minute brain dump in the week’s Inbox, then pick one. Three blank
		nights: <Ref {ctx} to="fb-back-on">Back on</Ref>.
	</div>
</div>
