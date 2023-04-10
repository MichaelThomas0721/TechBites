<script>
  import FeaturedSection from "$components/FeaturedSection.svelte";
  export let data;
  let { posts } = data;
  let name = "ALL THINGS TECH";
</script>

<div class="bg-darkGreen min-h-screen w-full">
  <h1
    class="text-[11vw] font-bold text-white text-center bg-gradient-to-b from-darkGreen to-darkGreen"
  >
    {name}
  </h1>
  <FeaturedSection {posts} />
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
