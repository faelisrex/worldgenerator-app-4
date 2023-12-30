<script>
	import { bountyDesc } from '../../../lib/extensions/quests/bountyQuests.js';
	import { getRandomEl } from '../../../lib/utils/math-functions.js';
    import world from '../../../lib/world-generator-4.js';
    export let data;
    const npc = world.npcs.find(npc=>npc.id===data.npcId)
</script>

<a href="/#{npc.id}">back</a>
<h1 class="h1">npc page</h1>
<h2 class="h2">{npc.getName()}</h2>
<div class="variant-filled-primary">
    <h3 class="h3">Beliefs</h3>
    {#each npc.values as value}
    <p>
        On 
        <span class='font-semibold'>
            {value.name}:
        </span>
        <span class="{value.isPositive ? 'text-tertiary-500 font-bold' : value.isNegative? 'text-red-700 font-semibold':''}">
            {value.description}.
        </span>
    </p>
    {/each}
    <h3 class="h3">Quests</h3>
    {#each npc.quests as quest}
        {#if quest.type === 'Bounty'}
            <div class="flex">
            <p>🎯</p>
            <p>{npc.firstName} {getRandomEl(['needs help in stopping', 'wants to stop'])} <a href="/#{quest.targetNpc.location.id}" class="underline decoration-dotted font-semibold italic">{quest.targetNpc.getName()}</a> 
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
                <a href="/#{quest.targetItem.inThePocketsOf.location.id}" class="underline decoration-dotted font-semibold italic"> {quest.targetItem.inThePocketsOf.getName()}</a>
                {quest.targetItem.inThePocketsOf.type === 'Townfolk'? 'in' : 'near'}
                {quest.targetItem.inThePocketsOf.location.name}.
                </span>
            </p>
            </div>
        {:else}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum error nihil soluta quae velit nesciunt saepe odit deleniti magnam consequuntur maiores vel eligendi ab, excepturi perspiciatis eos nostrum sed iste?</p>
        {/if}
    {/each}
</div>