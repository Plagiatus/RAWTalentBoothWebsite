<script lang="ts">
    import { universities } from "$lib/data/hardcoded";
    import type { RTGame } from "$lib/types";
    import { STATIC_FILE_PATH } from "$lib/utils";

    let { game, maxTags = Infinity }: { game: RTGame; maxTags?: number } =
        $props();
    let uni = $derived(universities.find((uni) => game.university == uni.id));
</script>

<a href={"/" + game.event + "/game/" + game.id} class="game">
    <img
        src={STATIC_FILE_PATH + game.images.capsule}
        alt={game.name + " image"}
        class="game-capsule"
    />
    <div class="game-info">
        <span class="game-name">{game.name}</span>
        {#if uni}
            <span class="game-uni">{uni.name}</span>
        {/if}

        {#if maxTags > 0}
            <div class="game-tags">
                {#each game.tags as tag, i}
                    {#if i < maxTags}
                        <span class="game-tag">#{tag}</span>
                    {/if}
                {/each}
                {#if maxTags < game.tags.length}
                    <span class="game-tag">...</span>
                {/if}
            </div>
        {/if}
    </div>
</a>

<style>
    .game {
        border: 1px solid var(--color-bluepint-grid-strong);
        flex-shrink: 0;
        flex-grow: 0;
        flex-basis: 320px;
        background-color: var(--color-background-higher);
        max-width: 100vw;
    }
    img.game-capsule {
        aspect-ratio: 4 / 3;
        max-width: 100%;
    }
    .game-info {
        padding: 1em;
    }
    .game-info > span {
        display: block;
    }
    .game-name {
        font-size: 1.25rem;
        color: var(--highlight);
        font-family: var(--font-display);
        margin-bottom: 0.25rem;
    }
    .game-uni {
        color: var(--color-text-white);
    }
    .game-tags {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.2em 0.5em;
        margin: 0.25rem 0;
    }
    
    .game-tag {
        font-size: smaller;
        color: var(--color-text-muted);
        background-color: var(--color-background);
        padding: 0 0.5em;
    }

    a {
        text-decoration: none;
        color: var(--text-color);
    }
</style>
