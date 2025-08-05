<!-- <script lang="ts">
    import type { Game } from "$lib/data/games";
    
    import { GraduationCap, Building2 } from "@lucide/svelte";

    const { game }: { game: Game } = $props();
    console.log(game);
</script>

<a class="game" href={game.link}>
    <div class="game-image">
        {$inspect(game.image)}
        <!-- <enhanced:img src="/static/assets/2025/games/spooky_bodies/feature.png?enhanced" alt="" />
        <enhanced:img src="/static/assets/2025/games/spooky_bodies/feature.png?enhanced" alt={game.title} /> - ->
    </div>
    <div class="game-info">
        <h3 class="game-title">{game.title}</h3>
        <div class="icon-grid">
            <div class="icon-grid-icon">
                <Building2 />
            </div>
            <span class="icon-grid-title">Team / Studio</span>
            <span class="icon-grid-content">{game.team}</span>
        </div>
        <div class="icon-grid">
            <div class="icon-grid-icon">
                <GraduationCap />
            </div>
            <span class="icon-grid-title">University</span>
            <span class="icon-grid-content">{game.uni}</span>
        </div>
    </div>
</a>

<style>
    .game {
        text-decoration: none;
        display: block;
    }
</style> -->