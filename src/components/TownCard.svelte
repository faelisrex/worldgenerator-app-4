<script>
	import { getRandomEl, getRandomInt } from "../lib/utils/math-functions";
  import { filter } from '@skeletonlabs/skeleton';

	export let world;
	import QuestBoard from "./QuestBoard.svelte";


</script>

<style>
  .town-card {
     max-width: 1000px;
  }
  .bldg-card {
    border-radius: 0px;
    text-align: center
  }
	.macondo {
		font-family: 'Macondo', cursive;
	}
</style>


{#each world.settlements as settlement}
<!-- bg-gradient-to-br variant-gradient-primary-secondary -->
  <div class="card flex-wrap m-3 pt-3 pb-8 town-card variant-glass-primary">
    <h2 class="h2 text-center macondo">{settlement.name}</h2>
    <!-- Services -->
    <div class="flex flex-wrap justify-center p-3">
      {#each settlement.buildings as building}
        <div class="card bldg-card variant-filled-primary  max-w-[130px]">
          <header class="">
            <img src="../{building.img}.jpg"  use:filter={'#Apollo'} class="w-full aspect-[20/9]" alt="Post"/>
          </header>
          <p class="text-xs font-bold">{building.type}</p>
          <p class="text-sm leading-4 p-2">{building.name}</p>
        </div>
      {/each}
    </div>
    <!-- Services -->
    <!-- Quest Board -->
        <QuestBoard {settlement} />
    <!-- Quest Board -->
    <!-- NPCs -->
    <h4 class="h4 text-center pt-1"  id="{settlement.id}">Interesting people</h4>
    <div class="flex flex-wrap justify-center">
      {#each settlement.npcs as npc}
      <div class="variant-filled-primary card-hover shadow w-[300px] p-1 cursor-pointer">
        <div class="flex">
          <img src="../randomPerson1.jpg" alt="" class="rounded-full w-12 h-12" />
          <div class="flex flex-col pl-1">
            <span id="{npc.id}" class="font-semibold">{npc.getName()}</span>
            <span class="text-xs tracking-tight line-clamp-1">Works as {npc.job} at {npc.building.name}</span>
          </div>
        </div>
      </div>
      {/each}
    </div>
    <!-- NPCs -->
    <!-- Points of Interests -->
    <h3 class="h4 text-center pt-1">Nearby Locations</h3>
    <div class="flex flex-wrap justify-center">
      {#each settlement.pois as poi}
      <div class="grid m-1 w-32 content-start">
        <img src="../cave{getRandomInt(1,2)}.jpg" alt="post" class="rounded-full w-20 h-20 block mx-auto" />
        <span class="text-sm text-center h-[40px] pt-1 leading-tight">
          {poi.name}
        </span>
        <!-- NPC -->
        <span class="text-[10px] text-center">occupied by</span>
        {#if poi.isOccupied}
        <div class="variant-filled-tertiary card-hover shadow p-2 min-h-[96px] cursor-pointer">
          <div class="flex flex-wrap justify-center">
            <span class="badge bg-error-500">💀</span>
            <span class="basis-full"></span>
            <span class="text-[12px] text-center font-bold leading-4" id="{poi.npc.id}">{poi.npc.getName()}</span>
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