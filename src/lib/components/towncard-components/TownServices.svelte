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
  <span>&nbsp&nbsp<img class="icon" src="src/lib/icons/{building.type}Icon.svg" alt=""> </span><span class="font-semibold">({building.type}) </span><span>{building.name}, </span>
  {/each}
  and others.
</p>

<!-- v2
<div class="flex justify-center py-1">
  <div class="flex flex-wrap justify-center">
    {#each settlement.buildings as building}
    <div class="flex variant-filled-primary w-[300px] text-sm items-center">
      <div class="{building.type} w-[40px] h-[40px]"><img class="w-full h-full" src="/{building.img}.jpg" alt=""></div>
      <div class="pl-1 font-semibold">({building.type})</div>
      <div class="max-w-[200px] pl-1">{building.name}</div>
    </div>
    {/each}
  </div>
</div> -->

<!-- v1
<div class="flex flex-wrap justify-center p-3">
  {#each settlement.buildings as building}
    <div class="card bldg-card variant-filled-primary  max-w-[130px]">
      <header class="">
        <img src="../{building.img}.jpg"  use:filter={'#Apollo'} class="w-full aspect-[20/9]" alt="Post"/>
      </header>
      <p class="text-xs font-bold">{building.type}</p>
      <p class="text-sm leading-4 tracking-tight p-1">{building.name}</p>
    </div>
  {/each}
</div> -->