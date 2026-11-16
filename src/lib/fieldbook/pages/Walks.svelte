<script lang="ts">
	import type { FbContext } from '../fieldbook';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/12;grid-row:1/3">Walks</div>
	<Tab {ctx} label="Walks" />
	<div class="c hn sub" style="grid-column:10/23;grid-row:2/3">
		the season · one row per walk
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="th" style="grid-column:1/23;grid-row:3/4"></div>
	<div class="c ch" style="grid-column:1/4;grid-row:3/4">Date</div>
	<div class="c ch pl" style="grid-column:4/13;grid-row:3/4">Walk</div>
	<div class="c ch ctr" style="grid-column:13/15;grid-row:3/4">Bkd</div>
	<div class="c ch ctr" style="grid-column:15/17;grid-row:3/4">Came</div>
	<div class="c ch ctr" style="grid-column:17/19;grid-row:3/4">€</div>
	<div class="c ch ctr" style="grid-column:19/21;grid-row:3/4">Ref</div>
	<div class="c ch ctr" style="grid-column:21/23;grid-row:3/4">48h</div>
	<div class="vl" style="grid-column:4/5;grid-row:3/31"></div>
	<div class="vl" style="grid-column:13/14;grid-row:3/32"></div>
	<div class="vl" style="grid-column:15/16;grid-row:3/32"></div>
	<div class="vl" style="grid-column:17/18;grid-row:3/32"></div>
	<div class="vl" style="grid-column:19/20;grid-row:3/32"></div>
	<div class="vl" style="grid-column:21/22;grid-row:3/32"></div>
	<div
		class="th"
		style="grid-column:1/23;grid-row:31/32;border-top:2.4px solid var(--ink)">
	</div>
	<div class="c ch" style="grid-column:1/13;grid-row:31/32">Season so far</div>
	<div class="c hn" style="grid-column:1/23;grid-row:32/33">
		Ref: a named person they’ll bring or tell · 48h: photos sent
	</div>
</div>
