<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Blog — None</title>
</svelte:head>

<section class="py-12">
	<p class="text-xs text-muted">// blog</p>
	<h1 class="mt-2 font-(family-name:--font-display) text-2xl">Notes</h1>

	<div class="mt-8 flex flex-col gap-6">
		{#each data.posts as post (post.slug)}
			<a href="/blog/{post.slug}" class="block">
				<h2 class="font-(family-name:--font-display) text-fg hover:text-accent-2">{post.title}</h2>
				<p class="mt-1 text-xs text-muted">{new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
				<p class="mt-2 text-sm text-muted">{post.description}</p>
			</a>
		{/each}
	</div>
</section>
