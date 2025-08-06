<script lang="ts">
    import type { Game } from "$lib/data/games";

    import { GraduationCap, Building2 } from "@lucide/svelte";

    const { game }: { game: Game } = $props();
</script>

<a
    class="game box rounded"
    href={game.link ? game.link : undefined}
    target="_blank"
>
    <div class="game-image">
        <div
            class="game-image-inner"
            style:background-image={`url(${game.logo ?? ""}), url(${game.image})`}
        ></div>
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
        color: inherit;
        padding: 0;
        transition: border-color 0.2s;

        width: 300px;
        overflow: hidden;
    }

    .game-image {
        width: 300px;
        height: 200px;
        overflow: hidden;
        position: relative;
    }
    .game-image-inner {
        width: 100%;
        height: 100%;
        background-position: center center;
        background-size: 80%, cover;
        background-repeat: no-repeat;
        transition:
            scale 0.2s
    }

    .game-image::before {
        content: "";
        display: block;
        position: absolute;
        inset: 0;
        background-color: color-mix(
            in srgb,
            var(--color-blueprint-base) 30%,
            transparent
        );
        transition: background-color 2s ease-in;
    }

    .game:hover {
        border-color: var(--color-blueprint-border);
    }
    .game:hover .game-image::before {
        background-color: transparent;
    }

    .game:hover .game-image-inner {
        scale: 1.05;
    }

    .game-info {
        padding: var(--spacing-2);
    }

    .icon-grid {
        display: grid;
        grid-template-areas: "icon title" "icon content";
        grid-template-columns: 2em auto;
        margin: var(--spacing-2) 0;
    }

    .icon-grid-icon {
        color: var(--color-text-2);
        grid-area: icon;
    }
    .icon-grid-title {
        color: var(--color-text-2);
        grid-area: title;
    }
    .icon-grid-content {
        grid-area: content;
    }

    @media screen and (width < 320px) {
        .game {
            width: 100vw;
        }
        .game-image {
            width: 100%;
        }
    }
</style>
