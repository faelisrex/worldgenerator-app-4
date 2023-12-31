<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<style>
	.macondo {
		font-family: 'Macondo', cursive;
	}
</style>


<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Let's get cracking bones!</h1>
		<p>Start by exploring:</p>
		<ul>
			<li><code class="code">/src/routes/+layout.svelte</code> - barebones layout</li>
			<li><code class="code">/src/app.postcss</code> - app wide css</li>
			<li>
				<code class="code">/src/routes/+page.svelte</code> - this page, you can replace the contents
			</li>
		</ul>
	</div>
</div>
<div class="">
	<button class="variant-filled-success p-2 rounded" on:click={requestNewWorld}>Generate New World</button>
	{#if $storedWorld.name}
    <h1 class="h1 macondo text-center">{$storedWorld.name}</h1>
    <div class="flex flex-wrap justify-center">
        <TownCard />
    </div>
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