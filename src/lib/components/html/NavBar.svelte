<script>
  import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<style>
nav {
  position: fixed;
  top: 0;
  width: 100%; 
}
  
</style>

<nav class="flex justify-between p-4 bg-primary-400 text-black dark:bg-slate-900 dark:text-white">
  <div>
    <a href="/">
      <h3 class="h3">World Generator</h3>
    </a>
  </div>
  <ul class="flex list-none items-center">
    <li class="pr-5"><LightSwitch /></li>
    <li class="pr-5"><a href="/about">About</a></li>
  </ul>
</nav>