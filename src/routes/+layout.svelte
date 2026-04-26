<script lang="ts">
	import favicon from "$lib/assets/favicon.png";
	import metaPreview from "$lib/assets/meta_preview.png";
	import Footer from "$lib/cmp/Footer.svelte";
	import Header from "$lib/cmp/Header.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>RAW Talent @ gamescom 2025</title>

	<!-- Primary Meta Tags -->
	<meta name="title" content="RAW Talent @ gamescom 2026" />
	<meta
		name="description"
		content="RAW Talent brings together >200 students from 18 universities to showcase the talents of the next generation of game devs at gamescom 2026."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://rawtalentbooth.com/" />
	<meta property="og:title" content="RAW Talent @ gamescom 2025" />
	<meta
		property="og:description"
		content="RAW Talent brings together >200 students from 18 universities to showcase the talents of the next generation of game devs at gamescom 2026."
	/>
	<meta property="og:image" content={metaPreview} />

	<!-- X (Twitter) -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://rawtalentbooth.com/" />
	<meta property="twitter:title" content="RAW Talent @ gamescom 2026" />
	<meta
		property="twitter:description"
		content="RAW Talent brings together >200 students from 18 universities to showcase the talents of the next generation of game devs at gamescom 2026."
	/>
	<meta property="twitter:image" content={metaPreview} />

	<!-- Meta Tags Generated with https://metatags.io -->
</svelte:head>

<Header />

<main>
	{@render children?.()}
</main>

<Footer />

<style>
	@font-face {
		font-family: "Oswald";
		src:
			url("/fonts/Oswald.woff2") format("woff2"),
			url("/fonts/Oswald.ttf") format("woff"),
			url("/fonts/Oswald.ttf") format("ttf");
	}
	@font-face {
		font-family: "DM Sans";
		src:
			url("/fonts/DMSans.woff2") format("woff2"),
			url("/fonts/DMSans.woff") format("woff"),
			url("/fonts/DMSans.ttf") format("ttf");
	}

	:root {
		--color-blueprint-base: rgb(5, 13, 24);
		--color-blueprint-grid: rgba(100, 160, 255, 0.07);
		--color-blueprint-grid-strong: rgba(100, 160, 255, 0.12);

		--color-text-white: #e8f0fc;
		--color-text-muted: rgba(220, 232, 255, 0.5);
		--color-text-subtle: rgba(220, 232, 255, 0.22);

		--font-body: "DM Sans", sans-serif;
		--font-display: "Oswald", sans-serif;

		--highlight: #3cb8ff;
		--color-text-highlight: var(--highlight);

		--color-background: #081020;
		--color-background-higher: #0d1a2e;

		--max: 1280px;
		scroll-behavior: smooth;
	}
	:global(body) {
		font-family: var(--font-body);
		background-color: var(--color-blueprint-base);
		color: var(--color-text-white);
	}
	:global(body::before) {
		content: "";
		position: fixed;
		inset: 0;
		background: linear-gradient(
				var(--color-blueprint-grid) 1px,
				transparent 1px
			),
			linear-gradient(
				90deg,
				var(--color-blueprint-grid) 1px,
				transparent 1px
			),
			linear-gradient(
				var(--color-blueprint-grid-strong) 1px,
				transparent 1px
			),
			linear-gradient(
				90deg,
				var(--color-blueprint-grid-strong) 1px,
				transparent 1px
			);
		background-size:
			30px 30px,
			30px 30px,
			150px 150px,
			150px 150px;
		z-index: -1;
	}
	main {
		padding-bottom: var(--spacing-12);
		min-height: 100vh;
	}
	:global(.container) {
		width: min(var(--max), calc(100vw - 4rem));
		margin: 0 auto;
		padding: 0 2rem;
	}
	:global(.highlight) {
		color: var(--color-text-highlight) !important;
	}
    @media screen and (max-width: 628px) {
        :global(.container) {
            width: unset;
			padding: 0 1.5rem;
        }
    }
</style>
