<script>
  export let settlement;
</script>

<h4 class="h4 text-center pt-1"  id="{settlement.id}">Interesting people</h4>
    <div class="flex flex-wrap justify-center">
      {#each settlement.npcs as npc}
      <div class="variant-filled-primary card-hover shadow w-[300px] p-1 cursor-pointer">
        <div class="flex">
          <img src="../randomPerson1.jpg" alt="" class="rounded-full w-12 h-12" />
          <div class="flex flex-col pl-1">
            <span id="{npc.id}" class="font-semibold">{npc.getName()}</span>
            <span class="text-xs tracking-tight line-clamp-1">Works as {npc.job} at {npc.building.name}</span>
          </div>
        </div>
      </div>
      {/each}
    </div>