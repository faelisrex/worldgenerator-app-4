<script>
	import { bountyDesc } from "../lib/extensions/quests/bountyQuests";
  import { getRandomEl } from "../lib/utils/math-functions";


  export let settlement;

</script>

<style>
  .coming-soon {
    font-family: 'Coming Soon', cursive;
  }
</style>

<h4 class="h4 text-center">📜 Quest Board</h4>
<div class="flex flex-wrap justify-center px-5 text-sm font-semibold coming-soon">
  {#each settlement.quests as quest}
    <a class="card card-hover variant-filled-primary m-1 p-2 max-w-[150px] tracking-tight " href='#{quest.owner.location.id}'>

      {#if quest.type === 'Bounty'}
        <p>🎯 {getRandomEl(bountyDesc.greetingsBountyDesc)}, {getRandomEl(bountyDesc.adventurersBountyDesc)}! 
          I am in need of {getRandomEl(bountyDesc.skillsBountyDesc)} {getRandomEl(bountyDesc.delicateMatterBountyDesc)}</p>
      {/if}

      {#if quest.type === 'Retrieval'}  
        <p>🔍 Valiant seekers of the lost! I hath lost mine {quest.targetItem.name}.</p>
      {/if}
        
        
        
        
        
        
        
        
        <div class="flex justify-end">
          <span class="text-sky-800 italic text-xs">-{quest.owner.getName()}</span>
        </div>
    </a>
  {/each}
</div>