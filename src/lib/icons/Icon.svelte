<script lang="ts">
    import { LucideGlobe, LucideLinkedin } from "@lucide/svelte";
    import { icons } from "./icons";

    let { icon, fill = "currentColor" }: { icon: string; fill?: string } =
        $props();

    let siIcon = $derived(icons[icon]);
</script>

{#if siIcon}
    <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class={icon}
        {fill}
        // fill={`#${icons[icon].hex}`}
    >
        <path d={siIcon.path}></path>
    </svg>
{:else if icon == "linkedin"}
    <LucideLinkedin />
{:else}
    <LucideGlobe />
{/if}

<style>
    svg {
        height: 1.5em;
    }
</style>
