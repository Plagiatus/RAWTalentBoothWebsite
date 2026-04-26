<script lang="ts">
    import { page } from "$app/state";
    import logo from "$lib/assets/logos/RAWTalentLogo.svg";
    import { slide } from "svelte/transition";
    let y: number = $state(0);
    // this is a hack, might want to find a better way to do this.
    let archive: number = $derived(parseInt(page.route.id?.substring(1) ?? ""));
    let mobileExpanded: boolean = $state(false);
</script>

<svelte:window bind:scrollY={y} />

<header class:unscrolled={y < 60}>
    <nav class="header-nav desktop">
        <a href="/">
            <img src={logo} alt="RAW Talent" class="header-img" />
            {#if archive}
                {archive}
            {/if}
        </a>
        <ul class="nav-links">
            <li><a href="/#partners">Partners</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/2025" data-sveltekit-preload-data="off">2025</a></li>
        </ul>
    </nav>
    <nav class="header-nav-mobile mobile">
        <input
            type="checkbox"
            name="mobile-nav-toggle"
            id="mobile-nav-toggle"
            hidden
            bind:checked={mobileExpanded}
        />
        <label for="mobile-nav-toggle" id="mobile-toggle-label">
            <img src={logo} alt="RAW Talent" class="header-img-mobile" />
            <div id="burger-menu">
                <span class="a"></span>
                <span class="b"></span>
                <span class="c"></span>
            </div>
        </label>
        <div id="mobile-nav-content">
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
            <ul class="nav-links" onclick={()=>{mobileExpanded = false}}>
                <li><a href="/" transition:slide>Home</a></li>
                <li><a href="/#partners" transition:slide>Partners</a></li>
                <li><a href="/#about" transition:slide>About</a></li>
                <hr class="spacer">
                <li><a href="/2025" data-sveltekit-preload-data="off" transition:slide>2025</a></li>
            </ul>
        </div>
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
    a {
        text-decoration: none;
        font-family: var(--font-display);
        color: var(--color-text-muted);
        transition:
            color 0.2s,
            background-color 0.2s;
        font-size: 0.8rem;
        letter-spacing: 0.15rem;
        padding: 0.1em 1rem;
        cursor: pointer;
    }
    .nav-links a:hover {
        color: var(--color-text-white);
    }

    #notice {
        position: absolute;
        bottom: -2rem;
        height: 2rem;
        background-color: var(--highlight);
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav.mobile {
        display: none;
    }
    #mobile-toggle-label {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header-img-mobile {
        height: 2rem;
    }

    #burger-menu {
        cursor: pointer;
        display: inline-block;
        position: absolute;
        top: 0.5em;
        right: 0.5em;
        z-index: 5;
    }
    #burger-menu span {
        display: block;
        background-color: var(--color-text-white);
        width: 2em;
        height: 0.25em;
        transition:
            transform 0.2s,
            opacity 0.2s;
    }
    .a,
    .b {
        margin-bottom: 0.5em;
    }

    input:checked ~ label #burger-menu span.b {
        transform: translateX(-5em);
        opacity: 0;
    }
    span.a {
        transform-origin: bottom left;
    }
    span.c {
        transform-origin: top left;
    }
    input:checked ~ label #burger-menu span.a {
        transform: rotate(45deg);
    }
    input:checked ~ label #burger-menu span.c {
        transform: rotate(-45deg);
    }
    #mobile-nav-content {
        display: none;
    }
    input:checked ~ #mobile-nav-content {
        display: block;
    }
    hr.spacer {
        width: 20ch;
    }

    @media screen and (min-width: 629px) {
        header.unscrolled .nav-links a {
            color: var(--color-text-white);
            background-color: var(--color-background-higher);
        }
    }
    @media screen and (max-width: 628px) {
        nav.desktop {
            display: none;
        }
        nav.mobile {
            display: block;
        }
        header {
            padding: 0.5rem;
        }
        header.unscrolled {
            background-color: color-mix(
                in srgb,
                var(--color-blueprint-base) 80%,
                transparent
            );
            backdrop-filter: blur(16px);
            border-bottom: 1px solid var(--color-blueprint-grid);
        }
        .nav-links {
            flex-direction: column;
            padding-top: 2rem;
        }
        li {
            width: 100%;
        }
        a {
            display: block;
            padding: 0.2em 1em;
            width: 100%;
            text-align: center;
        }

        /* #mobile-nav-toggle:not(:checked) ~ label .header-img-mobile {
            /* this cuts off everything but the "R" of the logo for the animation * /
            /* this idea was scrapped for now, I thought about using that instead of the burger menu. Maybe someone can make this work. * /
            clip-path: polygon(19% 0, 14.9% 67%, 18.5% 100%, 4% 100%, 4% 0);
        } */
    }
</style>
