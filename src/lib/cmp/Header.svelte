<script lang="ts">
    import { page } from "$app/state";
    import logo from "$lib/assets/logos/RAWTalentLogo.svg";
    let y: number = $state(0);
    let archive: number = $derived(parseInt(page.route.id?.substring(1) ?? ""));
</script>

<svelte:window bind:scrollY={y} />

<header class:unscrolled={y < 60}>
    <nav class="header-nav">
        <a href="/">
            <img src={logo} alt="RAW Talent" class="header-img" />
            {#if archive}
                {archive}
            {/if}
        </a>
        <ul class="nav-links">
            <li><a href="/#partners">Partners</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/2025">2025</a></li>
        </ul>
    </nav>
    {#if archive}
        <div id="notice">You're browsing an archive of a previous year.</div>
    {/if}
</header>

<style>
    header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        padding: 1.25rem 2rem;
        transition:
            background-color 0.5s,
            border 0.5s,
            backdrop-filter 0.5s;
        background-color: color-mix(
            in srgb,
            var(--color-blueprint-base) 80%,
            transparent
        );
        backdrop-filter: blur(16px);
        border-bottom: 1px solid var(--color-blueprint-grid);
    }
    header.unscrolled {
        background-color: transparent;
        border: 0px solid transparent;
        backdrop-filter: blur(0);
    }
    .header-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .header-img {
        max-height: 2rem;
        display: inline-block;
    }

    .nav-links {
        display: flex;
        align-items: center;
        list-style: none;
        gap: 0.5rem;
        text-transform: uppercase;
        padding: 0;
    }

    header.unscrolled .nav-links a {
        color: var(--color-text-white);
        background-color: var(--color-background-higher);
    }
    a {
        text-decoration: none;
        font-family: var(--font-display);
        color: var(--color-text-muted);
        transition: color 0.2s, background-color 0.2s;
        font-size: 0.8rem;
        letter-spacing: 0.15rem;
        padding: 0.1em 1rem;
    }
    .nav-links a:hover {
        color: var(--color-text-white);
    }

    #notice {
        position: absolute;
        bottom: -3rem;
        height: 3rem;
        background-color: var(--highlight);
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
    }
    header:not(.unscrolled) #notice {
        transition: opacity 2s;
        opacity: 1;
    }
</style>
