<script>
    export let name;
    export let link;
    export let ToggleMenu;
</script>

<a href={link} on:click={ToggleMenu} class="text-white hover:text-gray-400 font-extrabold tracking-widest leading-relaxed text-5xl transition-all duration-300">
{name}
</a>