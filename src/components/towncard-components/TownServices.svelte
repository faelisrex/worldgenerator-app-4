<script>
	import FarmIcon from "../../lib/html/icons/FarmIcon.svg";
  export let settlement;
</script>
<style>
  .Farm {
    @apply bg-green-400;
  }
  .Tavern {
    @apply bg-slate-400;
  }
  .Smithy {
    @apply bg-amber-400;
  }
</style>


<div class="flex justify-center">
  <div class="flex flex-wrap justify-center">
    {#each settlement.buildings as building}
    <div class="flex variant-filled-primary w-[300px] text-sm items-center">
      <div class="{building.type} p-1 min-w-[40px] min-h-[40px]"><img class="w-6 block mx-auto" src="/icons/{building.type}Icon.svg" alt=""></div>
      <div>
        <span class="font-semibold">({building.type})</span>
        {building.name}
      </div>
    </div>
    {/each}
  </div>
</div>

<!-- 
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