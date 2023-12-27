<script>
	import { getRandomEl, getRandomInt } from "../lib/utils/math-functions";


	import world from "../lib/world-generator-4";


</script>

<style>
  .town-card {
    width: 550px;
  }
  .bldg-card {
    max-width: 160px;
    border-radius: 0px;
    text-align: center
  }
</style>


{#each world.settlements as settlement}
  <div class="card flex-wrap m-3 pt-3 pb-8 town-card">
    <h2 class="h2 text-center">{settlement.name}</h2>
    <!-- Services -->
    <div class="flex flex-wrap justify-center p-3">
      {#each settlement.buildings as building}
        <div class="card bldg-card variant-filled-primary">
          <header class="">
            <img src="../{building.type}{getRandomInt(1,2)}.jpg" class="bg-black/50 w-full aspect-[20/9]" alt="Post" />
          </header>
          <p class="text-xs font-bold">{building.type}</p>
          <p class="text-sm leading-4 p-2">{building.name}</p>
        </div>
      {/each}
    </div>
    <!-- Services -->


    
    <!-- NPCs -->
    <h3 class="h3 text-center pt-2">Interesting people</h3>
    <div class="flex flex-wrap justify-center">
      {#each settlement.npcs as npc}
      <dl class="list-dl variant-filled-primary card-hover m-1 shadow-xl">
        <div style="min-width: 400px;">
          <span class="badge bg-tertiary-500">🫠</span>
          <span class="flex-auto">
            <dt>{npc.getName()}</dt>
            <dd class="text-xs">Works as {npc.job} at {npc.building.name}</dd>
          </span>
        </div>
      </dl>
      {/each}
    </div>
    <!-- NPCs -->
    <!-- Points of Interests -->
    <h3 class="h3 text-center pt-2">Nearby Locations</h3>
    <div class="flex flex-wrap justify-center">
      {#each settlement.pois as poi}
      <div class="grid m-3 w-32 content-start">
        <img src="../cave{getRandomInt(1,2)}.jpg" alt="post" class="rounded-full w-24 h-24 block mx-auto" />
        <span class="text-sm text-center h-[40px] pt-1">
          {poi.name}
        </span>
        <!-- NPC -->
        <span class="text-[10px] text-center">occupied by</span>
        {#if poi.isOccupied}
        <div class="bg-tertiary-800 card-hover shadow-xl p-2 min-h-[96px]">
          <div class="flex flex-wrap justify-center">
            <span class="badge bg-tertiary-500">💀</span>
            <span class="basis-full"></span>
            <span class="text-[12px] text-center font-bold leading-4">{poi.npc.getName()}</span>
            <span class="text-[11px] text-center">hiding from authorities</span>
          </div>
        </div>
        {:else}
          <p class="text-[12px] text-center font-bold">{getRandomEl(['a Big Bear', 'a Wraith', 'a Lion'])}</p>
        {/if}
      </div>

      {/each}
    </div>
    <!-- Points of Interests -->
  </div>
{/each}