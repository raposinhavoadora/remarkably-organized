<script lang="ts">
	import type { FbContext } from '../fieldbook';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/9;grid-row:1/3">Lessons</div>
	<Tab {ctx} label="System" />
	<div class="c hn sub" style="grid-column:9/23;grid-row:2/3">
		what I now know · one line each
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="th" style="grid-column:1/23;grid-row:3/4"></div>
	<div class="c ch" style="grid-column:1/3;grid-row:3/4">Date</div>
	<div class="c ch pl" style="grid-column:3/23;grid-row:3/4">Lesson</div>
	<div class="vl" style="grid-column:3/4;grid-row:3/33"></div>
</div>
