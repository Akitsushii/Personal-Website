<svelte:head>
	<title>About — None</title>
</svelte:head>

<section class="py-12">
	<p class="text-xs text-muted">// about</p>
	<h1 class="mt-2 font-(family-name:--font-display) text-2xl">A little about me</h1>

	<div class="prose-terminal prose prose-sm mt-6 max-w-none text-fg">
		<p>
			BSIT student majoring in Infrastructure Services, hands-on experience in hardware troubleshooting, OS imaging,
			and network-based deployment architecture.
		</p>
		<p>
			Outside of that, I'm finishing a BSIT degree and picking up new stacks for fun — this
			site included.
		</p>
		<p class="text-xs text-muted">// replace this with your own bio</p>
	</div>

	<div class="mt-10">
		<p class="text-xs text-muted">// stack</p>
		<div class="mt-3 flex flex-wrap gap-2 text-xs">
			{#each ['Java', 'EMV / PMA', 'TypeScript', 'Svelte', 'Python'] as skill (skill)}
				<span class="rounded-sm bg-bg-2 px-2 py-1 text-accent-2">{skill}</span>
			{/each}
		</div>
	</div>
</section>
