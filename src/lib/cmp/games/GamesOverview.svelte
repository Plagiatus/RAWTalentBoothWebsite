<script lang="ts">
    import type { RTGame } from "../../types";
    import { tags, universities } from "$lib/data/hardcoded";
    import GameCapsule from "./GameCapsule.svelte";
    import { shuffle } from "$lib/utils";
    import {
        ChevronRight,
        CircleX,
        FunnelIcon,
        Search,
        SearchX,
        Tag,
    } from "@lucide/svelte";
    import { onMount } from "svelte";

    let { games }: { games: RTGame[] } = $props();

    const emptyFilter = {
        text: "",
        tags: [] as string[],
        uni: "",
        ageRating: "",
    };
    let gameFilter = $state(emptyFilter);
    onMount(initFilter);

    let filteredGames: RTGame[] = $state([]);
    let filterActive: boolean = $derived(filteredGames.length != games.length);
    let filterOpen: boolean = $state(false);
    updateFilteredGames();

    function initFilter() {
        let startingParams = new URLSearchParams(window.location.search);
        if (startingParams.has("tag"))
            gameFilter.tags = startingParams.getAll("tag");
        if (startingParams.has("text"))
            gameFilter.text = startingParams.get("text")!;
        if (startingParams.has("uni"))
            gameFilter.text = startingParams.get("uni")!;
        if (startingParams.has("ageRating"))
            gameFilter.text = startingParams.get("ageRating")!;
        updateFilteredGames();
    }

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
        shuffle(filteredGames);
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

    function resetFilter() {
        gameFilter = emptyFilter;
        updateFilteredGames();
    }
</script>

<div id="game-filter">
    <details bind:open={filterOpen}>
        <summary>
            <div class="filter-group">
                <span class="icon" class:rotated={filterOpen}>
                    <ChevronRight size={"1.5em"} />
                </span>
                Filter
                {#if filterActive}
                    (active)
                {/if}
            </div>
            <div class="funnel-group">
                <FunnelIcon size={"1.5em"} />
                <div class:dot={filterActive}></div>
            </div>
        </summary>
        <div class="filter-options">
            <div class="filter-group">
                <label for="text" class="hide-small">
                    <Search />
                </label>
                <input
                    type="text"
                    name="text"
                    id="text"
                    bind:value={gameFilter.text}
                    placeholder="Search for games"
                    onchange={updateFilteredGames}
                />
            </div>
            <div class="filter-group">
                <label for="tags" class="hide-small">
                    <Tag />
                </label>
                <select
                    name="tags"
                    id="tags"
                    onchange={addTag}
                    bind:value={newTag}
                >
                    <option value="" selected disabled>Select a tag...</option>
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
                        class="tag">#{tag} <CircleX size="1em" /></button
                    >
                {/each}
            </div>
            <div class="filter-group-grid">
                <label for="university" class="hide-small">University</label>
                <select
                    name="university"
                    id="university"
                    bind:value={gameFilter.uni}
                    onchange={updateFilteredGames}
                >
                    <option value="" selected>any university</option>
                    {#each universities as uni}
                        <option value={uni.id}>{uni.name}</option>
                    {/each}
                </select>
                <label for="ageRating" class="hide-small">Age Rating</label>
                <select
                    name="ageRating"
                    id="ageRating"
                    bind:value={gameFilter.ageRating}
                    onchange={updateFilteredGames}
                >
                    <option value="" selected>all ages</option>
                    <option value="12">12+</option>
                    <option value="18">18+</option>
                </select>
            </div>
            <div class="filter-group">
                <button
                    type="reset"
                    onclick={resetFilter}
                    disabled={!filterActive}>Reset</button
                >
            </div>
        </div>
    </details>
</div>

<div class="games">
    {#each filteredGames as game}
        <GameCapsule {game} />
    {/each}
    {#if filteredGames.length == 0}
        <div class="nothing-found">
            <SearchX size="3em" /> Sorry, no games were found. Try adjusting your filters.
        </div>
    {/if}
</div>

<style>
    #game-filter {
        margin: 1rem 5vw;
        position: sticky;
        top: 5rem;
    }
    summary {
        cursor: pointer;
        background-color: var(--color-background-higher);
        color: var(--color-text-white);
        text-align: center;
        display: flex;
        padding: 0.5em;
        gap: 0.5em;
        justify-content: space-between;
        border: 2px solid var(--color-blueprint-grid-strong);
    }
    .filter-group {
        display: flex;
        flex-direction: row;
    }
    .icon {
        transition: rotate 0.2s ease-out;
    }
    .rotated {
        rotate: 90deg;
    }
    .funnel-group {
        position: relative;
    }
    .dot {
        width: 0.5em;
        height: 0.5em;
        border-radius: 50%;
        background-color: var(--highlight);
        /* border: 2px solid var(--color-text-white); */
        position: absolute;
        right: 0;
        top: 0;
    }

    .filter-options {
        padding: 1rem;
        background-color: var(--color-background-higher);
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .filter-group {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        flex-wrap: wrap;
    }
    .filter-group-grid {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 1rem;
    }
    .games {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        margin: 1rem 5vw;
        gap: 1em;
    }

    button.tag {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        gap: 0.3em;
        background-color: transparent;
        color: inherit;
    }

    button,
    select,
    input {
        border-radius: 0.375rem;
        border: 0;
        padding: 0.25em;
    }
    input#text {
        flex-grow: 1;
    }
    select,
    button {
        padding: 0.25em 0.5em;
        cursor: pointer;
    }
    .nothing-found {
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1em;
        font-size: 1.25em;
        background-color: var(--color-background-higher);
        flex-grow: 1;
        text-align: center;
    }
    @media screen and (max-width: 628px) { /* Header changes here */
        #game-filter {
            top: 3rem;
        }
    }
    @media screen and (max-width: 520px) {
        .filter-group-grid {
            display: flex;
            flex-direction: column;
        }
        .hide-small {
            display: none;
        }
    }
</style>
