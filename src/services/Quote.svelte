<!-- Quote.svelte -->
<script lang="ts">
  export let quoteText;
</script>

<div class="quote">
  <p>{quoteText[0].props.text[0]}</p>
</div>
