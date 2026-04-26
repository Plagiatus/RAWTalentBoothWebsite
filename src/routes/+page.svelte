<script lang="ts">
    import logo from "$lib/assets/logos/RAWTalentLogo.svg";
    import dgsw from "$lib/assets/logos/dgsw_logo.svg";
    import mfgbw from "$lib/assets/logos/mfgbw_logo.svg";
    import fs from "$lib/assets/logos/fs_logo.png";

    import hdm from "$lib/assets/logos/unis/hdm_stuttgart.svg";
    import hda from "$lib/assets/logos/unis/hs_darmstadt.svg";
    import hfu from "$lib/assets/logos/unis/hs_furtwangen.svg";
    import hsmw from "$lib/assets/logos/unis/hs_mittweida.svg";
    import hsnu from "$lib/assets/logos/unis/hs_neu_ulm.png";
    import htw from "$lib/assets/logos/unis/htw_berlin.svg";
    import tum from "$lib/assets/logos/unis/tu_münchen.svg";
    import uba from "$lib/assets/logos/unis/uni_bayreuth.svg";
    import unsi from "$lib/assets/logos/unis/uni_siegen.svg";
    import ut from "$lib/assets/logos/unis/uni_tuebingen.svg";
    import tug from "$lib/assets/logos/unis/tu_graz.svg";

</script>

<section id="hero" class="hero">
    <div class="container">
        <img src={logo} alt="RAW Talent" class="hero-img" />
        <p class="hero-sub">
            <span>Connecting Students, Universities,</span>
            <span>and the Global Games Industry</span>
            <span><span class="highlight">at Gamescom</span>.</span>
        </p>
        <div class="hero-highlights">
            <div class="hero-highlight">
                <span class="hero-highlight-info">Universities</span>
                <span class="hero-highlight-value highlight">18</span>
            </div>
            <div class="hero-highlight">
                <span class="hero-highlight-info">Games</span>
                <span class="hero-highlight-value">60+</span>
            </div>
            <div class="hero-highlight">
                <span class="hero-highlight-info">Booth</span>
                <span class="hero-highlight-value">80 m²</span>
            </div>
            <div class="hero-highlight">
                <span class="hero-highlight-info">Dates</span>
                <span class="hero-highlight-value">Aug 26-30</span>
            </div>
        </div>
    </div>
</section>

<section id="partners" class="partners">
    <div class="container">
        <span class="overline">
            Raw Talent is not possible without our partners & sponsors
        </span>
        <h2>
            Our <span class="highlight">sponsors</span> and partner
            <span class="highlight">universities</span>
        </h2>
        <div style="margin-top: 5rem;"></div>
        <span class="afterline">Organized by</span>
        <div class="partner-wrapper">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.spielwissenschaft.de/"
                class="partner"
            >
                <img class="partner-img" src={dgsw} alt="DGSW Logo" />
                <span class="partner-name"
                    >Deutsche Gesellschaft für Spielwissenschaft</span
                >
            </a>
        </div>
        <span class="afterline">Institutional Sponsors</span>
        <div class="partner-wrapper">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.mfg.de/"
                class="partner"
            >
                <img class="partner-img" src={mfgbw} alt="MFG BW Logo" />
                <span class="partner-name"
                    >MFG Medien- und Filmgesellschaft Baden-Württemberg</span
                >
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.filmstiftung.de"
                class="partner"
            >
                <img class="partner-img" src={fs} alt="FS Logo" />
                <span class="partner-name">Film- und Medienstiftung NRW</span>
            </a>
        </div>
        <span class="afterline">Participating Universities</span>
        <div class="partner-wrapper">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://hdm-stuttgart.de/"
                class="partner"
            >
                <img class="partner-img" src={hdm} alt="Hochschule der Medien Stuttgart" />
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://h-da.de/"
                class="partner"
            >
                <img class="partner-img" src={hda} alt="Hochschule Darmstadt" />
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://hs-furtwangen.de"
                class="partner"
            >
                <img class="partner-img" src={hfu} alt="Hochschule Furtwangen" />
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.hs-mittweida.de/"
                class="partner"
            >
                <img class="partner-img" src={hsmw} alt="Hochschule Mittweida" />
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.hnu.de/"
                class="partner"
            >
                <img class="partner-img" src={hsnu} alt="Hochschule Neu-Ulm" />
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.htw-berlin.de/"
                class="partner"
            >
                <img class="partner-img" src={htw} alt="HTW Berlin" />
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tum.de/"
                class="partner"
            >
                <img class="partner-img" src={tum} alt="TU München" />
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.uni-bayreuth.de/"
                class="partner"
            >
                <img class="partner-img" src={uba} alt="Uni Bayreuth" />
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.uni-siegen.de/"
                class="partner"
            >
                <img class="partner-img" src={unsi} alt="Uni Siegen" />
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://uni-tuebingen.de/"
                class="partner"
            >
                <img class="partner-img" src={ut} alt="Uni Tübingen" />
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tugraz.at"
                class="partner"
            >
                <img class="partner-img" src={tug} alt="TU Graz" />
            </a>
        </div>
    </div>
