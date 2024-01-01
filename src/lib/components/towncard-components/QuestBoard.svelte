<script>
	import { bountyDesc } from "../../extensions/quests/bountyQuests";
  import { getRandomEl } from "../../utils/math-functions";


  export let settlement;

</script>

<style>
  .coming-soon {
    font-family: 'Coming Soon', cursive;
  }
</style>

<div class="flex flex-wrap text-sm mt-2">
  {#each settlement.quests as quest}
    <a class="card card-hover bg-primary-100 m-1 p-2 max-w-[140px] leading-4 shadow" href='#{quest.owner.location.id}'>

      {#if quest.type === 'Bounty'}
        <p>🎯 {getRandomEl(bountyDesc.greetingsBountyDesc)}, {getRandomEl(bountyDesc.adventurersBountyDesc)}! 
          I am in need of {getRandomEl(bountyDesc.skillsBountyDesc)} {getRandomEl(bountyDesc.delicateMatterBountyDesc)}</p>
      {/if}

      {#if quest.type === 'Retrieval'}  
        <p>🔍 Valiant seekers of the lost! I hath lost mine {quest.targetItem.name}.</p>
      {/if}
        
        
        
        
        
        
        
        
        <div class="flex justify-end">
          <span class="text-tertiary-700 italic text-sm">-{quest.owner.getName()}</span>
        </div>
    </a>
  {/each}
</div>