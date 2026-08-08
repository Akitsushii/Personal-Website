<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status} — None</title>
</svelte:head>

<section class="dot-grid -mx-6 flex min-h-[50vh] flex-col justify-center rounded-sm px-6 py-16">
	<p class="font-(family-name:--font-display) text-xs text-accent-2">
		&gt; error {page.status}
	</p>
	<h1 class="mt-4 font-(family-name:--font-display) text-2xl">
		{page.error?.message ?? 'Something went wrong'}
	</h1>
	<a href="/" class="mt-6 text-sm text-accent hover:underline">&larr; back home</a>
</section>
