<script>
  import "$styles/menu.scss";
  export let open;
  export let ToggleMenu;
  let menuBtn;

  function ToggleThisMenu() {
    ToggleMenu();
  }
</script>

<button
  class={`${open ? 'menuBtnOpened' : 'menuBtnClosed'} w-12 h-12 flex justify-center items-center relative`}
  on:click={ToggleThisMenu}
>
  <div />
  <div />
  <div />
</button>
