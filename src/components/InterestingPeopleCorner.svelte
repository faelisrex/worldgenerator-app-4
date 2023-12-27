<script>
  import { capitalize, shuffleArray } from "../lib/utils/math-functions.js";
	import NpcQuestList from "./NpcQuestList.svelte";
  export let settlement;

</script>

<h4 class="h4 text-center pt-1"  id="{settlement.id}">Interesting people</h4>
    <div class="flex flex-wrap justify-center">
      {#each shuffleArray(settlement.npcs) as npc}
      <div class="{npc.type === 'Townfolk' ? 'variant-filled-primary' : 'variant-filled-warning'} p-1 w-[300px] cursor-pointer card-hover">
        <div class="flex">
          <img src="../randomPerson1.jpg" alt="" class="rounded-full w-12 h-12" />
          <div class="flex flex-col pl-1">
            <span id="{npc.id}" class="font-semibold">{npc.getName()}</span>
            <span class="text-xs tracking-tight line-clamp-1">{capitalize(npc.job)} at {npc.building.name}</span>
          </div>
        </div>
        <div>
          <!-- <NpcQuestList {npc} /> -->
        </div>
      </div>
      {/each}
    </div>