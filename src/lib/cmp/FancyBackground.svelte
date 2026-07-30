<script lang="ts">
    import type { RTGame } from "$lib/types";
    import { STATIC_FILE_PATH } from "$lib/utils";

    let {
        games,
        rows = 6,
        columns = 15,
    }: { games: RTGame[]; rows?: number; columns?: number } = $props();
</script>

<div class="fancy-background-container">
    <div class="fancy-background">
        {#each { length: rows } as row, r}
            <div class="fancy-row">
                {#each { length: columns } as col, c}
                    {@const game = games[(r * columns + c) % games.length]}
                    <div
                        style={`background-image: URL(${STATIC_FILE_PATH + game.images.capsule});`}
                        class="image"
                    ></div>
                {/each}
            </div>
        {/each}
    </div>
    <div class="fancy-overlay"></div>
</div>

<style>
    .fancy-background-container {
        perspective: 500px;
        inset: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }

    .fancy-background {
        inset: 0;
        position: absolute;
        background-color: var(--color-background);
        transform-style: preserve-3d;
        transform: rotateX(355deg) rotateY(355deg) rotateZ(5deg);
        animation: move 30s ease-in-out infinite alternate-reverse;
    }
    @keyframes move {
        0% {
            translate: 100% 100px;
        }
        100% {
            translate: 0 0;
        }
    }

    .fancy-row {
        display: flex;
        flex-wrap: nowrap;
        flex-grow: 1;
        width: 100%;
        justify-content: flex-end;
        gap: 20px;
        margin: 10px 0;
        transform: translateX(-100px) translateY(-200px);
    }

    .image {
        min-width: 320px;
        min-height: 240px;
        display: inline-block;
        background-position: center;
        background-size: cover;
        transform-style: preserve-3d;
        transform: rotateX(20deg) rotateY(0deg);
    }

    .fancy-overlay {
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>
