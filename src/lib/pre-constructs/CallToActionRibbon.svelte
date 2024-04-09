<script>
    import { Button } from 'flowbite-svelte';

    export let bgImageUrl = '/standin/dum.png';

    
</script>

<style>

   
  .cta-box-1 {
    position: absolute;
    height:350px;
    padding: 30px 100px 30px 30px;
  }

  .cta-box-2 {
    z-index: 2;
    height:350px;
    right: 20px;
  }

  .cta-box-wrapper {
    position: relative;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  top: -70%;
  }
  
  .bg-ribbon {
      background-image: radial-gradient(circle 50vw at 30% center, #FFD705 10%, #33A34D 90%);
  }


</style>





<div class="bg-ribbon max-w-12xl m-auto h-50">
  <div class="md:flex border max-w-xl m-auto relative items-center" style="height: 350px;">
      <div class="bg-white h-[350px] w-full absolute right-[260px] z-10 -top-10 p-5 shadow-xl">
        <span class="self-center text-xl font-semibold text-[#C4C4C4] uppercase italic font-sans">Member of the Phoenix Contact Group</span>
        <h5 class="mb-2 text-4xl font-bold text-gray-900 dark:text-white">We Have Worked With This Company!</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <Button href="#" size="xl">ABOUT US</Button>
      </div>

      <div class="h-[350px] w-[500px] absolute left-[260px] z-10 top-10 shadow-xl" style="background-image: url({bgImageUrl});"></div>
  </div>  
</div>
