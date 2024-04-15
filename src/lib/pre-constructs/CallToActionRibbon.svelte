<script>
    import { Button } from 'flowbite-svelte';

    export let bgImageUrl = '/standin/dum.png';

    
</script>

<style>
  .bg-ribbon {
      background-image: radial-gradient(circle 50vw at 30% center, #FFD705 10%, #33A34D 90%);
  }
</style>


<div class="bg-ribbon w-full mt-[5%] mb-[10%]">
  <div class="lg:flex lg:w-[30%] w-full m-auto relative items-center" style="height: 250px;">
      <div class="lg:h-[325px] lg:absolute lg:right-[47%] lg:w-[564px] bg-white w-[80%] md:w-[50%] relative m-auto z-10 -top-6 p-10 lg:pr-[4rem] shadow-xl">
        <span class="self-center text-xl font-semibold text-[#C4C4C4] uppercase italic font-sans">Member of the Phoenix Contact Group</span>
        <h5 class="mb-2 text-4xl font-bold text-gray-900 dark:text-white">We Have Worked With This Company!</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <Button href="#" size="xl">ABOUT US</Button>
      </div>

      <div class="lg:h-[325px] lg:left-[47%] w-full relative z-10 top-[70px] shadow-xl lg:visible invisible" style="background-image: url({bgImageUrl});"></div>
  </div>  
</div>

