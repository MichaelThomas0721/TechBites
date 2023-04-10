<script>
  import FiCopy from "svelte-icons-pack/fi/FiCopy";
  import FiCheck from "svelte-icons-pack/fi/FiCheck";
  import Icon from "svelte-icons-pack/Icon.svelte";

  import "$styles/codeBlock.scss";
  export let code;
  export let caption;
  let clicked = false;
  let clickedTimeout;

  function ResetClicked() {
    clicked = false;
  }

  $: if (clicked) {
    clickedTimeout = setTimeout(ResetClicked, 1000);
  }

  function CopyToClipboard() {
    navigator.clipboard.writeText(code);
    clicked = true;
  }
</script>

<div class="w-full h-fit flex flex-col my-7 bg-black bg-opacity-20 codeBlock">
  {#if caption}
    <p class="text-lg italic text-center bg-black bg-opacity-20">{caption}</p>
  {/if}
  <div class="flex flex-row flex-nowrap items-center justify-between p-3">
    <p class="text-base whitespace-pre-wrap flex-grow">{code}</p>
    <button
      class="aspect-square rounded-md copyBtnCont flex justify-center items-center overflow-hidden"
      on:click={CopyToClipboard}
      ><Icon
        src={FiCopy}
        size="32"
        className={`icon copy ${clicked ? "opacity-0" : ""}`}
      />
      <Icon
        src={FiCheck}
        size="32"
        className={`icon checked ${clicked ? "" : "opacity-0"}`}
      /></button
    >
  </div>
</div>
