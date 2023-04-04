<script>
  export let post;
</script>

<a
  class="relative max-w-[1050px] w-full h-[600px] rounded-md bg-fadedDarkGreen bg-opacity-25 hover:bg-opacity-50 shadow-xl flex flex-col overflow-hidden z-10 p-3"
  href={`/posts/${post.slug}`}
>
  <img
    src={post.featuredImage.url}
    alt={post.title}
    class="w-full min-h-0 flex-grow object-cover rounded-md"
  />
  <div class="p-3 w-full flex-shrink-0">
    <h2 class="text-2xl font-bold">{post.title}</h2>
    <div class="flex flex-row gap-1 items-center">
      <img
        src={post.author.avatar.url}
        alt={post.author.name}
        class="h-8 aspect-square rounded-full"
      />
      <p class="text-xl font-light text-gray-300">{post.author.name}</p>
    </div>
    <p class="text-xl font-light text-gray-300">{post.shortDescription}</p>
  </div>
</a>
