<script>
  export let quoteText;
  let quote = quoteText[0]?.props?.text[0];
</script>

<div class="w-full h-fit flex flex-row gap-3 my-7">
  <div class="flex-grow w-2 bg-black bg-opacity-50" />
  <p class="text-2xl italic">{quote}</p>
</div>
