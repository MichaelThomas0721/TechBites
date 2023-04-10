<!-- Quote.svelte -->
<script>
  export let text;
  console.log("TEXXT PARAGRAPH", text);
</script>

<div class="">
  <p>
    {#each text as txt}
      {#if txt.component}
        <svelte:component this={txt.component} {...txt.props} />
      {:else}
        {txt}
      {/if}
    {/each}
  </p>
</div>
