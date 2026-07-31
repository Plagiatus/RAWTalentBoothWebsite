<script lang="ts">
    import logo from "$lib/assets/logos/RAWTalentLogo.svg";
    import dgsw from "$lib/assets/logos/dgsw_logo.svg";
    import mfgbw from "$lib/assets/logos/mfgbw_logo.svg";
    import fs from "$lib/assets/logos/fs_logo.png";

    import ubav from "$lib/assets/logos/unis/uni_bayreuth_verein.svg";

    import cgl from "$lib/assets/logos/unis/cgl_th_koeln.svg";
    import eth from "$lib/assets/logos/unis/eth_zuerich.svg";
    import fabw from "$lib/assets/logos/unis/fabw.svg";
    import fhms from "$lib/assets/logos/unis/fhms.svg";
    import hdm from "$lib/assets/logos/unis/hdm_stuttgart.svg";
    import hhn from "$lib/assets/logos/unis/hhn_heilbronn.svg";
    import hda from "$lib/assets/logos/unis/hs_darmstadt.svg";
    import hfu from "$lib/assets/logos/unis/hs_furtwangen.svg";
    import hsmw from "$lib/assets/logos/unis/hs_mittweida.svg";
    import hsnu from "$lib/assets/logos/unis/hs_neu_ulm.png";
    import nord from "$lib/assets/logos/unis/nord_uni.svg";
    import tha from "$lib/assets/logos/unis/th_augsburg.svg";
    import tud from "$lib/assets/logos/unis/tu_darmstadt.svg";
    import tum from "$lib/assets/logos/unis/tu_münchen.svg";
    import ru from "$lib/assets/logos/unis/ru.png";
    import uba from "$lib/assets/logos/unis/uni_bayreuth.svg";
    import unsi from "$lib/assets/logos/unis/uni_siegen.svg";
    import ut from "$lib/assets/logos/unis/uni_tuebingen.svg";
    import tug from "$lib/assets/logos/unis/tu_graz.svg";
    import mapImage from "$lib/assets/2026/gamescom_2026_Hallenplan.png";

    import GamesOnFrontpage from "$lib/cmp/games/GamesOnFrontpage.svelte";

    let { data } = $props();

    const memoryImports = import.meta.glob('$lib/assets/2026/memories/*.{jpg,JPG,jpeg,png,webp}', {
        eager: true,
        query: '?url',
        import: 'default'
    });

    const memories = Object.values(memoryImports) as string[];
    let carouselTrack: HTMLElement | null = null;
    function scrollCarousel(direction: number) {
        if (!carouselTrack) return;
        const scrollAmount = carouselTrack.clientWidth / 3;
        carouselTrack.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
    }
</script>

<section id="hero" class="hero">
    <div class="container hero-content">
        <img src={logo} alt="RAW Talent" class="hero-img" />

        <h1 class="hero-title">
            PLAY <span class="highlight">80+</span> INDIE GAMES
        </h1>
        <h2 class="hero-subtitle">
            MEET TOMORROW’S DEVELOPERS!
        </h2>

        <div class="hero-highlights">
            <div class="hero-highlight">
                <span class="hero-highlight-value">26. - 30.08.26</span>
            </div>
            <div class="hero-highlight">
                <span class="hero-highlight-value">GAMESCOM<br>HALL 10.2</span>
            </div>
        </div>

        <div class="hero-about-wrapper">
            <span class="afterline hero-about-line">About Us</span>
            <div class="hero-about-box">
                <p>
                    RAW TALENT offers Gamescom visitors a firsthand look at the next generation of game developers. By bringing together 18 universities from Germany and Austria, the initiative gives 160 students the opportunity to showcase their unique indie games to a broad audience. At the same time,it provides these passionate game developers with their first step into the international games industry.
                </p>
            </div>
        </div>
    </div>
</section>

<section id="games">
    <div class="container">
        <h2>This Years <span class="highlight">Games</span></h2>
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
            <span class="highlight">GAMESCOM</span> HALL <span class="highlight">10.2</span> BOOTH <span class="highlight">XY</span>
        </h2>
        
        <div class="map-wrapper">
            <img src={mapImage} alt="Gamescom Hall Allocation Map" class="map-image" />
        </div>
    </div>
</section>

<section id="memories" class="section">
    <div class="container">
        <h2 class="memories-title">LAST YEARS <span class="highlight">MEMORIES</span></h2>
        
        <div class="carousel-wrapper">
            <div class="carousel-track" bind:this={carouselTrack}>
                {#each memories as memory, index}
                    <img src={memory} alt={`Memory ${index + 1}`} class="carousel-item" />
                {/each}
            </div>

            <div class="carousel-controls">
                <button class="control-btn" aria-label="Previous" onclick={() => scrollCarousel(-1)}>
                    &#10094;
                </button>
                <div class="control-line"></div>
                <button class="control-btn" aria-label="Next" onclick={() => scrollCarousel(1)}>
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
        --width: calc(100vh * 1980 / 900);
        background-image: url("/assets/2025/opener_transparent.png");
        background-position: 0 0;
        background-size: var(--width) 100vh;
        background-repeat: repeat-x;
        animation: scrollbg 30s linear infinite;
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
        display: flex;
        width: 250px;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 1.5rem 0;
        background-color: var(--color-background-higher);
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
    .hero-about-line{
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
