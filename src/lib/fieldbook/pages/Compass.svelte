<script lang="ts">
	import type { FbContext } from '../fieldbook';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/14;grid-row:1/3">Season compass</div>
	<Tab {ctx} label="Season" />
	<div class="c hn sub" style="grid-column:14/23;grid-row:2/3">re-read every Sunday</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="c lb" style="grid-column:1/5;grid-row:3/4">Race</div>
	<div class="c hn" style="grid-column:4/23;grid-row:3/4">
		<span class="f" style="width:60px;margin-left:0"></span>
		from
		<span class="f" style="width:150px"></span>
		to
		<span class="f" style="width:150px"></span>
	</div>

	<div class="c n" style="grid-column:1/2;grid-row:4/5">1</div>
	<div class="c end" style="grid-column:19/23;grid-row:4/5">
		<span class="o"></span>
		<span class="o"></span>
		<span class="o"></span>
	</div>
	<div class="c hn pl" style="grid-column:2/6;grid-row:5/6">done when</div>
	<div class="c hn pl" style="grid-column:2/6;grid-row:7/8">so far</div>
	<div class="dl" style="grid-column:1/23;grid-row:8/9"></div>

	<div class="c n" style="grid-column:1/2;grid-row:9/10">2</div>
	<div class="c end" style="grid-column:19/23;grid-row:9/10">
		<span class="o"></span>
		<span class="o"></span>
		<span class="o"></span>
	</div>
	<div class="c hn pl" style="grid-column:2/6;grid-row:10/11">done when</div>
	<div class="c hn pl" style="grid-column:2/6;grid-row:12/13">so far</div>
	<div class="dl" style="grid-column:1/23;grid-row:13/14"></div>

	<div class="c n" style="grid-column:1/2;grid-row:14/15">3</div>
	<div class="c end" style="grid-column:19/23;grid-row:14/15">
		<span class="o"></span>
		<span class="o"></span>
		<span class="o"></span>
	</div>
	<div class="c hn pl" style="grid-column:2/6;grid-row:15/16">done when</div>
	<div class="c hn pl" style="grid-column:2/6;grid-row:17/18">so far</div>
	<div class="r1" style="grid-column:1/23;grid-row:18/19"></div>

	<div class="c lb" style="grid-column:1/23;grid-row:19/20">
		The gate reads · circle one
	</div>
	<div class="c tg" style="grid-column:1/2;grid-row:20/21">A</div>
	<div class="c tg" style="grid-column:8/9;grid-row:20/21">B</div>
	<div class="c tg" style="grid-column:15/16;grid-row:20/21">C</div>
	<div class="c hn" style="grid-column:1/23;grid-row:21/22">
		flags
		<span class="bx" style="margin-left:14px"></span>
		<span class="f" style="width:110px;margin-left:0"></span>
		<span class="bx"></span>
		<span class="f" style="width:110px;margin-left:0"></span>
		<span class="bx"></span>
		<span class="f" style="width:110px;margin-left:0"></span>
	</div>

	<div class="c lb" style="grid-column:1/23;grid-row:23/24">
		Next race · set at the gate, not before
	</div>
	<div class="c n" style="grid-column:1/2;grid-row:24/25">1</div>
	<div class="c n" style="grid-column:1/2;grid-row:25/26">2</div>
	<div class="c n" style="grid-column:1/2;grid-row:26/27">3</div>
	<div class="r1" style="grid-column:1/23;grid-row:27/28"></div>

	<div class="c lb" style="grid-column:1/23;grid-row:28/29">
		Not now · decided, do not re-litigate
	</div>
</div>
