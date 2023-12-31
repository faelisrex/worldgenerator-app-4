<script>
    import world from '$lib/world-generator-4.js';
    import NpcQuestList from '$lib/components/NpcQuestList.svelte';
    export let data;
    const npc = world.npcs.find(npc=>npc.id===data.npcId)
</script>

<a href="/#{npc.id}">back</a>
<div class="variant-filled-primary">
    <h2 class="h2">{npc.getName()}</h2>
    <h3 class="h3">description</h3>
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
    <h3 class="h3">Quests</h3>
    <NpcQuestList {npc} />
</div>