<script>
    import { Button } from 'flowbite-svelte';

    export let bgImageUrl = '/standin/dum.png';

    
</script>

<style>
  .bg-ribbon {
      background-image: radial-gradient(circle 50vw at 30% center, #FFFD50 10%, #33A34D 90%);
  }
</style>


<div class="bg-ribbon w-full mt-[8%] md:mb-[12%] mb-[50%]">
  <div class="lg:flex lg:w-[30%] w-full m-auto relative items-center" style="height: 250px;">
      <div class="lg:h-[325px] lg:absolute lg:right-[47%] lg:w-[564px] bg-white w-[80%] md:w-[50%] relative m-auto z-10 -top-6 p-10 lg:pr-[4rem] shadow-xl">
        <span class="self-center text-xl font-semibold text-[#C4C4C4] uppercase italic font-sans">RDE Conntectors & Cables Inc</span>
        <h5 class="mb-2 text-4xl font-bold text-gray-900 dark:text-white">Competent Solutions & Reliable Service</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Providing product quality and reliability of interconnect systems and assemblies for automation control in demanding and challenging industries.</p>
        <Button href="/about" size="xl">ABOUT US</Button>
      </div>

      <div class="lg:h-[325px] w-[800px] lg:left-[47%] relative z-10 top-[70px] shadow-xl lg:visible invisible">
        <img src="{bgImageUrl}" class="h-full w-full object-cover" alt="">
      </div>
  </div>  
</div>

