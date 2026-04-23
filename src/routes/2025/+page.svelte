<script>
    import Landing from "$lib/cmp/Sections/2025/Landing.svelte";
    import GalleryPage from "$lib/cmp/Sections/GalleryPage.svelte";
    import Booth from "$lib/cmp/Sections/Booth.svelte";
    import GameShowcase from "$lib/cmp/Sections/GameShowcase.svelte";

</script>
<main>
	<Landing />
	<GameShowcase />
	<Booth />
	<GalleryPage />
</main>


<style>
	:root {
		--color-blueprint-base: #001c3a;
		--color-blueprint-grid: #0b2a48;
		--color-blueprint-box: #1c398e;
		--color-blueprint-box-30: color-mix(in srgb, var(--color-blueprint-box) 30%, transparent);
		--color-blueprint-box-20: color-mix(in srgb, var(--color-blueprint-box) 20%, transparent);
		--color-blueprint-box-10: color-mix(in srgb, var(--color-blueprint-box) 10%, transparent);

		--color-blueprint-border: #8ec5ff;
		--color-blueprint-border-50: color-mix(
			in srgb,
			var(--color-blueprint-border) 50%,
			transparent
		);
		--color-blueprint-border-30: color-mix(
			in srgb,
			var(--color-blueprint-border) 30%,
			transparent
		);
		--color-blueprint-border-20: color-mix(
			in srgb,
			var(--color-blueprint-border) 20%,
			transparent
		);

		--color-text: #bedbff;
		--color-text-2: var(--color-blueprint-border);

		--spacing: 0.25rem;
		--spacing-2: calc(var(--spacing) * 2);
		--spacing-4: calc(var(--spacing) * 4);
		--spacing-6: calc(var(--spacing) * 6);
		--spacing-8: calc(var(--spacing) * 8);
		--spacing-12: calc(var(--spacing) * 12);

		
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
			"Liberation Mono", "Courier New", monospace;
	}
	main {
		padding-bottom: var(--spacing-12);
		min-height: 100vh;
		--bg-size: 100px;
		background-color: var(--color-blueprint-base);
		--grid: 
		/* main grid */
			linear-gradient(var(--color-blueprint-grid) 4px, transparent 1px),
			linear-gradient(
				90deg,
				var(--color-blueprint-grid) 4px,
				transparent 1px
			),
			/* sub-grid */
				linear-gradient(
					transparent calc(50% - 1px),
					var(--color-blueprint-grid) calc(50% - 1px) calc(50% + 1px),
					transparent calc(50% + 1px)
				),
			linear-gradient(
				90deg,
				transparent calc(50% - 1px),
				var(--color-blueprint-grid) calc(50% - 1px) calc(50% + 1px),
				transparent calc(50% + 1px)
			);
		background-image: var(--grid);
		background-size: var(--bg-size) var(--bg-size);

		color: var(--color-text);

	}
	main :global(.box) {
		border: 1px solid var(--color-blueprint-border-30);
		padding: var(--spacing-6);
	}main 
	:global(.rounded) {
		border-radius: var(--spacing);
	}
	main :global(.center-center) {
		display: grid;
		place-items: center;
	}

	main :global(.box.bg) {
		background-color: var(--color-blueprint-box-10);
	}
	main :global(.box.bg-more),
	main :global(.box.bg:hover) {
		background-color: var(--color-blueprint-box-20);
	}
	main :global(.box.bg-more:hover) {
		background-color: var(--color-blueprint-box-30);
	}
	main :global(.box.bg-most) {
		background-color: color-mix(in srgb, var(--color-blueprint-box) 70%, transparent);
	}
	main :global(.box.bg-most:hover) {
		background-color: color-mix(in srgb, var(--color-blueprint-box) 80%, transparent);
	}

	main :global(.lucide-icon) {
		width: 1em;
		height: 1em;
		display: inline-block;
	}

	main :global(h2) {
		font-size: 3rem;
		text-transform: uppercase;
		text-align: center;
	}
</style>
