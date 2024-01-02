<script>
	import { capitalize } from "../../utils/language";
	import NpcQuestList from "../NpcQuestList.svelte";

  export let settlement;
</script>

<div class="">
  {#each settlement.npcs as npc}
    <div class="flex flex-row pt-3">
      <div class="font-semibold md:min-w-[200px] md:max-w-[200px] sm:min-w-28 sm:max-w-28" id={npc.id}>
        <a href="/npc/{npc.id}">{npc.getName()}</a>
      </div>
      <div class="text-sm pl-2">
        <p><span class="font-semibold">{capitalize(npc.job)}</span> at <span class="font-semibold">{npc.building.name}</span>. {npc.firstName} is {npc.description}</p>
        <p><NpcQuestList {npc} /></p>
      </div>
    </div>
  {/each}
</div>

