<script>
    export let post;
</script>

<a
  class="flex-grow max-h-[1000px] h-full max-w-[500px] w-full min-w-[400px] bg-fadedDarkGreen bg-opacity-25 hover:bg-opacity-50 shadow-lg flex flex-col overflow-ellipsis gap-2 overflow-hidden rounded-md"
  href={`/posts/${post.slug}`}
>
  <img
    src={post.featuredImage.url}
    alt="Featured Post Cover"
    class="w-full object-cover min-h-[200px] flex-grow"
  />
  <p class="text-2xl font-semibold line-clamp-1 px-2">{post.title}</p>
  <div class="flex flex-row">
    <img src={post.author.avatar.url} alt={post.author.name} class="h-8 rounded-full pl-2"/>
    <p class="text-lg font-light text-gray-300 px-2">{post.author.name}</p>
  </div>
  <p class="text-lg font-light text-gray-300 px-2 pb-2">
    {post.shortDescription}
  </p>
</a>
