<script lang="ts">
    import logo from "$lib/assets/logos/RAWTalentLogo.svg";
    import mapImage from "$lib/assets/2026/gamescom_2026_Hallenplan.png";

    import GamesOnFrontpage from "$lib/cmp/games/GamesOnFrontpage.svelte";
    import { CalendarDays, MapPin } from "@lucide/svelte";

    let { data } = $props();

    const memoryImports = import.meta.glob(
        "$lib/assets/2026/memories/*.{jpg,JPG,jpeg,png,webp}",
        {
            eager: true,
            query: "?url",
            import: "default",
        },
    );

    const memories = Object.values(memoryImports) as string[];
    let carouselTrack: HTMLElement | null = null;
    function scrollCarousel(direction: number) {
        if (!carouselTrack) return;
        const scrollAmount = carouselTrack.clientWidth / 3;
        carouselTrack.scrollBy({
            left: scrollAmount * direction,
            behavior: "smooth",
        });
    }
</script>

<section id="hero" class="hero">
    <div class="container hero-content">
        <img src={logo} alt="RAW Talent" class="hero-img" />

        <h1 class="hero-title">
            PLAY <span class="highlight">90+</span> INDIE GAMES
        </h1>
        <h2 class="hero-subtitle">MEET TOMORROW'S DEVELOPERS!</h2>

        <div class="hero-highlights">
            <div class="hero-highlight corner-decal">
                <CalendarDays color="var(--highlight)" size="2.5em" />
                <span class="hero-highlight-value">26. - 30.08.26</span>
            </div>
            <div class="hero-highlight corner-decal">
                <MapPin color="var(--highlight)" size="2.5em"/>
                <span class="hero-highlight-value">gamescom<br />hall 10.2</span
                >
            </div>
        </div>

        <div class="hero-about-wrapper">
            <span class="afterline hero-about-line">About Us</span>
            <div class="hero-about-box">
                <p>
                    RAW TALENT offers gamescom visitors a firsthand look at the
                    next generation of game developers. By bringing together 18
                    universities from Germany and other European Countries, the
                    initiative gives 380+ students the opportunity to showcase
                    their unique indie games to a broad audience. At the same
                    time it provides these passionate game developers with their
                    first step into the international games industry.
                </p>
            </div>
        </div>
    </div>
</section>

<section id="games">
    <div class="container">
        <h2>This Year's <span class="highlight">Games</span></h2>
        <span
            >A random selection from the <span class="highlight"
                >{data.games.length} games</span
            > we're exhibiting this year</span
        >
        <GamesOnFrontpage event={data.event} games={data.games} />
    </div>
</section>

<section id="location" class="location">
    <div class="container">
        <span class="afterline hero-about-line">Location</span>

        <h2 class="location-title">
            <span class="highlight">gamescom</span> hall
            <span class="highlight">10.2</span>
            BOOTH <span class="highlight">E-42</span>
        </h2>

        <div class="map-wrapper">
            <img
                src={mapImage}
                alt="gamescom Hall Allocation Map"
                class="map-image"
            />
        </div>
    </div>
</section>

