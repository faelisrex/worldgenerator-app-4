<script>
	import { getRandomEl, getRandomInt } from "../lib/utils/math-functions";


	import world from "../lib/world-generator-4";


</script>

<style>
  .bldg-card {
    max-width: 160px;
    height: 150px;
    border-radius: 0px;
    text-align: center
  }
</style>


{#each world.settlements as settlement}
  <div style="width: 650px" class="card flex-wrap m-3 pt-3 pb-8">
    <h2 class="h2 text-center">{settlement.name}</h2>
    <!-- Services -->
    <div class="flex flex-wrap justify-center p-3">
      {#each settlement.buildings as building}
        <div class="card bldg-card variant-filled-primary">
          <header class="">
            <img src="../{building.type}{getRandomInt(1,2)}.jpg" class="bg-black/50 w-full aspect-[20/9]" alt="Post" />
          </header>
          <p class="text-xs font-bold">{building.type}</p>
          <section class="p-1 py-1 text-center">
            <span class="text-sm">
              {building.name}
            </span>  
          </section>
        </div>
      {/each}
    </div>
    <!-- Services -->
    <!-- NPCs -->
    <h3 class="h3 text-center pt-2">Interesting people</h3>
    <div class="npc-section grid justify-center">
      {#each settlement.npcs as npc}
      <dl class="list-dl variant-filled-primary card-hover m-1 shadow-xl">
        <div style="min-width: 400px;">
          <span class="badge bg-tertiary-500">💀</span>
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
      <div class="grid justify-items-center m-3">
        <img src="../cave{getRandomInt(1,2)}.jpg" alt="post" class="rounded-full w-24 h-24" />
        <span class="text-sm">
          {poi.name}
        </span>
      </div>
      {/each}
    </div>
    <!-- Points of Interests -->
  </div>
{/each}