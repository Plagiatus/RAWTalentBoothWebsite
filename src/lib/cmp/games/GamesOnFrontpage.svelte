<script lang="ts">
    import type { RTEvent, RTGame } from "$lib/types";
    import { shuffle } from "$lib/utils";

    let { games = [], event }: { games: RTGame[], event: RTEvent } = $props();
    let gamesToDisplay: { tag: string; games: RTGame[] }[] = $derived(chooseRandomGames(games));

    function chooseRandomGames(games: RTGame[]) {
        let returnGames: { tag: string; games: RTGame[] }[] = [];
        let tags: { [tag: string]: RTGame[] } = {};
        for (let game of games) {
            for (let tag of game.tags) {
                if (!tags[tag]) {
                    tags[tag] = [];
                }
                tags[tag].push(game);
            }
        }
        let allTags: string[] = Object.keys(tags);
        shuffle(allTags);
        allTags.length = Math.min(3, allTags.length);

        for (let tag of allTags) {
            let games: RTGame[] = tags[tag];
            shuffle(games);
            games.length = Math.min(3, games.length);
            returnGames.push({ tag, games });
        }

        console.log(returnGames);
        return returnGames;
    }
</script>

<div id="gamesOnFrontpage">
    {#each gamesToDisplay as games}
        <span class="game-section-tag">#{games.tag}</span>
        <div class="game-section-games">
            {#each games.games as game}
            {$inspect(game.name), $inspect(game.images.capsule)}
            <a href={`/${event.id}/game/${game.id}`} class="game-section-game">
                    <img
                        src={`https://static.rawtalentbooth.com/${game.images.capsule}`}
                        alt={game.name + " image"}
                        class="game-section-game-capsule"
                    />
                    <span class="game-section-game-name">{game.name}</span>
                </a>
            {/each}
            <a class="game-section-game-see-more" href={`/${event.id}?tag=${games.tag}`}>See more...</a>
        </div>
    {/each}
    <a href={`/${event.id}`}>See all...</a>
</div>

<style>
    .game-section-games {
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
    }

    a {
        text-decoration: none;
        color: var(--text-color);
    }
    .game-section-game,
    .game-section-game-see-more {
        padding: 1em;
        margin: 1em;
        border: 1px solid white;
        flex-shrink: 0;
        flex-basis: calc(400px + 2em);
    }
    img.game-section-game-capsule {
        width: 400px;
        height: 300px;
    }
</style>