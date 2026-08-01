<script>
    import candidImage from "$lib/assets/about_us_candid.jpg";
    import dgsw from "$lib/assets/logos/dgsw_logo.svg";

    // Importiere das Array aus deiner Datei
    import { universities } from "$lib/data/hardcoded";
    import { sponsors } from "$lib/data/hardcoded";
    import { vips } from "$lib/data/hardcoded";
</script>

<section class="grid-description container section">
    <img src={candidImage} alt="Candid" class="description-image" />

    <div class="description-text">
        <h2>What is <span class="highlight">Raw Talent</span>?</h2>
        <p>
            Under the label RAW Talent game development students from various
            European universities come together and exhibit game projects
            created during their studies. Brought to life by Prof. Dr. Greta
            Hoffmann in 2024, RAW Talent gives students a chance to gain a
            foothold in the games industry and build experience while
            simultaneously showcasing the future generation of game makers.
            Since 2024 RAW Talent has grown immensely, increasing from 3 to 18
            universities and from 19 to over 90 projects.
        </p>
    </div>
</section>
<!-- #region partners 
 -->
<section class="partner section">
    <div class="container">
        <span class="afterline" style="--afterline-width: 10%;">Organizers</span
        >
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
        <span class="afterline" style="--afterline-width: 25%;">Sponsors</span>
        <div class="partner-wrapper sponsors">
            {#each sponsors as sponsor}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={sponsor.url}
                    class="partner"
                >
                    <!-- Siehe Hinweis zu den Bildern unten -->
                    <img
                        class="partner-img"
                        src={sponsor.img}
                        alt={`${sponsor.name} Logo`}
                    />
                    <span class="partner-name">{sponsor.name}</span>
                </a>
            {/each}
        </div>
        <span class="afterline" style="--afterline-width: 40%;"
            >Universities</span
        >
        <div class="partner-wrapper universities">
            {#each universities as uni}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={uni.url}
                    class="partner"
                >
                    <img
                        class="partner-img"
                        src={uni.img}
                        alt={`${uni.name} Logo`}
                    />
                </a>
            {/each}
        </div>
    </div>
</section>

<!-- #region Important people 
 -->
<!-- <section class="container section">
    <h2 class="center vip-title">
        <span class="highlight">Important</span> People
    </h2>
    <div class="vip-grid">
        {#each vips as vip, index}
            <div class="person-card">
                <div class="card-header">
                    <span>Person</span>
                    <span>// {vip.roleAtRawtalent}</span>
                </div>

                <img src={vip.img} alt={vip.name} class="vip-img" />

                <div class="card-details">
                    <p>Name: {vip.name}</p>
                    <p>Position: {vip.position}</p>
                    <p>Status: {vip.status ? "Active" : "Inactive"}</p>
                    <p>
                        At Rawtalent: {vip.atRawtalent}
                        {vip.atRawtalent === 1 ? "Year" : "Years"}
                    </p>
                </div>
            </div>
        {/each}
    </div>
</section> -->
<!-- #region presskit 
 -->
<!-- <section class="container section">
    <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://rawtalentbooth.com/"
        class="press-kit"
    >
        Press Kit
    </a>
</section> -->

<!--<section class="container contact-section">
    <h2 class="center contact-title">Contact <span class="highlight">Us</span>:</h2>
    
    <div class="contact-form">
        <form>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="3" required></textarea>
            </div>
            
            <button type="submit" class="submit-btn">Submit</button>
        </form>
    </div>
</section>-->

<style>
    .grid-description {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: center;
        margin-top: 100px;
        margin-bottom: 100px;
    }
    .description-image {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
    .description-text {
        text-align: center;
    }
    h2 {
        font-family: var(--font-display);
        font-size: clamp(2rem, 5vw, 4.2rem);
        font-weight: 600;
        line-height: 1;
        text-transform: uppercase;
        letter-spacing: 0.02em;
        margin: 1.25rem 0 2rem 0;
    }
    .afterline {
        font-family: var(--font-display);
        font-size: 0.85rem;
        font-weight: 400;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: var(--color-text-white);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        position: relative;
        z-index: 2;
    }
    .afterline::before {
        content: "";
        display: inline-block;
        height: 1px;
        width: var(--afterline-width, 3rem);
        background: var(--color-text-white);
        flex-shrink: 0;
    }
    .afterline::after {
        content: "";
        display: inline-block;
        height: 1px;
        flex-grow: 1;
        background: var(--color-text-white);
        flex-shrink: 0;
    }
    .partner {
        padding: 2.75rem 2rem;
        background-color: var(--color-background-higher);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--color-text-muted);
        text-decoration: none;
        font-family: var(--font-display);
        text-transform: uppercase;
    }
    .partner.section {
        margin-bottom: 4vh;
    }
    .partner-wrapper {
        display: grid;
        --grid-width: 1;
        grid-template-columns: repeat(var(--grid-width), 1fr);
        gap: 1px;
        background-color: var(--color-text-white);
        margin-top: -0.5rem;
        position: relative;
        z-index: 1;
    }
    .sponsors {
        --grid-width: 3;
    }
    .universities {
        --grid-width: 5;
    }
    .universities .partner:last-child:nth-child(5n + 1) {
        grid-column: span 5;
    }
    .universities .partner:last-child:nth-child(5n + 2) {
        grid-column: span 4;
    }
    .universities .partner:last-child:nth-child(5n + 3) {
        grid-column: span 3;
    }
    .universities .partner:last-child:nth-child(5n + 4) {
        grid-column: span 2;
    }
    .partner-img {
        max-height: 5rem;
    }
    .partner-name {
        margin-top: 1rem;
        letter-spacing: 0.1em;
        font-size: clamp(0.5rem, 2.5vw, 1rem);
        text-align: center;
    }
    /*
    .center {
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    .person-card {
        border: 1px solid var(--highlight);
        padding: 2rem;
        display: flex;
        flex-direction: column;
        color: var(--color-text-white);
        position: relative;
    }
    .person-card::before,
    .person-card::after {
        content: "";
        position: absolute;
        width: 24px;
        height: 24px;
        z-index: 2;

        background:
            radial-gradient(
                circle,
                var(--color-text-white) 3px,
                transparent 3.5px
            ),
            linear-gradient(var(--color-text-white), var(--color-text-white))
                left center / 7px 2px no-repeat,
            linear-gradient(var(--color-text-white), var(--color-text-white))
                right center / 7px 2px no-repeat,
            linear-gradient(var(--color-text-white), var(--color-text-white))
                center top / 2px 7px no-repeat,
            linear-gradient(var(--color-text-white), var(--color-text-white))
                center bottom / 2px 7px no-repeat;
    }
    .person-card::before {
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
    }

    .person-card::after {
        bottom: 0;
        right: 0;
        transform: translate(50%, 50%);
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
        font-size: 1.25rem;
    }
    .vip-grid {
        display: grid;
        --grid-width: 3;
        grid-template-columns: repeat(var(--grid-width), 1fr);
        column-gap: 3rem;
        row-gap: 7.5vh;
    }
    .vip-title {
        margin-top: 6vh;
        margin-bottom: 6vh;
    }
    .vip-img {
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        margin-bottom: 2rem;
    }
    .card-details p {
        margin: 0 0 0.25rem 0;
        font-size: 1rem;
    }
    */
    /* 
    .press-kit {
        font-family: var(--font-display);
        background-color: var(--highlight);
        color: var(--color-text-on-highlight);
        padding: 1em;
        display: block;
        text-align: center;
        text-transform: uppercase;
        margin: 9vh auto;
    } 
    */
    /*
    .contact-title {
        margin-bottom: 3vh;
    }
    .contact-form {
        width: 74vw;
        max-width: 100%;
        margin: 0 auto;
        border: 1px solid var(--color-text-white);
        background-color: var(--color-background-higher);
        padding-top: 3vh;
        padding-bottom: 5vh;
        display: flex;
        justify-content: center;
    }
    .contact-form form {
        width: 65vw;
        max-width: 90%;
        display: flex;
        flex-direction: column;
    }
    .form-group {
        display: flex;
        width: 100%;
        flex-direction: column;
        margin-bottom: 3vh;
    }
    .form-group:last-of-type {
        margin-bottom: 5vh;
    }
    .form-group label {
        color: var(--color-text-white);
        margin-bottom: 2vh;
    }
    .form-group input {
        width: 100%;
        height: 50px;
        box-sizing: border-box;
    }
    .form-group textarea {
        width: 100%;
        height: 120px;
        box-sizing: border-box;
        resize: vertical;
    }
    form {
        width: 90%;
    }
    .submit-btn {
        background-color: transparent;
        color: var(--color-text-white);
        border: 1px solid var(--color-text-white);
        padding: 0.75rem 2rem;
        font-size: 1.1rem;
        cursor: pointer;
        font-family: var(--font-display);
        text-transform: uppercase;
        align-self: flex-start;
        transition: all 0.2s ease-in-out;
    }

    .submit-btn:hover {
        background-color: var(--highlight);
        color: var(--color-background);
    }
    */
    .section {
        margin-bottom: 6rem;
    }

    /* Mobile Part */

    @media screen and (max-width: 900px) {
        .vip-grid {
            --grid-width: 2;
        }
    }
    @media screen and (max-width: 760px) {
        .grid-description {
            grid-template-columns: 1fr;
        }
        .description-image {
            display: block;
            margin: 0 auto;
            width: 100%;
        }
        .sponsors {
            --grid-width: 2;
        }
        .sponsors .partner:last-child:nth-child(odd) {
            grid-column: 1 / -1;
        }
        .vip-grid {
            --grid-width: 2;
            gap: 0rem;
        }
        .person-card::before,
        .person-card::after {
            display: none;
        }
        .universities {
            --grid-width: 3;
        }
        .universities .partner:last-child:nth-child(3n + 1) {
            grid-column: span 3;
        }
        .universities .partner:last-child:nth-child(3n + 2) {
            grid-column: span 2;
        }
    }
    @media screen and (max-width: 460px) {
        .grid-description {
            grid-template-columns: 1fr;
        }
        .description-image {
            display: block;
            margin: 0 auto;
            width: 100%;
        }
        .sponsors {
            --grid-width: 1;
        }
        .vip-grid {
            --grid-width: 1;
            gap: 2rem;
        }
        .person-card::before,
        .person-card::after {
            display: block;
        }
        .universities {
            --grid-width: 2;
        }
        .universities .partner:last-child:nth-child(odd) {
            grid-column: span 2;
        }
    }
</style>
