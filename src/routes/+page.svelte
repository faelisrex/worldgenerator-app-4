<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<style>
	.macondo {
		font-family: 'Macondo', cursive;
	}
</style>

<div class="py-8 px-10 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
	<section class="pb-10">
    <div class="">
        <div class="max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Build on top of your world's potential</h2>
            <p class="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">You're the architect of your own universe, mapping out every detail with passion. Now, meet us – your creative accomplices. We're here to fill the canvas of your world, adding characters, stories, and quests that bring your creation to life. You build the world; we'll sprinkle in the magic.</p>
						<button class="bg-green-400 dark:text-black p-2 rounded" on:click={requestNewWorld}>Generate New World</button>
        </div>
    </div>
	</section>
	{#if $storedWorld.name}
	<section>
    <h1 class="h1 macondo text-center">{$storedWorld.name}</h1>
    <div class="">
        <TownCard />
    </div>
	</section>
	{/if}
</div>


<script>
	import { generateNewWorld } from '$lib/world-generator-4';
	import TownCard from '$lib/components/TownCard.svelte';
	import { storedWorld } from "$lib/stores.js";
	let genParams = {
		nCities: 1,
		nTowns: 3,
		questChance: {
			bounty: 0.28,
			retrieval: 0.28
		}
	};


	const requestNewWorld = async () => {
		const result = await generateNewWorld(genParams);
		storedWorld.set(result);
		return;
	}
</script>