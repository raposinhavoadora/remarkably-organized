<script lang="ts">
	import type { FbContext } from '../fieldbook';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/13;grid-row:1/3">Asks &amp; chases</div>
	<Tab {ctx} label="System" />
	<div class="c hn sub" style="grid-column:13/23;grid-row:2/3">the demand engine</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="c hn" style="grid-column:1/23;grid-row:3/4">
		No ask leaves without a chase date. An empty chase is unfinished.
	</div>
	<div class="th" style="grid-column:1/23;grid-row:4/5"></div>
	<div class="c ch" style="grid-column:1/3;grid-row:4/5">Date</div>
	<div class="c ch pl" style="grid-column:3/8;grid-row:4/5">Who</div>
	<div class="c ch pl" style="grid-column:8/15;grid-row:4/5">The ask</div>
	<div class="c ch ctr" style="grid-column:15/17;grid-row:4/5">How</div>
	<div class="c ch ctr rd" style="grid-column:17/20;grid-row:4/5">Chase</div>
	<div class="c ch ctr" style="grid-column:20/23;grid-row:4/5">Result</div>
	<div class="vl" style="grid-column:3/4;grid-row:4/32"></div>
	<div class="vl" style="grid-column:8/9;grid-row:4/32"></div>
	<div class="vl" style="grid-column:15/16;grid-row:4/32"></div>
	<div class="vl" style="grid-column:17/18;grid-row:4/32"></div>
	<div class="vl" style="grid-column:20/21;grid-row:4/32"></div>
	<div class="r2" style="grid-column:1/23;grid-row:31/32"></div>
	<div class="c hn" style="grid-column:1/23;grid-row:32/33">
		How: R room · W WhatsApp · E email · L letter
	</div>
</div>
