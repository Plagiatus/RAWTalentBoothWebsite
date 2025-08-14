<script lang="ts">
	import favicon from "$lib/assets/favicon.png";
	import metaPreview from "$lib/assets/meta_preview.png";
    import Footer from "$lib/cmp/Footer.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>RAW Talent @ gamescom 2025</title>

	<!-- Primary Meta Tags -->
	<meta name="title" content="RAW Talent @ gamescom 2025" />
	<meta
		name="description"
		content="RAW Talent brings together ~160 students from 11 universities to showcase the talents of the next generation of game devs at gamescom 2025."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://rawtalentbooth.com/" />
	<meta property="og:title" content="RAW Talent @ gamescom 2025" />
	<meta
		property="og:description"
		content="RAW Talent brings together ~160 students from 11 universities to showcase the talents of the next generation of game devs at gamescom 2025."
	/>
	<meta
		property="og:image"
		content={metaPreview}
	/>

	<!-- X (Twitter) -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://rawtalentbooth.com/" />
	<meta property="twitter:title" content="RAW Talent @ gamescom 2025" />
	<meta
		property="twitter:description"
		content="RAW Talent brings together ~160 students from 11 universities to showcase the talents of the next generation of game devs at gamescom 2025."
	/>
	<meta
		property="twitter:image"
		content={metaPreview}
	/>

	<!-- Meta Tags Generated with https://metatags.io -->
</svelte:head>

<main>
	{@render children?.()}
</main>

<Footer />

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
	:global(.box.bg-most) {
		background-color: color-mix(in srgb, var(--color-blueprint-box) 70%, transparent);
	}
	:global(.box.bg-most:hover) {
		background-color: color-mix(in srgb, var(--color-blueprint-box) 80%, transparent);
	}

	:global(.lucide-icon) {
		width: 1em;
		height: 1em;
		display: inline-block;
	}

	:global(h2) {
		font-size: 3rem;
		text-transform: uppercase;
		text-align: center;
	}
</style>
