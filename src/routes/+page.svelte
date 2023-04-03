<script>
  import FeaturedPost from "$components/FeaturedPost.svelte";
import Nav from "$components/Nav.svelte";
  import SubFeaturedPost from "$components/SubFeaturedPost.svelte";
  let name = "ALL THINGS TECH";

  function AddH() {
    name += "h";
  }
</script>

<div class="bg-darkestPurple min-h-screen">
  <Nav />
  <h1
    class="text-[11vw] font-bold text-white text-center bg-gradient-to-b from-lightPurple to-purple"
  >
    {name}
  </h1>
  <button on:click={AddH}>Click me</button>
  <div class="max-w-5xl">
    <FeaturedPost />
  </div>
  <SubFeaturedPost />
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
