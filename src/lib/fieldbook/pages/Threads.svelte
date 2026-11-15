<script lang="ts">
	import type { FbContext } from '../fieldbook';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/12;grid-row:1/3">Threads</div>
	<Tab {ctx} label="Front" />
	<div class="c hn sub" style="grid-column:9/23;grid-row:2/3">
		anything you will want to find again
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="th" style="grid-column:1/23;grid-row:3/4"></div>
	<div class="c ch" style="grid-column:1/4;grid-row:3/4">Date</div>
	<div class="c ch pl" style="grid-column:4/20;grid-row:3/4">What</div>
	<div class="c ch ctr" style="grid-column:20/23;grid-row:3/4">P.</div>
	<div class="vl" style="grid-column:4/5;grid-row:3/33"></div>
	<div class="vl" style="grid-column:20/21;grid-row:3/33"></div>
</div>
