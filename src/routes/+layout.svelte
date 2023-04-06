<script>
  import Footer from "$components/footer/Footer.svelte";
import Nav from "$components/nav/Nav.svelte";
  import "../app.css";
</script>

<div class="min-h-screen w-full bg-greenGrey text-white flex flex-col">
  <Nav />
  <div class="pt-32 pb-12 px-3 h-full flex-grow">
  <slot />
  </div>
  <Footer />
</div>
