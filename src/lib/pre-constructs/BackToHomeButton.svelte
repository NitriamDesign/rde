<!-- src/lib/components/BackToHome.svelte -->
<script>
    import { goto } from '$app/navigation';
	import { Button } from 'flowbite-svelte';
    const goHome = () => {
      goto('/');
    };
  </script>
  

  <Button color="none" class="bg-m-primary max-w-sm md:m-auto uppercase text-m-light hover:bg-primary-600 rounded text-md font-thin sticky bottom-5 right-5"
            on:click={goHome} style="position: fixed;">
            Back To Home
</Button>

        
