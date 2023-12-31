<script>
    // export let data;
    import { storedWorld } from "$lib/stores.js";
	import TownCard from '$lib/components/TownCard.svelte';

    let world;
    storedWorld.subscribe(value=>{
        world = value;
    })

</script>

<style>
	.macondo {
		font-family: 'Macondo', cursive;
	}
</style>

<div class="m-5 grid justify-items-center">
    <h1 class="h1 macondo">{world.name}</h1>
    <div class="flex flex-wrap justify-center">
        <TownCard />
    </div>
</div>