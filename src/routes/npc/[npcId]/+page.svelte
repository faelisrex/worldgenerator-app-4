<script>
    import world from '../../../lib/world-generator-4.js';
    export let data;
    const npc = world.npcs.find(npc=>npc.id===data.npcId)
    console.log(world.getNpcById(data.npcId));
</script>

<a href="/#{npc.id}">back</a>
<h1 class="h1">npc page</h1>
<h2 class="h2">{npc.getName()}</h2>
<div class="variant-filled-primary">
    <p class="{npc.values.law.isPositive ? 'text-tertiary-500' : npc.values.law.isNegative? 'text-error-500':''}">{npc.values.law.description}</p>
    <p class="{npc.values.justice.isPositive ? 'text-tertiary-500' : npc.values.justice.isNegative? 'text-error-500':''}">{npc.values.justice.description}</p>
    <p class="{npc.values.power.isPositive ? 'text-tertiary-500' : npc.values.power.isNegative? 'text-error-500':''}">{npc.values.power.description}</p>
    <p class="{npc.values.cunning.isPositive ? 'text-tertiary-500' : npc.values.cunning.isNegative? 'text-error-500':''}">{npc.values.cunning.description}</p>
    <p class="{npc.values.fairness.isPositive ? 'text-tertiary-500' : npc.values.fairness.isNegative? 'text-error-500':''}">{npc.values.fairness.description}</p>
    <p class="{npc.values.knowledge.isPositive ? 'text-tertiary-500' : npc.values.knowledge.isNegative? 'text-error-500':''}">{npc.values.knowledge.description}</p>
    <p class="{npc.values.compassion.isPositive ? 'text-tertiary-500' : npc.values.compassion.isNegative? 'text-error-500':''}">{npc.values.compassion.description}</p>
    <p class="{npc.values.riskTaking.isPositive ? 'text-tertiary-500' : npc.values.riskTaking.isNegative? 'text-error-500':''}">{npc.values.riskTaking.description}</p>
    <p class="{npc.values.loyalty.isPositive ? 'text-tertiary-500' : npc.values.loyalty.isNegative? 'text-error-500':''}">{npc.values.loyalty.description}</p>
    <p class="{npc.values.independence.isPositive ? 'text-tertiary-500' : npc.values.independence.isNegative? 'text-error-500':''}">{npc.values.independence.description}</p>

</div>