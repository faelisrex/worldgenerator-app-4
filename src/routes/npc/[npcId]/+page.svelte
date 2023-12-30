<script>
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
</div>