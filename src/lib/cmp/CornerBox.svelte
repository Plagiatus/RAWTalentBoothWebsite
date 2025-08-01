<script lang="ts">
    let { children, classes = "" } = $props();
</script>

<div class="box cornered {classes}">
    <div class="corner c-l c-t"></div>
    <div class="corner c-r c-t"></div>
    <div class="corner c-l c-b"></div>
    <div class="corner c-r c-b"></div>
    {@render children?.()}
</div>

<style> 
    .cornered {
        position: relative;
    }
    .corner {
        position: absolute;
        width: var(--spacing-4);
        height: var(--spacing-4);
        --border-style: 2px solid var(--color-blueprint-border);
    }

    .c-l {
        left: var(--spacing-2);
        border-left: var(--border-style);
    }
    .c-r {
        right: var(--spacing-2);
        border-right: var(--border-style);
    }
    .c-t {
        top: var(--spacing-2);
        border-top: var(--border-style);
    }
    .c-b {
        bottom: var(--spacing-2);
        border-bottom: var(--border-style);
    }
</style>