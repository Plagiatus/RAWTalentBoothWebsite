<script lang="ts">
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>RAW Talent @ gamescom 2025</title>
</svelte:head>

<main>
	{@render children?.()}
</main>


<style>
	:root {
		--color-blueprint-base: #001c3a;
		--color-blueprint-grid: #0b2a48;
		--color-blueprint-box: #1c398e;
		--color-blueprint-box-30: color-mix(in srgb, #1c398e 30%, transparent);
		--color-blueprint-box-20: color-mix(in srgb, #1c398e 20%, transparent);
		--color-blueprint-box-10: color-mix(in srgb, #1c398e 10%, transparent);

		--color-blueprint-border: #8ec5ff;
		--color-blueprint-border-50: color-mix(in srgb, var(--color-blueprint-border) 50%, transparent);
		--color-blueprint-border-30: color-mix(in srgb, var(--color-blueprint-border) 30%, transparent);
		--color-blueprint-border-20: color-mix(in srgb, var(--color-blueprint-border) 20%, transparent);

		--color-text: #bedbff;
		--color-text-2: var(--color-blueprint-border);

		--spacing: 0.25rem;
		--spacing-2: calc(var(--spacing) * 2);
		--spacing-4: calc(var(--spacing) * 4);
		--spacing-6: calc(var(--spacing) * 6);
		--spacing-8: calc(var(--spacing) * 8);
		--spacing-12: calc(var(--spacing) * 12);
	}
	main {
		min-height: 100vh;
		--bg-size: 100px;
		background-color: var(--color-blueprint-base);
		background-image: 
		/* main grid */
		linear-gradient(var(--color-blueprint-grid) 4px, transparent 1px), 
		linear-gradient(90deg, var(--color-blueprint-grid) 4px, transparent 1px),
		/* sub-grid */
		linear-gradient(transparent calc(50% - 1px), var(--color-blueprint-grid) calc(50% - 1px) calc(50% + 1px), transparent calc(50% + 1px)),
		linear-gradient(90deg, transparent calc(50% - 1px), var(--color-blueprint-grid) calc(50% - 1px) calc(50% + 1px), transparent calc(50% + 1px));
		background-size: var(--bg-size) var(--bg-size);

		color: var(--color-text);

		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
	}
	:global(.box) {
		border: 1px solid var(--color-blueprint-border-30);
		padding: var(--spacing-6);
	}
	:global(.rounded) {
		border-radius: var(--spacing);
	}
	:global(.center-center) {
		display: grid;
		place-items: center;
	}

	:global(.box.bg) {
		background-color: var(--color-blueprint-box-10);
	}
	:global(.box.bg-more),
	:global(.box.bg:hover) {
		background-color: var(--color-blueprint-box-20);
	}
	:global(.box.bg-more:hover) {
		background-color: var(--color-blueprint-box-30);
	}

	:global(.lucide-icon) {
		width: 1em;
		height: 1em;
		display: inline-block;
	}
</style>