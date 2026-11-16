<script lang="ts">
	import type { FbContext } from '../fieldbook';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/9;grid-row:1/3">
		Wins
		<svg
			style="margin:0 0 6px 12px;flex:none"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			aria-hidden="true">
			<path
				d="M12 2.2l2.9 6.3 6.8.8-5 4.7 1.3 6.8L12 17.4l-6 3.4 1.3-6.8-5-4.7 6.8-.8z"
				fill="currentColor">
			</path>
		</svg>
	</div>
	<Tab {ctx} label="System" />
	<div class="c hn sub" style="grid-column:11/23;grid-row:2/3">
		read this on a bad day
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="th" style="grid-column:1/23;grid-row:3/4"></div>
	<div class="c ch" style="grid-column:1/3;grid-row:3/4">Date</div>
	<div class="c ch pl" style="grid-column:3/23;grid-row:3/4">Win</div>
	<div class="vl" style="grid-column:3/4;grid-row:3/33"></div>
</div>
