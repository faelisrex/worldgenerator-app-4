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
<div class="grid m-5">
	<h1 class="h1 text-primary-500">{world.name}</h1>
	{#each world.settlements as settlement}
		<div class="card p-2 my-1">
			<h2 class="h4 text-tertiary-500 py-1">{settlement.type} of {settlement.name}</h2>
				{#each settlement.npcs as npc}
					<div class="m-2">
						<p class=""><span id='{npc.id}'class="text-primary-400">{npc.getName()}</span> works as {npc.job} at {npc.building.name}</p>
						{#each npc.quests as quest}
							{#if quest.type === 'Bounty'}
								<p class="">Q: {getRandomEl(['Needs help in stopping', 'Wants to stop'])} <a href="#{quest.targetNpc.id}" class="text-primary-500 anchor">{quest.targetNpc.getName()}</a> 
									in the {quest.targetNpc.building.name} 
									({quest.targetNpc.type ==='Townfolk'? 'in':'near'}
									{quest.targetNpc.location.name}) by {getRandomEl(quest.verbs)}.
								</p>
							{/if}
							{#if quest.type === 'Retrieval'}
								<p>Q: Wants to find their {quest.targetItem.name}. 
									<span class="text-xs text-primary-300">
										It is with 
										<a href="#{quest.targetItem.inThePocketsOf.id}" class="text-primary-500 anchor"> {quest.targetItem.inThePocketsOf.getName()}</a>
										{quest.targetItem.inThePocketsOf.type === 'Townfolk'? 'in' : 'near'}
										{quest.targetItem.inThePocketsOf.location.name}.
									</span>
								</p>
							{/if}
						{/each}
					</div>
				{/each}
				{#if settlement.pois.length}
				<div>
					<h3 class="h3">Nearby Locations</h3>
					<div class="flex">
						{#each settlement.pois as poi}
						<div class="m-5">
							<p>{poi.name}</p>
							{#if poi.isOccupied}
								<p>Occupied by {poi.npc.getName()}</p>
							{/if}
						</div>
						{/each}
					</div>
				</div>
				{/if}
		</div>
	{/each}
</div>

<script>
	import { getRandomEl } from '../lib/utils/math-functions.js';
	import world from '../lib/world-generator-4.js'
</script>