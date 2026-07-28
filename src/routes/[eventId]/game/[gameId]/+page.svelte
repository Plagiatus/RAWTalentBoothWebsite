<script lang="ts">
    import { universities } from "$lib/data/hardcoded.js";
    import { STATIC_FILE_PATH } from "$lib/utils.js";
    import usk12 from "$lib/assets/usk/12j.png";
    import usk18 from "$lib/assets/usk/18j.png";
    import youtube from "$lib/assets/logos/yt_icon.png";

    let { data } = $props();
    let game = $derived(data.game);
    const firstGameLink = findFirstGameLink();
    const university = universities.find((uni) => uni.id == game.university);
    // svelte-ignore state_referenced_locally
    const uskImg = game.ageRating == "12" ? usk12 : usk18;

    function findFirstGameLink(): string {
        if (!game.links) return "";
        for (let link of game.links) {
            if (getLinkStore(link)) return link;
        }
        return "";
    }

    function getLinkClasses(link: string): string[] {
        let store: string = getLinkStore(link);
        if (store) {
            return [store, "store"];
        }
        if (link.startsWith("https://linktr.ee")) return ["linktree"];
        if (
            link.startsWith("https://youtube.com") ||
            link.startsWith("https://youtu.be/")
        )
            return ["youtube"];
        if (link.startsWith("https://instagram.com")) return ["instagram"];
        return ["website"];
    }

    function getLinkStore(link: string): string {
        if (link.startsWith("https://store.steampowered.com/")) return "steam";
        if (link.match(/^https:\/\/[a-zA-Z0-9_-]+\.itch\.io\//)) return "itch";
        if (link.startsWith("https://play.google.com/")) return "google";
        if (link.startsWith("https://apps.apple.com")) return "apple";
        return "";
    }
</script>

<section class="container">
    <div id="game">
        <div class="game-section" style="grid-area: info-1; order: 0;">
            <h1 class="game-title">{game.name}</h1>
            <div class="game-img-wrapper">
                <img
                    src={STATIC_FILE_PATH + game.images.cover}
                    alt={game.name + " cover art"}
                />
                {#if game.ageRating}
                    <img src={uskImg} alt="USK 12" class="usk-img" />
                {/if}
            </div>
            {#if game.trailer}
                <a
                    class="trailer"
                    href={game.trailer}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Watch Trailer on YouTube
                    <img src={youtube} alt="" class="yt-icon" />
                </a>
            {/if}

            <p class="description">{game.shortDescription}</p>

            {#if game.aiUsed}
                <div id="ai-disclosure">
                    Generative AI was used in the creation of this game.
                </div>
            {/if}
        </div>
        <div class="game-section" style="grid-area: info-2; order: 1;">
            <div class="grid">
                {#if game.tags && game.tags.length > 0}
                    <span>Tags</span>
                    <div id="tags">
                        {#each game.tags as tag}
                            <span class="tag">{tag}</span>
                        {/each}
                    </div>
                {/if}
                {#if game.teamName}
                    <span>Team Name</span>
                    <span>{game.teamName}</span>
                {/if}
                {#if game.teamMembers}
                    <span>Team Members</span>
                    <span>{game.teamMembers}</span>
                {/if}
            </div>
        </div>
        <div class="game-section" style="grid-area: info-3; order: 3;">
            <div class="grid">
                {#if university}
                    <span>University</span>
                    <a href={university.url} target="_blank"
                        >{university.name}</a
                    >
                {/if}
                {#if game.gameEngine}
                    <span>Made With</span>
                    <span>{game.gameEngine}</span>
                {/if}
                {#if game.links}
                    <span>Links</span>
                    <div id="links">
                        {#each game.links as link}
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={link}
                                class={[...getLinkClasses(link), "link-button"]}
                            >
                                Icon
                            </a>
                        {/each}
                    </div>
                {/if}
            </div>
        </div>

        {#if firstGameLink}
            <div style="grid-area: play-now; order: 2;" class="play-now">
                <a
                    href={firstGameLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    class={[...getLinkClasses(firstGameLink), "play-button"]}
                    >Play Now</a
                >
            </div>
        {/if}
    </div>
</section>

<section class="container">
    <a href={"/" + game.event + "/"} id="see-all"
        >See all games from this event</a
    >
</section>

<style>
    #game {
        display: grid;
        grid-template-areas:
            "info-1 info-2"
            "info-1 play-now"
            "info-1 info-3";
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 1fr auto 1fr;
        gap: 1em;
        color: var(--color-text-white);
    }
    .game-title {
        text-transform: uppercase;
        color: var(--color-text-highlight);
        font-family: var(--font-display);
    }
    .game-section {
        padding: 1em;
        background-color: var(--color-background);
        border: 1px solid var(--color-blueprint-grid-strong);
    }
    .grid {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 1em;
    }
    .grid > *:nth-child(odd) {
        color: var(--color-text-muted);
    }
    .span-grid {
        grid-column-end: span 2;
    }

    #tags,
    #links {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
    }

    .game-img-wrapper {
        position: relative;
        margin: 2em 0;
    }
    .trailer {
        margin-bottom: 2em;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .trailer > .yt-icon {
        height: 3em;
    }
    .usk-img {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 4em;
    }

    #ai-disclosure {
        text-align: right;
        color: var(--color-text-subtle);
    }

    #see-all {
        padding: 1em;
        display: block;
        text-align: center;
        background-color: var(--color-background-higher);
        color: var(--color-text-white);
    }

    a {
        color: inherit;
        color: var(--color-text-highlight);
        text-decoration: none;
    }

    #see-all,
    .play-button {
        background-color: var(--highlight);
        color: var(--color-text-white);
        display: block;
        padding: 1em;
        text-align: center;
    }

    section {
        margin-top: 4rem;
    }

    @media screen and (max-width: 1024px) {
        #game {
            display: flex;
            flex-direction: column;
        }
    }
    @media screen and (max-width: 628px) {
        .usk-img {
            height: 2.5em;
        }
    }
</style>
