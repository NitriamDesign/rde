<script>
    import { Button } from 'flowbite-svelte';

    export let bgImageUrl = '/standin/dum.png';

    
</script>

<div class="bg-ribbon flex justify-center items-center relative">
    <div class="cta-box-1 bg-white shadow-xl absolute" >
        <span class="self-center whitespace-nowrap text-xl font-semibold text-[#C4C4C4] uppercase italic font-sans">Member of the phoenix contact group</span>
        <h5 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">We Have Worked With This Company!</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <Button href="#" size="xl">ABOUT US</Button>
    </div>
    <div class="cta-box-2 bg-white shadow-xl absolute" style="background-image: url({bgImageUrl});"></div>
</div>
  
  <style>

   
    .cta-box-1 {
      position: absolute;
      height: 350px;
      width: 700px;
      left: 14%;
      padding: 30px 100px 30px 30px;
    }

    .cta-box-2 {
      position: absolute;
      height: 18.23vw;
      width: 36.46vw;
      left: calc(38% + 10vw);
      top: 20%;
      z-index: 2;
    }
    
    .bg-ribbon {
        position: relative;
        height: 250px;
        background-color: blueviolet;
        margin: 120px 0px 120px 0px;
        background-image: radial-gradient(circle 50vw at 30% center, #FFD705 10%, #33A34D 90%);
    }
  </style>