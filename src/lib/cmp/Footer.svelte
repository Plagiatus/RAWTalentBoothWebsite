<script>
    import Icon from "$lib/icons/Icon.svelte";
</script>

<footer>
    <div id="footer-left">
        <span><span class="highlight">RAW</span> Talent @ gamescom</span>
        <nav id="social-links">
            <a
                href="https://www.instagram.com/raw_talent_booth/"
                target="_blank"
                rel="noopener noreferrer"><Icon icon="instagram" /></a
            >
            <a
                href="https://www.linkedin.com/company/raw-talent-booth/"
                target="_blank"
                rel="noopener noreferrer"><Icon icon="linkedin" /></a
            >
            <a
                href="https://www.tiktok.com/@raw_talent_booth"
                target="_blank"
                rel="noopener noreferrer"><Icon icon="tiktok" /></a
            >
        </nav>
    </div>
    <nav>
        <a href="/impressum">Imprint</a>
    </nav>
</footer>

<style>
    footer {
        border-top: 1px solid var(--color-blueprint-grid);
        background-color: var(--color-blueprint-base);
        text-align: center;
        padding: 1.25rem 2rem;
        font-family: var(--font-display);
        text-transform: uppercase;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }

    a {
        color: var(--color-text-muted);
        text-decoration: none;
    }
    a:hover {
        color: var(--color-text-white);
    }

    #footer-left,
    #social-links {
        display: flex;
        flex-direction: row;
        gap: 1em;
    }

    @media screen and (max-width: 628px) {
        #footer-left {
            flex-direction: column;
        }
    }
</style>
