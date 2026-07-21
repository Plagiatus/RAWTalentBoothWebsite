<script lang="ts">
    import type { RTGame } from "$lib/types";

    let { data } = $props();
    let game = $derived(data.game);
    console.log(game);
</script>

<h1>{game.name}</h1>
