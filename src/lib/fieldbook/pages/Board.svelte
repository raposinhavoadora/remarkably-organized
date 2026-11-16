<script lang="ts">
	import type { FbContext } from '../fieldbook';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/12;grid-row:1/3">Project board</div>
	<Tab {ctx} label="Season" />
	<div class="c hn sub" style="grid-column:12/23;grid-row:2/3">
		front burners: two at most
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="th" style="grid-column:1/23;grid-row:3/4"></div>
	<div class="c ch" style="grid-column:1/3;grid-row:3/4">Tag</div>
	<div class="c ch pl" style="grid-column:3/8;grid-row:3/4">Project</div>
	<div class="c ch pl" style="grid-column:8/18;grid-row:3/4">Season win · done when</div>
	<div class="c ch ctr" style="grid-column:18/20;grid-row:3/4">Brn</div>
	<div class="c ch pl" style="grid-column:20/23;grid-row:3/4">Next</div>
	<div class="vl" style="grid-column:3/4;grid-row:3/32"></div>
	<div class="vl" style="grid-column:8/9;grid-row:3/32"></div>
	<div class="vl" style="grid-column:18/19;grid-row:3/32"></div>
	<div class="vl" style="grid-column:20/21;grid-row:3/32"></div>
	<div class="dl" style="grid-column:1/23;grid-row:7/8"></div>
	<div class="dl" style="grid-column:1/23;grid-row:11/12"></div>
	<div class="dl" style="grid-column:1/23;grid-row:15/16"></div>
	<div class="dl" style="grid-column:1/23;grid-row:19/20"></div>
	<div class="dl" style="grid-column:1/23;grid-row:23/24"></div>
	<div class="dl" style="grid-column:1/23;grid-row:27/28"></div>
	<div class="r2" style="grid-column:1/23;grid-row:31/32"></div>
	<div class="c hn" style="grid-column:1/23;grid-row:32/33">
		Brn: F front · B back · O off · Next: date of the next move
	</div>
</div>
