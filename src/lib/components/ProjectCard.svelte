<script lang="ts">
	import type { Project } from '$lib/types';

	let { project }: { project: Project } = $props();
</script>

<a
	href={project.href}
	class="block rounded-sm border border-bg-2 bg-bg-1 p-5 transition-colors hover:border-accent-2"
>
	<h3 class="font-(family-name:--font-display) text-fg">{project.title}</h3>
	<p class="mt-2 text-sm text-muted">{project.description}</p>
	<div class="mt-4 flex flex-wrap gap-2">
		{#each project.tags as tag (tag)}
			<span class="rounded-sm bg-bg-2 px-2 py-0.5 text-xs text-accent-2">{tag}</span>
		{/each}
	</div>
</a>
