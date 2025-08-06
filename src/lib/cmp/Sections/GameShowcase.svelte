<script>
    import { shuffle } from "$lib";
    import { games } from "$lib/data/games";
    import Game from "../Game.svelte";

    shuffle(games);
</script>

<section id="game-showcase">
    <h2>Featured Games</h2>
    <div class="game-list">
        {#each games as game}
            <Game {game} />
        {/each}
    </div>
</section>

<style>
    #game-showcase {
        margin: var(--spacing-12) 0;
    }
    .game-list {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: var(--spacing-6);
        gap: var(--spacing-2);
    }
    h2 {
        margin-bottom: var(--spacing-12);
    }
</style>
