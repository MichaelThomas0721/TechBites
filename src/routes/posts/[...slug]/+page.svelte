<script>
  import richTextRenderer from "$services/RichTextRenderer";
  export let data;
  const post = data.post;
  const { author, title, shortDescription, featuredImage, content } = post;
  const publishedDateArr = new Date(post.publishedDate).toString().split(" ");
  const publishedDate =
    publishedDateArr[1] +
    " " +
    publishedDateArr[2] +
    ", " +
    publishedDateArr[3];
  const images = content.links.entries.block;
  const json = content.json;

  let richText = richTextRenderer(json, images);
</script>

<div>
  <div class="w-fit max-w-7xl mx-auto flex flex-col items-center">
    <div class="max-w-5xl flex flex-col gap-2">
      <div class="flex flex-row gap-3 h-12 items-center">
        <img
          src={author.avatar.url}
          alt={"Avatar of " + author.name}
          class="rounded-full h-full aspect-square"
        />
        <p>{author.name}</p>
        <p>{publishedDate}</p>
      </div>
      <p class="text-4xl">{title}</p>
      <p class="text-2xl font-semibold mb-5">{shortDescription}</p>
      <img
        src={featuredImage.url}
        alt={"Post Image"}
        class="w-full"
      />
    </div>
    <div class="max-w-4xl flex flex-col gap-3 mt-12">
      {#each richText as { component, props }}
        <svelte:component this={component} {...props} />
      {/each}
    </div>
  </div>
</div>
