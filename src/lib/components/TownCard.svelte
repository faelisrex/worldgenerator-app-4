<script>
	import { getRandomEl, getRandomInt } from "../utils/math-functions";

	import { storedWorld } from "../stores.js";
	import QuestBoard from "./towncard-components/QuestBoard.svelte";
	import InterestingPeopleCorner2 from "./towncard-components/InterestingPeopleCorner2.svelte";
	import TownServices from "./towncard-components/TownServices.svelte";
  
  let world;
  storedWorld.subscribe(value=>{
      world = value;
  })

</script>

{#each world.settlements as settlement}
<!-- bg-gradient-to-br variant-gradient-primary-secondary -->
  <div class="town-card my-5 pb-5">
    <h2 class="h2" id='{settlement.id}'><span class="font-semibold">{settlement.name}</span></h2>
    <hr>
    <p>Cities and Towns are generated to feature diverse sets of resources. Settlements vary in abundance (or scarcity) of resources which contribute to the settlement's character. The presence of <img class="icon" src="/icons/FarmIcon.svg" alt=""> Farms, for example, indicate nearby farmland. The presence of <img class="icon" src="/icons/SmithyIcon.svg" alt=""> Smithies indicate a local supply of minerals. These resources are listed below: </p>
    <br>
    <TownServices {settlement} /> <br>
    {#if settlement.quests.length > 0}
      <h3 class="h3 font-semibold">Quest Board/Rumors</h3>
      <hr>
      <QuestBoard {settlement} /> <br>
    {/if}
    <h3 class="h3 font-semibold">Interesting NPCs</h3>
    <hr>
    <InterestingPeopleCorner2 {settlement} />

    <!-- Points of Interests -->
    {#if settlement.pois.length > 0}
      
    <h3 class="h3 pt-1">Nearby Locations</h3>
    <hr>
    <div class="flex flex-wrap mt-2">
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
    {/if}
    <!-- Points of Interests -->

    <p class="text-center my-5">🌑🌒🌓🌔🌕🌖🌗🌘🌑</p>
  </div>
{/each}