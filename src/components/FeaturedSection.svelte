<script>
  import LatestPost from "./LatestPost.svelte";
  export let posts;
</script>

<div class="flex flex-row gap-6 p-3 flex-wrap justify-around items-center">
    {#each posts as post} 
        <LatestPost {post} />
    {/each}
</div>
