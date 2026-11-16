<script lang="ts">
	import type { FbContext } from '../fieldbook';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/13;grid-row:1/3">Ceiling-breakers</div>
	<Tab {ctx} label="Walks" />
	<div class="c hn sub" style="grid-column:14/23;grid-row:2/3">
		what lifts the ceiling
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="c hn" style="grid-column:1/23;grid-row:3/4">
		Half-days alone have a ceiling. These change the shape.
	</div>

	<div class="c n" style="grid-column:1/2;grid-row:4/5">1</div>
	<div class="c hn pl" style="grid-column:17/23;grid-row:4/5">status</div>
	<div class="vl" style="grid-column:17/18;grid-row:4/5"></div>
	<div class="c ch" style="grid-column:2/5;grid-row:5/6">Gate</div>
	<div class="c ch" style="grid-column:2/5;grid-row:6/7">Now</div>
	<div class="c ch" style="grid-column:2/5;grid-row:7/8">Next</div>
	<div class="vl" style="grid-column:5/6;grid-row:5/9"></div>
	<div class="dl" style="grid-column:1/23;grid-row:9/10"></div>

	<div class="c n" style="grid-column:1/2;grid-row:10/11">2</div>
	<div class="c hn pl" style="grid-column:17/23;grid-row:10/11">status</div>
	<div class="vl" style="grid-column:17/18;grid-row:10/11"></div>
	<div class="c ch" style="grid-column:2/5;grid-row:11/12">Gate</div>
	<div class="c ch" style="grid-column:2/5;grid-row:12/13">Now</div>
	<div class="c ch" style="grid-column:2/5;grid-row:13/14">Next</div>
	<div class="vl" style="grid-column:5/6;grid-row:11/15"></div>
	<div class="dl" style="grid-column:1/23;grid-row:15/16"></div>

	<div class="c n" style="grid-column:1/2;grid-row:16/17">3</div>
	<div class="c hn pl" style="grid-column:17/23;grid-row:16/17">status</div>
	<div class="vl" style="grid-column:17/18;grid-row:16/17"></div>
	<div class="c ch" style="grid-column:2/5;grid-row:17/18">Gate</div>
	<div class="c ch" style="grid-column:2/5;grid-row:18/19">Now</div>
	<div class="c ch" style="grid-column:2/5;grid-row:19/20">Next</div>
	<div class="vl" style="grid-column:5/6;grid-row:17/21"></div>
	<div class="dl" style="grid-column:1/23;grid-row:21/22"></div>

	<div class="c n" style="grid-column:1/2;grid-row:22/23">4</div>
	<div class="c hn pl" style="grid-column:17/23;grid-row:22/23">status</div>
	<div class="vl" style="grid-column:17/18;grid-row:22/23"></div>
	<div class="c ch" style="grid-column:2/5;grid-row:23/24">Gate</div>
	<div class="c ch" style="grid-column:2/5;grid-row:24/25">Now</div>
	<div class="c ch" style="grid-column:2/5;grid-row:25/26">Next</div>
	<div class="vl" style="grid-column:5/6;grid-row:23/27"></div>
	<div class="r1" style="grid-column:1/23;grid-row:27/28"></div>

	<div class="c tx" style="grid-column:1/23;grid-row:29/30">
		Half-days validate the product. These are the business.
	</div>
</div>
