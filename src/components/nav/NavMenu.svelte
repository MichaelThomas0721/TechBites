<script>
  import NavOption from "./NavOption.svelte";

    export let open;
    export let navOptions;
    export let ToggleMenu;
</script>

<div class={`${open ? 'w-full' : 'w-0'} h-screen bg-fadedDarkGreen transition-all duration-300 overflow-hidden flex flex-col gap-2 items-center justify-center pb-24 z-50 ${open ? 'px-2' : 'px-0'}`}>
{#each navOptions as option}
<NavOption name={option.name} link={option.link} {ToggleMenu}/>
{/each}
</div>