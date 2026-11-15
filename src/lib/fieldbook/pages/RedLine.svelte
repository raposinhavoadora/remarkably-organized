<script lang="ts">
	import type { FbContext } from '../fieldbook';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();
</script>

<div class="g">
	<div class="c ttl rd" style="grid-column:1/12;grid-row:1/3">Red line</div>
	<Tab {ctx} label="Season" />
	<div class="c hn sub" style="grid-column:10/23;grid-row:2/3">
		season close · logs stop here
	</div>
	<div class="tip" style="grid-column:1/23;grid-row:2/3"></div>

	<div class="c hn" style="grid-column:1/23;grid-row:3/4">
		When the quarter’s last week is closed, the season is done.
	</div>
	<div class="c lb" style="grid-column:1/23;grid-row:4/5">Verdicts</div>
	<div class="c ch" style="grid-column:1/4;grid-row:5/6">Race 1</div>
	<div class="c hn end" style="grid-column:15/23;grid-row:5/6">reading A · B · C</div>
	<div class="c ch" style="grid-column:1/4;grid-row:6/7">Race 2</div>
	<div class="c hn end" style="grid-column:15/23;grid-row:6/7">reading A · B · C</div>

	<div class="c lb" style="grid-column:1/14;grid-row:8/9">Projects</div>
	<div class="c hn end" style="grid-column:14/23;grid-row:8/9">keep · pause · kill</div>
	<div class="th" style="grid-column:1/23;grid-row:9/10"></div>
	<div class="c ch" style="grid-column:1/3;grid-row:9/10">Tag</div>
	<div class="c ch pl" style="grid-column:3/19;grid-row:9/10">What happened</div>
	<div class="c ch ctr" style="grid-column:19/23;grid-row:9/10">Verdict</div>
	<div class="vl" style="grid-column:3/4;grid-row:9/18"></div>
	<div class="vl" style="grid-column:19/20;grid-row:9/18"></div>
	<div class="c hn ctr" style="grid-column:19/23;grid-row:10/11">K · P · X</div>
	<div class="c hn ctr" style="grid-column:19/23;grid-row:11/12">K · P · X</div>
	<div class="c hn ctr" style="grid-column:19/23;grid-row:12/13">K · P · X</div>
	<div class="c hn ctr" style="grid-column:19/23;grid-row:13/14">K · P · X</div>
	<div class="c hn ctr" style="grid-column:19/23;grid-row:14/15">K · P · X</div>
	<div class="c hn ctr" style="grid-column:19/23;grid-row:15/16">K · P · X</div>
	<div class="c hn ctr" style="grid-column:19/23;grid-row:16/17">K · P · X</div>
	<div class="c hn ctr" style="grid-column:19/23;grid-row:17/18">K · P · X</div>
	<div class="r2" style="grid-column:1/23;grid-row:17/18"></div>

	<div class="c lb" style="grid-column:1/23;grid-row:19/20">
		The number that changed most
	</div>
	<div class="c lb" style="grid-column:1/23;grid-row:22/23">
		The line of the season · from the night lines
	</div>
	<div class="c lb" style="grid-column:1/23;grid-row:26/27">
		What I know now that I didn’t at the start
	</div>
</div>
