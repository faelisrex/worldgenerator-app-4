<script>
  export let settlement;
</script>
<style>
  .icon {
    display: inline;
    height: 1.15rem;
  }
</style>

<p>
  {#each settlement.buildings as building}
  <span><img class="icon" src="/icons/{building.type}Icon.svg" alt=""> </span><span class="font-semibold">({building.type}) </span><span>{building.name},&nbsp</span>
  {/each}
  and others.
</p>