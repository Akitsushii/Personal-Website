<script lang="ts">
	import { projects } from '$lib/projects';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<svelte:head>
	<title>Projects — None</title>
</svelte:head>

<section class="py-12">
	<p class="text-xs text-muted">// projects</p>
	<h1 class="mt-2 font-(family-name:--font-display) text-2xl">Things I've built</h1>

	<div class="mt-8 grid gap-4 sm:grid-cols-2">
		{#each projects as project (project.title)}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
