<script lang="ts">
	import type { FbContext } from '../fieldbook';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/12;grid-row:1/3">Energy menu</div>
	<Tab {ctx} label="System" />
	<div class="c hn sub" style="grid-column:12/23;grid-row:2/3">
		pick by the battery you have
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="c hn" style="grid-column:1/23;grid-row:3/4">
		Not the battery you wish you had. Read last night’s E, then choose.
	</div>

	<div class="c lb q" style="grid-column:1/23;grid-row:4/5">
		<span class="o fl" style="margin:0 12px 0 0"></span>
		Full · one deep thing, 90 min at most
	</div>
	<div class="dl" style="grid-column:1/23;grid-row:8/9"></div>
	<div class="c lb q" style="grid-column:1/23;grid-row:9/10">
		<span class="o hf" style="margin:0 12px 0 0"></span>
		Half
	</div>
	<div class="dl" style="grid-column:1/23;grid-row:13/14"></div>
	<div class="c lb q" style="grid-column:1/23;grid-row:14/15">
		<span class="o" style="margin:0 12px 0 0"></span>
		Low
	</div>
	<div class="dl" style="grid-column:1/23;grid-row:18/19"></div>
	<div class="c lb q" style="grid-column:1/23;grid-row:19/20">
		<span class="rd" style="margin-right:12px">T</span>
		Transit · nothing that needs a decision
	</div>
	<div class="dl" style="grid-column:1/23;grid-row:23/24"></div>
	<div class="c lb q" style="grid-column:1/23;grid-row:24/25">
		<span class="rd" style="margin-right:12px">R</span>
		Recovery · earned, not owed
	</div>
	<div class="r1" style="grid-column:1/23;grid-row:28/29"></div>

	<div class="c tx" style="grid-column:1/23;grid-row:30/31">
		Empty battery, hard deadline: one small true step. Stop.
	</div>
</div>
