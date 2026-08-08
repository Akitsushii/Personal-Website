<script lang="ts">
	import githubIcon from '$lib/assets/github.png';
	import linkedinIcon from '$lib/assets/linkedin.png';
	import emailIcon from '$lib/assets/email.png';
	import bannerGif from '$lib/assets/banner.gif';
	import pfp from '$lib/assets/pfp.jpg';
	import { projects } from '$lib/projects';
	import { getPosts } from '$lib/posts';

	const recentProjects = projects.slice(0, 4);
	const recentPosts = getPosts().slice(0, 2);

	function formatDate(date: string) {
		return new Date(date).toLocaleDateString('en-GB', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>@Anthony</title>
	<meta name="description" content="BSIT in Infrastructure Services." />
</svelte:head>

<!-- hero -->
<section class="pb-8">
	<div class="h-47 overflow-hidden rounded-sm border border-bg-2">
			<img src={bannerGif} alt="" class="h-full w-full object-cover" />
	</div>

	<div class="-mt-14 flex items-end gap-9 px-1">
			<div class="h-34 w-34 overflow-hidden rounded-full border-4 border-bg">
				<img src={pfp} alt="Anthony" class="h-full w-full object-cover" />
	</div>
</div>

	<div class="mt-4 px-1">
		<h1 class="font-(family-name:--font-display) text-xl text-fg">@Anthony</h1>
		<p class="mt-1 text-sm text-accent-2">BSIT Major in Infrastructure Services</p>

		<p class="mt-4 max-w-md text-sm text-muted">
			I'm Anthony, and this is my personal website where i put the things like personal projects, blogs and other random stuff.
		</p>

	<div class="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
	<a href="https://github.com/Akitsushii" class="flex items-center gap-1.5 text-fg transition-colors hover:text-accent-2">
		<img src={githubIcon} alt="" class="h-4 w-4" />
		github
	</a>
	<a href="https://www.linkedin.com/in/anthony-josh-nacabuan/" class="flex items-center gap-1.5 text-fg transition-colors hover:text-accent-2">
		<img src={linkedinIcon} alt="" class="h-4 w-4" />
		linkedin
	</a>
	<a href="mailto:anthonyjoshnacabuan@gmail.com" class="flex items-center gap-1.5 text-fg transition-colors hover:text-accent-2">
		<img src={emailIcon} alt="" class="h-4 w-4" />
		email
	</a>
</div>
</section>

<!-- projects preview -->
<section class="border-t border-bg-2 py-8">
	<div class="flex items-center justify-between px-1">
		<p class="text-xs text-muted">// projects</p>
		<a href="/projects" class="text-xs text-accent-2 hover:underline">see all projects &gt;</a>
	</div>

	<div class="mt-4 rounded-sm border border-bg-2 p-4">
		<dl class="flex flex-col gap-2 text-sm">
			{#each recentProjects as project (project.title)}
				<div class="flex flex-wrap gap-x-2">
					<dt class="font-medium text-fg">{project.title}</dt>
					<dd class="text-muted">— {project.description}</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>

<!-- blog preview -->
<section class="border-t border-bg-2 py-8">
	<div class="flex items-center justify-between px-1">
		<p class="text-xs text-muted">// blog</p>
		<a href="/blog" class="text-xs text-accent-2 hover:underline">see more posts &gt;</a>
	</div>

	<div class="mt-4 grid gap-4 sm:grid-cols-2">
		{#each recentPosts as post (post.slug)}
			<a
				href="/blog/{post.slug}"
				class="block rounded-sm border border-bg-2 p-4 transition-colors hover:border-accent-2"
			>
				<div class="flex items-baseline justify-between gap-2">
					<span class="font-medium text-fg">{post.title}</span>
					<span class="shrink-0 text-xs text-muted">{formatDate(post.date)}</span>
				</div>
				<p class="mt-2 text-xs text-muted">{post.description}</p>
			</a>
		{/each}
	</div>
</section>
