<script>
    import NpcQuestList from '$lib/components/NpcQuestList.svelte';
    export let data;
    import {storedWorld} from '$lib/stores.js'
    let world = $storedWorld;
    const npc = world.npcs.find(npc=>npc.id===data.npcId)
</script>

<a href="/#{npc.id}">back</a>

<div class="py-8 px-10 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <h2 class="h2">{npc.getName()}</h2>
    <h3 class="h3">Description</h3>
    <p>{npc.description}</p>
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
    {#if npc.quests.length>0}
        <h3 class="h3">Quests</h3>
        <NpcQuestList {npc} />
    {/if}
</div>