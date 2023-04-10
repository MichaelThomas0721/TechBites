<script>
  export let image;
  const imageSrc = image.image.url;
  const caption = image.caption;
</script>

<div class="flex flex-col my-3">
  <img src={imageSrc} alt="TEST" class="w-full" />
  <p class="text-lg italic text-center">{caption}</p>
</div>
