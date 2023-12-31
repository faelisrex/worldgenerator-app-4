<script>
	import { getRandomEl, getRandomInt } from "../utils/math-functions";

	export let world;
	import QuestBoard from "./towncard-components/QuestBoard.svelte";
	import InterestingPeopleCorner2 from "./towncard-components/InterestingPeopleCorner2.svelte";
	import TownServices from "./towncard-components/TownServices.svelte";


</script>

<style>
  .town-card {
     max-width: 1000px;
  }
	.macondo {
		font-family: 'Macondo', cursive;
	}
</style>


{#each world.settlements as settlement}
<!-- bg-gradient-to-br variant-gradient-primary-secondary -->
  <div class="card flex-wrap m-3 pt-3 pb-8 town-card variant-glass-primary">
    <h2 class="h2 text-center macondo" id='{settlement.id}'>{settlement.name}</h2>
    <TownServices {settlement} />
    <QuestBoard {settlement} />
    <InterestingPeopleCorner2 {settlement} />
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
        <span class="text-[12px] text-center font-bold" id="{poi.npc.id}">{poi.npc.getName()}</span>
        
            <!-- <NpcQuestList {poi} /> -->
          
        
        {:else}
          <p class="text-[12px] text-center font-bold">{getRandomEl(['a Big Bear', 'a Wraith', 'a Lion'])}</p>
        {/if}
      </div>

      {/each}
    </div>
    <!-- Points of Interests -->
  </div>
{/each}