<script lang="ts">
	// Placeholder links — swap in your own.
	const socials = [
		{ label: 'github', href: 'https://github.com' },
		{ label: 'linkedin', href: 'https://linkedin.com' },
		{ label: 'email', href: 'mailto:hello@example.com' }
	];
</script>

<footer class="mx-auto max-w-(--max-width-content) px-6 py-10 text-sm text-muted">
	<div class="border-t border-bg-2 pt-6">
		<div class="flex flex-wrap gap-4">
			{#each socials as social (social.href)}
				<a href={social.href} class="transition-colors hover:text-accent-2">{social.label}</a>
			{/each}
		</div>
		<p class="mt-4 text-xs">// built with svelte</p>
	</div>
</footer>
