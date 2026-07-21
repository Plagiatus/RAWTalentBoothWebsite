<script lang="ts">
    import GamesOverview from "$lib/cmp/games/GamesOverview.svelte";
    let {games} = $props();
    console.log(games);
</script>

<h1>[eventId]</h1>

<!-- Event Stats -->

<h2>Games</h2>
<GamesOverview games={games}/>

<h2>Memories</h2>
<!-- <Gallery></Gallery> -->