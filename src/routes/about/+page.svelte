<script>
    import candidImage from "$lib/assets/placeholdercandidimage.png";
    import dgsw from "$lib/assets/logos/dgsw_logo.svg";
    
    // Importiere das Array aus deiner Datei
    import { universities } from "$lib/data/hardcoded";
    import { sponsors } from "$lib/data/hardcoded";
    import { vips } from "$lib/data/hardcoded";
</script>

<section class="grid-description container section">
    <img src={candidImage} alt="Candid" class="description-image" />

    <div class="description-text">
        <h2>Description of <span class="highlight">Raw Talent</span>:</h2>
        <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
        </p>
    </div>
</section>
<section class="partner section">
    <div class="container">
        <span class="overline">Raw Talent is not possible without our partners & sponsors</span>
            <span class="afterline">Organizers</span>
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
            <span class="afterline">Sponsors</span>
        <div class="partner-wrapper sponsors">
            {#each sponsors as sponsor}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={sponsor.url}
                    class="partner"
                >
                    <!-- Siehe Hinweis zu den Bildern unten -->
                    <img class="partner-img" src={sponsor.img} alt={`${sponsor.name} Logo`} />
                    <span class="partner-name"
                    >{sponsor.name}</span
                >
                </a>
            {/each}
        </div>
            <span class="afterline">Universities</span>
        <div class="partner-wrapper universities">
            {#each universities as uni}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={uni.url}
                    class="partner"
                >
                    <!-- Siehe Hinweis zu den Bildern unten -->
                    <img class="partner-img" src={uni.img} alt={`${uni.name} Logo`} />
                </a>
            {/each}
        </div>

    </div>
</section>
<section class="container section">
    <h2 class="center"><span class="highlight">Important</span> People:</h2>
    <div class="partner-wrapper sponsors vip">
        {#each vips as vip, index}
            <div class="person-card">
                <div class="card-header">
                    <span>Person</span>
                    <span>// {String(index + 1).padStart(3, '0')}</span>
                </div>
                
                <img src={vip.img} alt={vip.name} class="vip-img" />
                
                <div class="card-details">
                    <p>Name: {vip.name}</p>
                    <p>Position: {vip.position}</p>
                    <p>Status: {vip.status ? 'Active' : 'Inactive'}</p>
                    <p>At Rawtalent: {vip.atRawtalent} {vip.atRawtalent === 1 ? 'Year' : 'Years'}</p>
                </div>
            </div>
        {/each}
    </div>
</section>
<section class="container section">
    <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://rawtalentbooth.com/"
        class="press-kit"
    >
        Press Kit
    </a>
</section>
<section class="container contact-section">
    <h2 class="center">Contact <span class="highlight">Us</span>:</h2>
    
    <div class="partner">
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
</section>

<style>
    .grid-description {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: center;
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
        font-size: clamp(2.0rem, 5vw, 4.2rem);
        font-weight: 600;
        line-height: 1;
        text-transform: uppercase;
        letter-spacing: 0.02em;
        margin: 1.25rem 0 2.0rem 0;
    }
        .overline {
        font-family: var(--font-display);
        font-size: clamp(0.4rem, 1.75vw, 0.7rem);
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
        .afterline {
        font-family: var(--font-display);
        font-size: 0.7rem;
        font-weight: 400;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: var(--color-text-white);
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
        background: var(--color-text-white);
        flex-shrink: 0;
    }
    .partner {
        border: 1px solid var(--color-text-white);
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
    .partner-wrapper {
        display: grid;
        --grid-width: 1;
        grid-template-columns: repeat(var(--grid-width), 1fr);
    }
    .sponsors {
        --grid-width: 3;
    }
    .universities {
        --grid-width: 5;
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
    .center {
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    .vip {
        gap: 6rem;
    }
    .person-card {
        border: 1px solid var(--highlight);
        padding: 2rem;
        display: flex;
        flex-direction: column;
        color: var(--color-text-white);
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
        font-size: 1.25rem;
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
    .press-kit {
        border: 1px solid var(--color-text-white);
        padding: 1rem 1rem;
        background-color: var(--color-background-higher);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--color-text-white);
        text-decoration: none;
        font-family: var(--font-display);
        text-transform: uppercase;
        width: 300px;
        margin: 4rem auto;
    }
    .form-group {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 1.5rem;
    }
    .form-group label {
    color: var(--color-text-white);
    margin-bottom: 0.2rem;
    }
    .form-group input,
    .form-group textarea {
    width: 100%;
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
        margin-top: 1rem;
        font-family: var(--font-display);
        text-transform: uppercase;
    }

    .submit-btn:hover {
        background-color: var(--highlight);
        color: var(--color-background);
    }
    .section {
        margin-bottom: 6rem;
    }
</style>