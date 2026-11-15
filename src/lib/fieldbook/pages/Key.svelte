<script lang="ts">
	import { fbTags, type FbContext } from '../fieldbook';
	import Ref from '../Ref.svelte';
	import Tab from '../Tab.svelte';

	let { ctx }: { ctx: FbContext } = $props();

	/** Eight tags: those from the settings, then blanks to write the rest in by hand */
	const slots = $derived(
		Array.from(
			{ length: 8 },
			(_, i) => fbTags(ctx.settings)[i] as ReturnType<typeof fbTags>[number] | undefined,
		),
	);
</script>

<div class="g">
	<div class="c ttl" style="grid-column:1/12;grid-row:1/3">Key</div>
	<Tab {ctx} label="Front" />
	<div class="c hn sub" style="grid-column:10/23;grid-row:2/3">
		learn the core six first
	</div>
	<div class="hr" style="grid-column:1/23;grid-row:2/3"></div>
	<div class="tip" style="grid-column:1/3;grid-row:2/3"></div>

	<div class="c lb" style="grid-column:1/23;grid-row:3/4">Core · the bullet</div>
	<div class="c ctr" style="grid-column:1/3;grid-row:4/5;font-size:22px;font-weight:700">
		•
	</div>
	<div class="c tx" style="grid-column:3/23;grid-row:4/5">
		task · only today’s; anything bigger goes →N
	</div>
	<div class="c ctr" style="grid-column:1/3;grid-row:5/6">
		<span class="o" style="width:13px;height:13px"></span>
	</div>
	<div class="c tx" style="grid-column:3/23;grid-row:5/6">event, appointment</div>
	<div class="c ctr" style="grid-column:1/3;grid-row:6/7;font-size:22px;font-weight:700">
		–
	</div>
	<div class="c tx" style="grid-column:3/23;grid-row:6/7">note</div>
	<div class="c ctr" style="grid-column:1/3;grid-row:7/8;font-size:22px;font-weight:700">
		*
	</div>
	<div class="c tx" style="grid-column:3/23;grid-row:7/8">
		idea · goes to the&nbsp;<Ref {ctx} to="fb-ideas">Ideas Garage</Ref>
	</div>
	<div class="c ctr" style="grid-column:1/3;grid-row:8/9;font-size:22px;font-weight:700">
		~
	</div>
	<div class="c tx" style="grid-column:3/23;grid-row:8/9">
		seed · a line, an image, a title ·&nbsp;<Ref {ctx} to="fb-seeds">Seeds</Ref>
	</div>
	<div class="c ctr" style="grid-column:1/3;grid-row:9/10;font-size:20px;font-weight:700">
		@
	</div>
	<div class="c tx" style="grid-column:3/23;grid-row:9/10">
		ask ·&nbsp;<Ref {ctx} to="fb-asks">Asks</Ref>&nbsp;· not done until it has a chase
		date
	</div>

	<div class="c lb" style="grid-column:1/23;grid-row:10/11">
		States · written over the bullet
	</div>
	<div
		class="c ctr"
		style="grid-column:1/3;grid-row:11/12;font-size:22px;font-weight:700">
		×
	</div>
	<div class="c tx" style="grid-column:3/23;grid-row:11/12">done</div>
	<div
		class="c ctr"
		style="grid-column:1/3;grid-row:12/13;font-size:20px;font-weight:700">
		&gt;
	</div>
	<div class="c tx" style="grid-column:3/23;grid-row:12/13">
		carried to tomorrow · add one dot there
	</div>
	<div
		class="c ctr"
		style="grid-column:1/3;grid-row:13/14;font-size:20px;font-weight:700">
		→
	</div>
	<div class="c tx" style="grid-column:3/23;grid-row:13/14">
		moved out: →N Notion · →C Calendar · →p.__ here
	</div>
	<div
		class="c ctr"
		style="grid-column:1/3;grid-row:14/15;font-size:19px;font-weight:600;text-decoration:line-through;text-decoration-thickness:2px">
		ab
	</div>
	<div class="c tx" style="grid-column:3/23;grid-row:14/15">
		struck: dropped on purpose, no guilt
	</div>
	<div
		class="c ctr rd"
		style="grid-column:1/3;grid-row:15/16;font-size:22px;font-weight:700">
		···
	</div>
	<div class="c tx" style="grid-column:3/23;grid-row:15/16">
		three carries · flag it for the 10:00 slot
	</div>

	<div class="c lb" style="grid-column:1/23;grid-row:16/17">Marks</div>
	<div class="c ctr" style="grid-column:1/3;grid-row:17/18">
		<span class="dm" style="margin:0"></span>
	</div>
	<div class="c tx" style="grid-column:3/23;grid-row:17/18">
		the One · the thing that makes the day
	</div>
	<div
		class="c ctr rd"
		style="grid-column:1/3;grid-row:18/19;font-size:22px;font-weight:700">
		!
	</div>
	<div class="c tx" style="grid-column:3/23;grid-row:18/19">
		hard deadline · money, law, a person waiting
	</div>
	<div class="c ctr" style="grid-column:1/3;grid-row:19/20">
		<svg
			class="sv"
			style="margin:0"
			width="17"
			height="17"
			viewBox="0 0 24 24"
			aria-hidden="true">
			<path
				d="M12 2.2l2.9 6.3 6.8.8-5 4.7 1.3 6.8L12 17.4l-6 3.4 1.3-6.8-5-4.7 6.8-.8z"
				fill="currentColor">
			</path>
		</svg>
	</div>
	<div class="c tx" style="grid-column:3/23;grid-row:19/20">
		win · copied to&nbsp;<Ref {ctx} to="fb-wins">Wins</Ref>&nbsp;on Sunday
	</div>
	<div
		class="c ctr"
		style="grid-column:1/3;grid-row:20/21;font-size:21px;font-weight:700">
		?
	</div>
	<div class="c tx" style="grid-column:3/23;grid-row:20/21">
		question · to look up, or to bring to 22:00
	</div>

	<div class="c lb" style="grid-column:1/23;grid-row:21/22">
		Tags · in the margin, two letters
	</div>
	{#each slots as slot, i (i)}
		{@const col = i % 2 ? 12 : 1}
		{@const row = 22 + Math.floor(i / 2)}
		<div class="c tg" style="grid-column:{col}/{col + 2};grid-row:{row}/{row + 1}">
			{#if slot}
				<Ref {ctx} to="fb-project-{i + 1}" plain>{slot.tag}</Ref>
			{:else}
				<span class="f" style="width:40px;margin-left:0"></span>
			{/if}
		</div>
		<div class="c tx" style="grid-column:{col + 2}/{col + 11};grid-row:{row}/{row + 1}">
			{#if slot}{slot.label}{:else}<span class="f" style="width:230px;margin-left:0">
				</span>{/if}
		</div>
	{/each}

	<div class="c lb" style="grid-column:1/23;grid-row:26/27">
		Day modes · circle one in the header
	</div>
	<div class="c tx" style="grid-column:1/23;grid-row:27/28">
		F field · S studio, desk · T transit · H home · R rest
	</div>
	<div class="c hn" style="grid-column:1/23;grid-row:28/29">
		Tuesday and Thursday are field days.
	</div>

	<div class="c lb" style="grid-column:1/23;grid-row:29/30">
		Night line · last row of every day
	</div>
	<div class="c tx" style="grid-column:1/23;grid-row:30/31">
		six words · E
		<span class="o fl" style="margin-left:12px"></span>
		full
		<span class="o hf" style="margin-left:12px"></span>
		half
		<span class="o" style="margin-left:12px"></span>
		empty · km · @ asks
	</div>

	<div class="r1" style="grid-column:1/23;grid-row:31/32"></div>
	<div class="c hn" style="grid-column:1/23;grid-row:32/33">
		One black pen, one red: the One, hard deadlines, the red line.
	</div>
</div>