</section>

<section id="about" class="about">
    <div class="container split">
        <div>
            <span class="overline">About RAW Talent</span>
            <h2>What is <span class="highlight">RAW Talent</span>?</h2>
            <p>
                RAW Talent is an innovative, cross-university format designed to
                allow students to gain real world experience exhibiting their
                games at an event like gamescom. Located next to the Indie Arena
                Booth in Hall 10.2, students have the opportunity to showcase
                their games to a wide audience.
            </p>
        </div>
        <div>
            <span class="overline">A force to be reckoned with</span>
            <h2>Fast <span class="highlight">Growth</span></h2>
            <p>
                In just three years since its inception, RAW Talent has grown
                remarkably!
            </p>
            <div class="about-highlights">
                <div class="about-highlight">
                    <span class="about-value highlight">3 → 18</span>
                    <span class="about-label">Universities</span>
                </div>
                <div class="about-highlight">
                    <span class="about-value">17 → 60+</span>
                    <span class="about-label">Projects</span>
                </div>
                <div class="about-highlight">
                    <span class="about-value">4 m² → 80 m²</span>
                    <span class="about-label">Booth Size</span>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    #hero {
        min-height: 100vh;
        padding: 5rem 0;
        font-family: var(--font-display);
    }
    #hero::before {
        --width: calc(100vh * 1980 / 900);
        background-image: url("/assets/2025/opener_transparent.png");
        background-position: 0 0;
        background-size: var(--width) 100vh;
        background-repeat: repeat-x;
        animation: scrollbg 30s linear infinite;
        position: relative;
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
    .hero-img {
        width: 100%;
        margin-left: -6.5%;
    }
    .hero-sub {
        margin: 2rem 0;
    }
    .hero-sub > span {
        color: var(--color-text-muted);
        display: block;
        font-size: 1.75rem;
    }
    .hero-highlights {
        display: flex;
    }
    .hero-highlight {
        display: flex;
        flex-direction: column;
        padding: 1rem 1.5rem;
        background-color: var(--color-blueprint-base);
        border: 1px solid var(--color-blueprint-grid);
    }
    .hero-highlight-info {
        color: var(--color-text-muted);
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 0.15rem;
    }
    .hero-highlight-value {
        color: var(--color-text-white);
        font-size: 1.5rem;
        font-weight: bold;
    }

    .partner-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .partner {
        display: block;
        border: 1px solid var(--color-blueprint-grid-strong);
        padding: 2.75rem 2rem;
        background-color: var(--color-background-higher);
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--color-text-muted);
        text-decoration: none;
        font-family: var(--font-display);
        text-transform: uppercase;
    }
    .partner-img {
        height: 5rem;
    }
    .partner-name {
        margin-top: 1rem;
        letter-spacing: 0.1em;
    }

    .about-highlights {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 4rem;
    }
    .about-highlight {
        display: flex;
        flex-direction: column;
        font-family: var(--font-display);
        gap: 0.3em;
    }
    .about-value {
        color: var(--color-text-white);
        font-size: 1.75rem;
        font-weight: 700;
    }
    .about-label {
        text-transform: uppercase;
        color: var(--color-text-muted);
        font-weight: 500;
        letter-spacing: 0.12em;
        font-size: 0.7rem;
    }

    section {
        padding: 8rem 0;
    }
    section:nth-of-type(2n) {
        background-color: var(--color-background);
        border-bottom: 1px solid var(--color-blueprint-grid-strong);
        border-top: 1px solid var(--color-blueprint-grid-strong);
    }
    .overline {
        font-family: var(--font-display);
        font-size: 0.7rem;
        font-weight: 400;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: var(--highlight);
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    .overline::before {
        content: "";
        display: inline-block;
        width: 2rem;
        height: 1px;
        background: var(--highlight);
        flex-shrink: 0;
    }

    h2 {
        font-family: var(--font-display);
        font-size: clamp(2.4rem, 5vw, 4.2rem);
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
    .split {
        display: grid;
        gap: 3rem;
        grid-template-columns: 1fr 1fr;
    }
</style>
