<script>
    import { storedWorld } from "$lib/stores.js";
    import { generateNewWorld } from '$lib/world-generator-4';
	import TownCard from '$lib/components/TownCard.svelte';
    export let data;
    console.log(data);
    function requestNewWorld(){
        storedWorld.set(generateNewWorld(genParams));
        return;
    }
    let genParams = {
		nCities: 1,
		nTowns: 3,
		questChance: {
			bounty: 0.28,
			retrieval: 0.28
		}
	};
    let world = $storedWorld;
</script>

<style>
	.macondo {
		font-family: 'Macondo', cursive;
	}
</style>

<div class="">
	<button class="variant-filled-success p-2 rounded" on:click={requestNewWorld}>Generate New World</button>
</div>
<div class="m-5 grid justify-items-center">
    <h1 class="h1 macondo">{world.name}</h1>
    <div class="flex flex-wrap justify-center">
        <TownCard />
    </div>
</div>