<section id="memories" class="section">
    <div class="container">
        <h2 class="memories-title">
            LAST YEAR'S <span class="highlight">MEMORIES</span>
        </h2>

        <div class="carousel-wrapper">
            <div class="carousel-track" bind:this={carouselTrack}>
                {#each memories as memory, index}
                    <img
                        src={memory}
                        alt={`Memory ${index + 1}`}
                        class="carousel-item"
                    />
                {/each}
            </div>

            <div class="carousel-controls">
                <button
                    class="control-btn"
                    aria-label="Previous"
                    onclick={() => scrollCarousel(-1)}
                >
                    &#10094;
                </button>
                <div class="control-line"></div>
                <button
                    class="control-btn"
                    aria-label="Next"
                    onclick={() => scrollCarousel(1)}
                >
                    &#10095;
                </button>
            </div>
        </div>
    </div>
</section>

<style>
    #hero {
        min-height: 100vh;
        padding: 5rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: -4rem;
        position: relative;
    }
    #hero::before {
        --aspect-ratio: calc(3215 / 900);
        --width: calc(100vh * var(--aspect-ratio));
        background-image: url("/assets/2026/hero.webp");
        background-position: 0 0;
        background-size: var(--width) 100vh;
        background-repeat: repeat-x;
        animation: scrollbg calc(15s * var(--aspect-ratio)) linear infinite;
        content: "";
        inset: 0;
        position: absolute;
        mask-image: linear-gradient(black, transparent);
        z-index: -1;
    }
    @keyframes scrollbg {
        from {
            background-position: 0 0;
        }
        to {
            background-position: calc(-1 * var(--width)) 0;
        }
    }
    .hero-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;
        z-index: 1;
    }
    .hero-img {
        width: 100%;
        max-width: 500px;
        margin-bottom: 2rem;
    }
    .hero-title {
        font-family: var(--font-display);
        font-size: clamp(4rem, 6vw, 7rem);
        margin: 0;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0;
    }
    .hero-subtitle {
        font-family: var(--font-display);
        font-size: clamp(1.2rem, 3vw, 2.2rem);
        margin: 0.25rem 0 3.5rem 0;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-weight: 1000;
        color: var(--color-text-white);
    }
    .hero-highlights {
        display: flex;
        gap: 3rem;
        margin-bottom: 4rem;
    }
    .hero-highlight {
        display: grid;
        grid-template-columns: auto 1fr;
        width: 250px;
        align-items: center;
        justify-content: center;
        text-align: left;
        padding: 1.5rem;
        gap: 1.5rem;
        background-color: color-mix(in srgb, var(--color-background-higher) 90%, transparent 10%) ;
    }

    .hero-highlight-value {
        color: var(--color-text-white);
        font-family: var(--font-body);
        font-size: clamp(1rem, 2vw, 1.25rem);
        font-weight: 500;
        line-height: 1.4;
    }

    section {
        padding: 8rem 0;
    }
    section:nth-of-type(2n) {
        background-color: var(--color-background);
        border-bottom: 1px solid var(--color-blueprint-grid-strong);
        border-top: 1px solid var(--color-blueprint-grid-strong);
    }

    h2 {
        font-family: var(--font-display);
        font-size: clamp(2rem, 5vw, 4.2rem);
        font-weight: 600;
        line-height: 1;
        text-transform: uppercase;
        letter-spacing: 0.02em;
        margin: 1.25rem 0;
    }

    .afterline {
        font-family: var(--font-display);
        font-size: 0.7rem;
        font-weight: 400;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: var(--color-text-muted);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin: 1rem 0;
    }
    .afterline::after {
        content: "";
        display: inline-block;
        height: 1px;
        flex-grow: 1;
        background: var(--color-text-muted);
        flex-shrink: 0;
    }

    .hero-about-wrapper {
        width: min(var(--max), calc(100vw - 4rem));
        margin: 0 auto;
    }
    .hero-about-line {
        color: var(--color-text-white);
        position: relative;
        letter-spacing: 0.25em;
        font-size: 1rem;
        z-index: 2;
    }
    .hero-about-line::before,
    .hero-about-line::after {
        background: var(--color-text-white);
    }
    .hero-about-box {
        background-color: var(--color-background-higher);
        padding: 2.5rem 4rem;
        margin-top: -0.4rem;
        position: relative;
        z-index: 1;
    }
    .hero-about-box p {
        font-family: var(--font-body);
        font-size: 1.1rem;
        line-height: 1.8;
        font-weight: 400;
        margin: 0;
        text-align: center;
    }
    .map-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        width: 100%;
        margin: 0 auto;
    }
    .map-image {
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    .carousel-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .carousel-track {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
    .carousel-track::-webkit-scrollbar {
        display: none;
    }
    .carousel-item {
        flex: 0 0 calc(100% / 3);
        width: calc(100% / 3);
        aspect-ratio: 1 / 1;
        object-fit: cover;
        scroll-snap-align: start;
    }
    .carousel-controls {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 0.5rem;
        gap: 1rem;
    }
    .control-btn {
        background: none;
        border: none;
        color: var(--color-text-white);
        font-size: 1rem;
        cursor: pointer;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        transition: color 0.2s;
    }
    .control-btn:hover {
        color: var(--highlight);
    }

    @media screen and (max-width: 1024px) {
        section {
            padding: 4rem 0;
        }
    }
    @media screen and (max-width: 628px) {
        .hero-highlights {
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            width: 100%;
        }
        .hero-highlight {
            width: 100%;
            max-width: 280px;
            padding: 1rem;
        }
        .hero-about-box {
            padding: 2rem 1.5rem;
        }
        .carousel-item {
            flex: 0 0 100%;
            width: 100%;
        }
    }
</style>
