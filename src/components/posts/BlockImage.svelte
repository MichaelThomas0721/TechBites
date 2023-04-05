<script>
  export let node;
  export let images;
  const id = node?.data?.target?.sys?.id;
  const image = images.find((image) => image?.sys?.id == id);
  const imageSrc = image.image.url;
  const caption = image.caption;
</script>

<div class="flex flex-col my-3">
  <img src={imageSrc} alt="TEST" class="w-full" />
  <p class="text-lg italic text-center">{caption}</p>
</div>
