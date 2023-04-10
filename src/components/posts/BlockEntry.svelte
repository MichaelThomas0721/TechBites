<script>
export let node;
export let inlineContent;
import BlockCode from "$components/posts/BlockCode.svelte";
import BlockImage from "$components/posts/BlockImage.svelte";
</script>

{#if inlineContent.code}
<BlockCode code={inlineContent.code} caption={inlineContent.caption} />
{:else if inlineContent.image}
<BlockImage image={inlineContent} />
{:else if inlineContent.hyperlink}
<a href={inlineContent.hyperlink} target="_blank">{inlineContent.hyperlink}</a>
{/if}