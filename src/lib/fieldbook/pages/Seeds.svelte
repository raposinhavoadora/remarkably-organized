<script lang="ts">
	import type { FbContext } from '../fieldbook';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/12;grid-row:1/3">Seeds</div>
	<Tab {ctx} label="Ideas" />
	<div class="c hn sub" style="grid-column:10/23;grid-row:2/3">
		a line · a title · a fragment
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="c hn" style="grid-column:1/23;grid-row:3/4">
		No judging here. When one ships, mark it: used → Day ___.
	</div>
	<div class="th" style="grid-column:1/23;grid-row:4/5"></div>
	<div class="c ch" style="grid-column:1/3;grid-row:4/5">Tag</div>
	<div class="c ch pl" style="grid-column:3/23;grid-row:4/5">Seed</div>
	<div class="vl" style="grid-column:3/4;grid-row:4/33"></div>
</div>
