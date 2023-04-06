<script>
  import MenuButton from "./MenuButton.svelte";
  import NavMenu from "./NavMenu.svelte";
  import "$styles/logo.scss"

  let open = false;

  let navOptions = [
    { name: "Home", link: "/" },
    { name: "All Posts", link: "/posts" },
    { name: "Gaming", link: "/subjects/gaming" },
    { name: "Programming", link: "/subjects/programming" },
    { name: "General Tech", link: "/subjects/general-tech" },
  ];

  function ToggleMenu() {
    open = !open;
  }
</script>

<nav
  class={`w-full h-14 ${
    open ? "bg-opacity-100 bg-greenGrey" : "bg-opacity-10 bg-muddyGreen"
  } transition-all duration-300 z-50 fixed backdrop-blur-xl whitespace-nowrap`}
>
  <div
    class="flex flex-row justify-between px-3 py-1 items-center h-full shadow-bottom z-[60] relative"
  >
    <a href="/" class="logo">TechBites</a>
    <MenuButton {open} {ToggleMenu} />
  </div>
  <NavMenu {open} {navOptions} {ToggleMenu} />
</nav>
