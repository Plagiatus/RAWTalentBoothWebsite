<script lang="ts">
    import GamesOverview from "$lib/cmp/games/GamesOverview.svelte";
    let {data} = $props();
</script>

<h1>[eventId]</h1>

<!-- Event Stats -->

<h2>Games</h2>
<GamesOverview games={data.games}/>

<h2>Memories</h2>
<!-- <Gallery></Gallery> -->