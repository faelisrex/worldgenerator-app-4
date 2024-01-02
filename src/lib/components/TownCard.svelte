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

<style>
  .town-card {
     /* max-width: 1000px; */
     /* border: 1px solid lightsteelblue; */
  }
</style>


{#each world.settlements as settlement}
<!-- bg-gradient-to-br variant-gradient-primary-secondary -->
  <div class="town-card my-5 pb-5">
    <h2 class="h2" id='{settlement.id}'><span class="font-semibold">{settlement.name}</span></h2>
    <hr>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ab repellat et earum ut assumenda aliquid numquam unde ducimus. Voluptas libero omnis recusandae sunt perferendis accusantium maxime quod eveniet alias.</p>
    <br>
    <TownServices {settlement} /> <br>
    <h3 class="h3">Quest Board/Rumors</h3>
    <hr>
    <QuestBoard {settlement} /> <br>
    <h3 class="h3">Interesting NPCs</h3>
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