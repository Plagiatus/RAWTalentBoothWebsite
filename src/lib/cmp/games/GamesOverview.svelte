<script lang="ts">
    import type { RTGame } from "../../types";
    import { tags, universities } from "$lib/data/hardcoded";
    import GameCapsule from "./GameCapsule.svelte";

    let { games }: { games: RTGame[] } = $props();

    let gameFilter = $state({
        text: "",
        tags: [] as string[],
        uni: "",
        ageRating: "",
    });

    let filteredGames: RTGame[] = $state([]);
    updateFilteredGames();

    function filterGames(game: RTGame): boolean {
        if (gameFilter.tags) {
            for (let tag of gameFilter.tags) {
                if (!game.tags.includes(tag)) {
                    return false;
                }
            }
        }

        if (gameFilter.uni) {
            if (game.university !== gameFilter.uni) return false;
        }

        if (gameFilter.ageRating) {
            if (game.ageRating !== gameFilter.ageRating) return false;
        }

        if (gameFilter.text) {
            let anyTextMatches: boolean = false;
            if (
                !anyTextMatches &&
                game.name
                    .toLowerCase()
                    .includes(gameFilter.text.toLocaleLowerCase())
            )
                anyTextMatches = true;
            if (
                !anyTextMatches &&
                game.teamName
                    .toLowerCase()
                    .includes(gameFilter.text.toLocaleLowerCase())
            )
                anyTextMatches = true;
            if (
                !anyTextMatches &&
                game.shortDescription
                    .toLowerCase()
                    .includes(gameFilter.text.toLocaleLowerCase())
            )
                anyTextMatches = true;
            if (!anyTextMatches) return false;
        }

        return true;
    }
    function updateFilteredGames() {
        filteredGames = games.filter(filterGames);
    }

    let newTag: string = $state("");
    function addTag() {
        if (!newTag) return;
        if (!gameFilter.tags.includes(newTag)) gameFilter.tags.push(newTag);
        newTag = "";
        updateFilteredGames();
    }
    function removeTag(tag: string) {
        let index = gameFilter.tags.indexOf(tag);
        if (index < 0) return;
        gameFilter.tags.splice(index, 1);
        updateFilteredGames();
    }
</script>

<div id="game-filter">
    <input
        type="text"
        name="text"
        id="text"
        bind:value={gameFilter.text}
        placeholder="search..."
        onchange={updateFilteredGames}
    />
    <select name="tags" id="tags" onchange={addTag} bind:value={newTag}>
        <option value="" selected disabled>add tag...</option>
        {#each tags as [category, tagList]}
            <optgroup label={category}>
                {#each tagList as tag}
                    <option value={tag}>{tag}</option>
                {/each}
            </optgroup>
        {/each}
    </select>
    {#each gameFilter.tags as tag}
        <button
            type="button"
            onclick={() => {
                removeTag(tag);
            }}
            class="tag">{tag}</button
        >
    {/each}
    <label for="university">University</label>
    <select
        name="university"
        id="university"
        bind:value={gameFilter.uni}
        onchange={updateFilteredGames}
    >
        <option value="" selected>Any</option>
        {#each universities as uni}
            <option value={uni.id}>{uni.name}</option>
        {/each}
    </select>
    <label for="ageRating">Age Rating</label>
    <select
        name="ageRating"
        id="ageRating"
        bind:value={gameFilter.ageRating}
        onchange={updateFilteredGames}
    >
        <option value="" selected>Any</option>
        <option value="12">12+</option>
        <option value="18">18+</option>
    </select>
</div>

<div class="games">
    {#each filteredGames as game}
        <GameCapsule {game} />
    {/each}
</div>

<style>
    .games {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
    }
</style>
