<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

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
<div>
	<h1 class="h1 text-primary-500">{world.name}</h1>
	{#each world.settlements as settlement}
		<div class="card p-2">
			<h2 class="h4 text-tertiary-500 py-1">{settlement.type} of {settlement.name}</h2>
				{#each settlement.npcs as npc}
					<div class="m-2">
						<p class=""><span id='{npc.id}'class="text-primary-400">{npc.getName()}</span> works as {npc.job} at {npc.building.name}</p>
						{#each npc.quests as quest}
							{#if quest.type === 'Bounty'}
								<p class="">Q: {getRandomEl(['Needs help', 'Wants'])} to {getRandomEl(quest.verbs)} <a href="#{quest.targetNpc.id}" class="text-primary-500 anchor">{quest.targetNpc.getName()}</a> in {quest.targetNpc.location.name}</p>
							{/if}
						{/each}
					</div>
				{/each}
		</div>
	{/each}
</div>

<script>
	import { getRandomEl } from '../lib/utils/math-functions.js';
	import world, { Quest } from '../lib/world-generator-4.js'
</script>