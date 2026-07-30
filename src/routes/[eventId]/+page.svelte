<script lang="ts">
    import GamesOverview from "$lib/cmp/games/GamesOverview.svelte";
    let {data} = $props();
</script>

<svelte:head>
    <title>RawTalent @ {data.event.name} {data.event.year}</title>
</svelte:head>


<h1>{data.event.name} {data.event.year}</h1>

<!-- Event Stats -->

<h2>Games</h2>
<GamesOverview games={data.games}/>

<!-- <h2>Memories</h2> -->
<!-- <Gallery></Gallery> -->