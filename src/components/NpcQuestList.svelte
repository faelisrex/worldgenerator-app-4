<script>
	import { bountyDesc } from "../lib/extensions/quests/bountyQuests";
	import { getRandomEl } from "../lib/utils/math-functions";
  export let npc;
  export let poi;

  if(poi) {
    npc = poi.npc
  }
</script>

{#each npc.quests as quest}
  <div class="text-sm leading-4 tracking-tight">
    <p class="font-semibold">Quests</p>
    {#if quest.type === 'Bounty'}
      <div class="flex">
        <p>🎯</p>
        <p>{npc.firstName} {getRandomEl(['needs help in stopping', 'wants to stop'])} <a href="#{quest.targetNpc.id}" class="underline decoration-dotted text-error-800">{quest.targetNpc.getName()}</a> 
          in the {quest.targetNpc.building.name} 
          ({quest.targetNpc.type ==='Townfolk'? 'in':'near'}
          {quest.targetNpc.location.name}) by {getRandomEl(bountyDesc.bountyMethodSerious)} or by {getRandomEl(bountyDesc.bountyMethodFunny)}.
        </p>
      </div>
    {:else if quest.type === 'Retrieval'}
      <div class="flex">
        <p>🔍</p>
        <p>{quest.owner.firstName} {getRandomEl(['wants to find','needs help in looking for'])} their {quest.targetItem.name}. 
          <span class="text-xs">
            It is with 
            <a href="#{quest.targetItem.inThePocketsOf.id}" class="underline decoration-dotted text-error-800"> {quest.targetItem.inThePocketsOf.getName()}</a>
            {quest.targetItem.inThePocketsOf.type === 'Townfolk'? 'in' : 'near'}
            {quest.targetItem.inThePocketsOf.location.name}.
          </span>
        </p>
      </div>
    {:else}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum error nihil soluta quae velit nesciunt saepe odit deleniti magnam consequuntur maiores vel eligendi ab, excepturi perspiciatis eos nostrum sed iste?</p>
    {/if}

  </div>
{/each}