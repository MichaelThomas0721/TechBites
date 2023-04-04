<script>
  import ListPageTemplate from "$components/list-pages/ListPageTemplate.svelte";
  export let data;
  $: ({ posts } = data);
  import { page } from "$app/stores";
</script>

<ListPageTemplate {posts} pageName={$page.params.subject.replace("-", " ")} />
