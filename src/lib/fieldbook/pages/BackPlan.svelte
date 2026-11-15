<script lang="ts">
	import type { FbContext } from '../fieldbook';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/12;grid-row:1/3">Back-plan</div>
	<Tab {ctx} label="Projects" />
	<div class="c hn sub" style="grid-column:12/23;grid-row:2/3">write the end first</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="c" style="grid-column:5/6;grid-row:3/4">
		<span class="dm" style="margin-left:-6px"></span>
	</div>
	<div class="c ch rd end" style="grid-column:1/5;grid-row:3/4;padding-right:14px">
		The end
	</div>
	<div class="r2" style="grid-column:5/23;grid-row:3/4"></div>
	<div
		class="vl"
		style="grid-column:5/6;grid-row:4/27;border-left-width:2.4px;margin-left:-1.2px">
	</div>
	<div class="c" style="grid-column:5/6;grid-row:5/6">
		<span class="o" style="margin-left:-7px;background:#ffffff"></span>
	</div>
	<div class="c" style="grid-column:5/6;grid-row:8/9">
		<span class="o" style="margin-left:-7px;background:#ffffff"></span>
	</div>
	<div class="c" style="grid-column:5/6;grid-row:11/12">
		<span class="o" style="margin-left:-7px;background:#ffffff"></span>
	</div>
	<div class="c" style="grid-column:5/6;grid-row:14/15">
		<span class="o" style="margin-left:-7px;background:#ffffff"></span>
	</div>
	<div class="c" style="grid-column:5/6;grid-row:17/18">
		<span class="o" style="margin-left:-7px;background:#ffffff"></span>
	</div>
	<div class="c" style="grid-column:5/6;grid-row:20/21">
		<span class="o" style="margin-left:-7px;background:#ffffff"></span>
	</div>
	<div class="c" style="grid-column:5/6;grid-row:23/24">
		<span class="o" style="margin-left:-7px;background:#ffffff"></span>
	</div>
	<div class="c" style="grid-column:5/6;grid-row:26/27">
		<span class="o fl" style="margin-left:-7px"></span>
	</div>
	<div class="c ch end" style="grid-column:1/5;grid-row:26/27;padding-right:14px">
		Now
	</div>
	<div class="c hn" style="grid-column:6/23;grid-row:4/5;padding-left:10px">
		date on the left, the milestone beside its circle
	</div>

	<div class="c lb" style="grid-column:1/23;grid-row:28/29">Anchors</div>
	<div class="c ch" style="grid-column:1/5;grid-row:29/30">Date</div>
	<div class="c ch pl" style="grid-column:5/23;grid-row:29/30">What</div>
	<div class="vl" style="grid-column:5/6;grid-row:29/33"></div>
</div>
