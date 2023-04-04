<script>
  import ListPageTemplate from "$components/list-pages/ListPageTemplate.svelte";

  export let data;
  let { posts } = data;
</script>

<ListPageTemplate {posts} pageName={"Posts"} />
