<script lang="ts">
    import logo from "$lib/assets/logos/RAWTalentLogo.svg";
    let y: number = 0;

</script>

<svelte:window bind:scrollY={y} />

<header class:scrolled={y > 60}>
    <nav class="header-nav">
        <a href="/">
            <img src={logo} alt="RAW Talent" class="header-img" />
        </a>
        <ul class="nav-links">
            <li><a href="/#about">About</a></li>
            <li><a href="/#partners">Partners</a></li>
        </ul>
    </nav>
</header>

<style>
    header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        padding: 1.25rem 2rem;
        transition: background-color 0.5s, border 0.5s, backdrop-filter 0.5s;
        border: 0px solid transparent;
        backdrop-filter: blur(0);
    }
    header.scrolled {
        background-color: color-mix(
            in srgb,
            var(--color-blueprint-base) 80%,
            transparent
        );
        backdrop-filter: blur(16px);
        border-bottom: 1px solid var(--color-blueprint-grid);
    }
    .header-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .header-img {
        max-height: 2rem;
    }

    .nav-links {
        display: flex;
        align-items: center;
        list-style: none;
        gap: 0.5rem;
        text-transform: uppercase;
        padding: 0;
    }

    .nav-links a {
        text-decoration: none;
        font-family: var(--font-display);
        color: var(--color-text-muted);
        transition: color 0.2s;
        font-size: 0.8rem;
        letter-spacing: 0.15rem;
        padding: 0.1em 1rem;
    }
    .nav-links a:hover {
        color: var(--color-text-white);
    }
</style>
