<script>
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
  import { GetDefaultRenderOptions } from "$services/RenderOptions";
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
  const renderOptions = GetDefaultRenderOptions({ images: images });
  let htmlData = documentToHtmlString(json, renderOptions);
</script>

<div>
  <div class="w-fit max-w-7xl mx-auto flex flex-col items-center">
    <div class="max-w-5xl flex flex-col gap-6">
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
      <p class="text-2xl font-semibold">{shortDescription}</p>
      <img
        src={featuredImage.url}
        alt={"Post Image"}
        class="w-full aspect-video object-cover"
      />
    </div>
    <div class="max-w-4xl">
      <p>{@html htmlData}</p>
    </div>
  </div>
</div>
