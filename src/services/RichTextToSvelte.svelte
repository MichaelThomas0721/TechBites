<script>
    import BlockQuote from "$components/posts/BlockQuote.svelte";
    export let json;
</script>

<div>
    {#each json.content as block}
        <svelte:component this={BlockQuote} {...block} />
    {/each}
    <p>Hello</p>
</div>