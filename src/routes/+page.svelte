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
	<div class="m-5 grid justify-items-center">
		<h1 class="h1 macondo">{world.name}</h1>
		<div class="flex flex-wrap justify-center">
			<TownCard {world}/>
		</div>
	</div>
</div>


<script>
	import world from '../lib/world-generator-4.js'
	import TownCard from '../lib/components/TownCard.svelte';
</script>