<script>
  export let stat;
  export let UpdateStat;
  export let index;
  const max = 10;
  let num = 0;

  function UpdateNum(e) {
    num = e.target.value;
  }

  function UpdateGlobalStat() {
    UpdateStat(index, num);
  }
</script>

<div class="flex flex-col justify-center items-center">
  <p>{stat}</p>
  <input
    type="range"
    min={0}
    {max}
    value={num}
    on:change={UpdateGlobalStat}
    on:input={() => UpdateNum(event)}
  />
  <p>{num}</p>
</div>
