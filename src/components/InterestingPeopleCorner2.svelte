<script>
	import { capitalize, shuffleArray } from "../lib/utils/math-functions";
	import NpcQuestList from "./NpcQuestList.svelte";

  export let settlement;
</script>

<h4 class="h4 text-center pt-1"  id="{settlement.id}">Interesting people</h4>
<div class="flex justify-center ">
  
  <div class="flex-col justify-center variant-filled-primary rounded p-5 max-w-[625px]">
    {#each shuffleArray(settlement.npcs) as npc}
      <div class="flex flex-row border-b-2">
        <div class="min-w-[165px] max-w-[165px] font-semibold" id={npc.id}>
          {npc.getName()}
        </div>
        <div class="text-sm pl-2">
          <p>{capitalize(npc.job)} at {npc.building.name}</p>
          <p>{npc.values.law.description}</p>
          <p>{npc.values.justice.description}</p>
          <p>{npc.values.power.description}</p>
          <p>{npc.values.cunning.description}</p>
          <p>{npc.values.fairness.description}</p>
          <p>{npc.values.knowledge.description}</p>
          <p>{npc.values.compassion.description}</p>
          <p>{npc.values.riskTaking.description}</p>
          <p>{npc.values.loyalty.description}</p>
          <p>{npc.values.independence.description }</p>
          <p><NpcQuestList {npc} /></p>
        </div>
      </div>
    {/each}
  </div>

</div>
