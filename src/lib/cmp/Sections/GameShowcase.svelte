<script>
    import { games } from "$lib/data/games";
    import Game from "../Game.svelte";

</script>

{#each games as game}
    <Game {game} />
{/each}