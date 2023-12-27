<script>
	import { bountyDesc } from "../lib/extensions/quests/bountyQuests.js";
  export let settlement;
  import { capitalize, getRandomEl } from "../lib/utils/math-functions.js";
	import NpcQuestList from "./NpcQuestList.svelte";

</script>

<h4 class="h4 text-center pt-1"  id="{settlement.id}">Interesting people</h4>
    <div class="flex flex-wrap justify-center">
      {#each settlement.npcs as npc}
      <div class="variant-filled-primary border-[1px] p-1 w-[300px]">
        <div class="flex">
          <img src="../randomPerson1.jpg" alt="" class="rounded-full w-12 h-12" />
          <div class="flex flex-col pl-1">
            <span id="{npc.id}" class="font-semibold">{npc.getName()}</span>
            <span class="text-xs tracking-tight line-clamp-1">{capitalize(npc.job)} at {npc.building.name}</span>
          </div>
        </div>
        <div>
          <p>Lorem ipsum short description.</p>
        </div>
        <div>
          <!-- <NpcQuestList {npc} /> -->
        </div>
      </div>
      {/each}
    </div>