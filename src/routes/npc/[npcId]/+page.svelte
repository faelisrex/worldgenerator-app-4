<script>
    import world from '../../../lib/world-generator-4.js';
    export let data;
    const npc = world.npcs.find(npc=>npc.id===data.npcId)
</script>

<a href="/#{npc.id}">back</a>
<h1 class="h1">npc page</h1>
<h2 class="h2">{npc.getName()}</h2>
<div class="variant-filled-primary">
    {#each npc.values as value}
    <p class="{value.isPositive ? 'text-tertiary-500' : value.isNegative? 'text-error-500':''}">
        {value.description}
    </p>
    {/each}
</div>