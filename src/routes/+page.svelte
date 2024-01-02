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
	<section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-10 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Generate World</h2>
            <p class="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">Generate world description</p>
						<button class="bg-green-400 p-2 rounded" on:click={requestNewWorld}>Generate New World</button>
        </div>
    </div>
	</section>
	{#if $storedWorld.name}
    <h1 class="h1 macondo text-center">{$storedWorld.name}</h1>
    <div class="py-8 px-10 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
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