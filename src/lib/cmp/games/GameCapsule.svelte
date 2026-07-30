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
    </div>
</a>

<style>
    .game {
        border: 1px solid var(--color-bluepint-grid-strong);
        flex-shrink: 0;
        flex-grow: 0;
        flex-basis: 320px;
        background-color: var(--color-background-higher);
    }
    img.game-capsule {
        width: 320px;
        height: 240px;
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
    }
    .game-uni {
        color: var(--color-text-white);
    }
    .game-tags {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0 1em;
    }

    .game-tag {
        font-size: smaller;
        color: var(--color-text-muted);
    }

    a {
        text-decoration: none;
        color: var(--text-color);
    }
</style>
