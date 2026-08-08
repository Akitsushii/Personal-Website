<script lang="ts">
	import { page } from '$app/state';

	const links = [
		{ href: '/about', label: 'about' },
		{ href: '/projects', label: 'projects' },
		{ href: '/blog', label: 'blog' }
	];
</script>

<header class="mx-auto flex max-w-(--max-width-content) items-center justify-between px-6 py-8">
	<a href="/" class="flex items-center gap-2">
		<svg viewBox="0 0 32 32" class="pixelated h-5 w-5">
			<rect x="2" y="6" width="28" height="20" rx="3" fill="var(--color-bg)" stroke="var(--color-accent-2)" stroke-width="2" />
			<rect x="6" y="11" width="10" height="7" fill="var(--color-accent)" />
			<line x1="11" y1="11" x2="11" y2="18" stroke="var(--color-bg)" stroke-width="1" />
			<line x1="6" y1="14.5" x2="16" y2="14.5" stroke="var(--color-bg)" stroke-width="1" />
		</svg>
		<span class="font-(family-name:--font-display) text-sm">none</span>
	</a>

	<nav class="flex gap-5 text-sm">
		{#each links as link (link.href)}
			<a
				href={link.href}
				class="transition-colors hover:text-accent"
				class:text-accent={page.url.pathname.startsWith(link.href)}
				class:text-muted={!page.url.pathname.startsWith(link.href)}
			>
				{link.label}
			</a>
		{/each}
	</nav>
</header>
