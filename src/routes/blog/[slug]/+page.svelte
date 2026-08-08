<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title} — None</title>
</svelte:head>

<article class="prose-terminal prose prose-sm max-w-none py-12 text-fg">
	<p class="text-xs text-muted">
		// {new Date(data.meta.date).toLocaleDateString('en-GB', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		})}
	</p>
	<h1 class="font-(family-name:--font-display)">{data.meta.title}</h1>
	<data.content />
</article>
