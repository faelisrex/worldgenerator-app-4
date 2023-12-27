<script>

	import world from "../lib/world-generator-4";

</script>

<style>
  .bldg-card {
    max-width: 160px;
    height: 130px;
    border-radius: 0px;
    text-align: center
  }
</style>


{#each world.settlements as settlement}
  <div style="width: 650px" class="card flex-wrap m-3 variant-glass-tertiary">
    <h2 class="h2 text-center p-2">{settlement.name}</h2>
    <!-- Services -->
    <div class="flex flex-wrap justify-center p-3">
      {#each settlement.buildings as building}
        <div class="card bldg-card variant-filled-primary">
          <header class="">
            <img src="../town1-sample.jpg" class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
          </header>
          <section class="p-1 py-1">
            {building.name}
          </section>
        </div>
      {/each}
    </div>
    <!-- NPCs -->
    <div class="npc-section grid justify-center">
      {#each settlement.npcs as npc}
      <dl class="list-dl variant-filled-primary m-1 shadow-md">
        <div style="min-width: 400px;">
          <span class="badge bg-primary-500">💀</span>
          <span class="flex-auto">
            <dt>{npc.getName()}</dt>
            <dd class="text-xs">Works as {npc.job} at {npc.building.name}</dd>
          </span>
        </div>
        <!-- ... -->
      </dl>
        {/each}
    </div>
  </div>
{/each}