<script lang="ts">
	import type { FbContext } from '../fieldbook';
	import Ref from '../Ref.svelte';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();
</script>

<div class="g">
	<div class="c ttl rd" style="grid-column:1/12;grid-row:1/3">Back on</div>
	<Tab {ctx} label="System" />
	<div class="c hn sub" style="grid-column:11/23;grid-row:2/3">
		VSC · virtual safety car
	</div>
	<div class="tip" style="grid-column:1/23;grid-row:2/3"></div>

	<div class="c tx" style="grid-column:1/23;grid-row:3/4">
		Three blank nights is the signal, not the verdict.
	</div>

	<div class="c lb" style="grid-column:1/23;grid-row:5/6">The restart · five minutes</div>
	<div class="c n" style="grid-column:1/2;grid-row:6/7">1</div>
	<div class="c tx pl" style="grid-column:2/23;grid-row:6/7">
		No backfilling. The gap is data, not debt.
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:8/9">2</div>
	<div class="c tx pl" style="grid-column:2/23;grid-row:8/9">
		Open to today. Not to the last page you wrote on.
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:10/11">3</div>
	<div class="c tx pl" style="grid-column:2/23;grid-row:10/11">
		Five-minute brain dump in this week’s Inbox.
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:12/13">4</div>
	<div class="c tx pl" style="grid-column:2/23;grid-row:12/13">
		What is real goes to Notion: “add: …”. Strike the rest.
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:14/15">5</div>
	<div class="c tx pl" style="grid-column:2/23;grid-row:14/15">
		Write today’s One. Ten-minute timer. Start.
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:16/17">6</div>
	<div class="c tx pl" style="grid-column:2/23;grid-row:16/17">
		Tonight at 22:00, the normal shutdown. Nothing extra.
	</div>

	<div class="c lb" style="grid-column:1/23;grid-row:18/19">
		Safety car · a longer stop
	</div>
	<div class="c tx w" style="grid-column:1/23;grid-row:19/23">
		Illness, a family week, the kids, a hard stretch: write SC across the week block,
		pause the Race Trace, skip the Pit Wall. Come back on a Monday with a fresh plan page.
	</div>

	<div class="c lb" style="grid-column:1/23;grid-row:23/24">Never</div>
	<div class="c tx" style="grid-column:1/23;grid-row:24/25">
		<span class="bu" style="margin-left:2px;margin-right:14px"></span>
		copy out the missed days
	</div>
	<div class="c tx" style="grid-column:1/23;grid-row:25/26">
		<span class="bu" style="margin-left:2px;margin-right:14px"></span>
		redesign the book in order to restart
	</div>
	<div class="c tx" style="grid-column:1/23;grid-row:26/27">
		<span class="bu" style="margin-left:2px;margin-right:14px"></span>
		invent the numbers you didn’t keep
	</div>

	<div class="r1" style="grid-column:1/23;grid-row:28/29"></div>
	<div class="c st rd" style="grid-column:1/23;grid-row:29/31">
		Re-entry is the habit. Not the streak.
	</div>
	<div class="c hn" style="grid-column:1/23;grid-row:31/32">
		<Ref {ctx} to="fb-rules">Rules</Ref>&nbsp;·&nbsp;<Ref {ctx} to="fb-key">
			Key
		</Ref>&nbsp;·&nbsp;<Ref {ctx} to="fb-index">Index</Ref>
	</div>
</div>
