<script lang="ts">
    import type { RTGame } from "../../types";

    let { games }: { games: RTGame[] } = $props();

    let filteredGames: RTGame[] = $derived(games.filter(filter));

    function filter(game: RTGame): boolean {
        return true;
    }
</script>

<div class="games">
    {#each filteredGames as game}
        <div class="game">
            {game.name}
        </div>
    {/each}
</div>
