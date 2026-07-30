<script lang="ts">
    import GamesOverview from "$lib/cmp/games/GamesOverview.svelte";
    let { data } = $props();
</script>

<svelte:head>
    <title>RawTalent @ {data.event.name} {data.event.year}</title>
</svelte:head>

<!-- TODO: Automatically switch between two versions, 
 one for the current event, one for past events. -->
<div class="event-info">
    <h1>Our <span class="highlight">Games</span></h1>

    <h2>
        come visit us at <span class="highlight"
            >{data.event.name} {data.event.year}</span
        >
    </h2>
    <span class="subtitle"> Hall 10.2 - Booth E42 </span>
    <!-- Event Stats -->
</div>

<GamesOverview games={data.games} />

<!-- <h2>Memories</h2> -->
<!-- <Gallery></Gallery> -->

<style>
    h1 {
        font-size: clamp(2rem, 5vw, 4.2rem);
        text-transform: uppercase;
    }
    h2 {
        font-size: clamp(1.5rem, 3.75vw, 3.1rem);
        /* text-transform: uppercase; */
    }
    .subtitle {
        font-family: var(--font-display);
        font-size: clamp(0.75rem, 2vw, 1.5rem);
        color: var(--color-text-muted);
    }

    .event-info {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
