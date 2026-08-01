<script lang="ts">
    import type { RTEvent, RTGame } from "$lib/types";
    import { shuffle } from "$lib/utils";
    import { ArrowRight } from "@lucide/svelte";
    import GameCapsule from "./GameCapsule.svelte";

    let { games = [], event }: { games: RTGame[]; event: RTEvent } = $props();
    let gamesToDisplay: { tag: string; games: RTGame[] }[] = $state([]);

    $effect(() => {
        chooseRandomGames(games);
    });

    const AMOUNT_OF_GAMES_TO_DISPLAY: number = 3;

    function chooseRandomGames(games: RTGame[]) {
        let returnGames: { tag: string; games: RTGame[] }[] = [];
        let tags: { [tag: string]: RTGame[] } = {};
        for (let game of games) {
            shuffle(game.tags);
            for (let tag of game.tags) {
                if (!tags[tag]) {
                    tags[tag] = [];
                }
                tags[tag].push(game);
            }
        }
        let allTags: string[] = Object.keys(tags).filter(
            (tag) => tags[tag].length >= AMOUNT_OF_GAMES_TO_DISPLAY,
        );
        shuffle(allTags);
        allTags.length = Math.min(AMOUNT_OF_GAMES_TO_DISPLAY, allTags.length);

        for (let tag of allTags) {
            let games: RTGame[] = tags[tag];
            shuffle(games);
            games.length = Math.min(AMOUNT_OF_GAMES_TO_DISPLAY, games.length);
            returnGames.push({ tag, games });
        }

        gamesToDisplay = returnGames;
        return returnGames;
    }

    let overflowChecks: { [key: string]: HTMLDivElement } = $state({});
</script>

<div id="gamesOnFrontpage">
    {#each gamesToDisplay as games}
        <div class="game-section">
            <h3 class="game-section-tag">#{games.tag}</h3>
            <div
                class="game-section-games"
                bind:this={overflowChecks[games.tag]}
            >
                {#each games.games as game}
                    <GameCapsule {game} maxTags={3} />
                {/each}
                <a class="see-more" href={`/${event.id}?tag=${games.tag}`}
                    >See more <ArrowRight size="1.5em" />
                </a>
            </div>
        </div>
    {/each}
    <a href={`/${event.id}`} id="see-all">See all {games.length} games</a>
</div>

<style>
    .game-section-games {
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
        gap: 1em;
        scrollbar-color: var(--highlight);
    }

    .game-section {
        margin: 3rem 0;
    }

    .see-more {
        font-family: var(--font-display);
        text-transform: uppercase;
        color: var(--highlight);
        font-weight: bold;
        font-size: 1.5em;
        display: flex;
        place-items: center center;
        background: linear-gradient(
            90deg,
            var(--color-background-higher) 10%,
            transparent 100%
        );
        padding: 1em;
        min-width: 200px;
    }
    #see-all {
        font-family: var(--font-display);
        background-color: var(--highlight);
        color: var(--color-text-on-highlight);
        padding: 1em;
        display: block;
        text-align: center;
        text-transform: uppercase;
    }
    a {
        text-decoration: none;
    }
    h3 {
        font-size: 2rem;
    }
</style>
