<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/pfp.jpg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="bg-grid flex min-h-screen justify-center">
	<main class="w-full max-w-(--max-width-content) bg-bg px-4 py-10 text-fg">
		{@render children()}
	</main>
	<div class="min-h-screen flex justify-center crt bg-grid"></div>
</div>

