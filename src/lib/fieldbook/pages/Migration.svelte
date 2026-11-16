<script lang="ts">
	import type { FbContext } from '../fieldbook';
	import Ref from '../Ref.svelte';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/12;grid-row:1/3">Migration</div>
	<Tab {ctx} label="Season" />
	<div class="c hn sub" style="grid-column:11/23;grid-row:2/3">
		carry less than you think
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="c lb" style="grid-column:1/23;grid-row:3/4">Moves to the next season</div>
	<div class="c tx" style="grid-column:1/23;grid-row:4/5">
		<span class="bx"></span>
		<Ref {ctx} to="fb-asks">open asks and promises</Ref>
	</div>
	<div class="c tx" style="grid-column:1/23;grid-row:5/6">
		<span class="bx"></span>
		<Ref {ctx} to="fb-ideas">ideas still warm after cool-off</Ref>
	</div>
	<div class="c tx" style="grid-column:1/23;grid-row:6/7">
		<span class="bx"></span>
		<Ref {ctx} to="fb-project-1">project cards still burning</Ref>
	</div>
	<div class="c tx" style="grid-column:1/23;grid-row:7/8">
		<span class="bx"></span>
		<Ref {ctx} to="fb-project-1-decisions">decisions still standing</Ref>
	</div>
	<div class="c tx" style="grid-column:1/23;grid-row:8/9">
		<span class="bx"></span>
		<Ref {ctx} to="fb-lessons">every lesson</Ref>
	</div>
	<div class="c tx" style="grid-column:1/23;grid-row:9/10">
		<span class="bx"></span>
		<Ref {ctx} to="fb-seeds">unused seeds worth keeping</Ref>
	</div>

	<div class="c lb" style="grid-column:1/23;grid-row:11/12">
		System changes for the next season
	</div>
	<div class="th" style="grid-column:1/23;grid-row:12/13"></div>
	<div class="c ch" style="grid-column:1/8;grid-row:12/13">Keep</div>
	<div class="c ch pl" style="grid-column:8/16;grid-row:12/13">Change</div>
	<div class="c ch pl" style="grid-column:16/23;grid-row:12/13">Drop</div>
	<div class="vl" style="grid-column:8/9;grid-row:12/24"></div>
	<div class="vl" style="grid-column:16/17;grid-row:12/24"></div>
	<div class="r2" style="grid-column:1/23;grid-row:23/24"></div>

	<div class="c lb" style="grid-column:1/23;grid-row:25/26">Next season</div>
	<div class="c hn" style="grid-column:1/23;grid-row:26/27">
		starts
		<span class="f" style="width:120px"></span>
		title
		<span class="f" style="width:150px"></span>
		next gate
		<span class="f" style="width:110px"></span>
	</div>
	<div class="c lb" style="grid-column:1/23;grid-row:28/29">
		What the next season is for · one sentence
	</div>
</div>
