<script>
  import Post from "$components/posts/Post.svelte";
  export let posts;
  export let pageName;
</script>

<div class="w-full h-full flex flex-col items-center">
  <h1 class="text-5xl capitalize">{pageName}</h1>
  <div class="w-full flex flex-col gap-12 items-center mt-16">
    {#each posts as post}
      <Post {post} />
    {/each}
  </div>
</div>
