<script lang="ts">
    import { handleAnchorClick } from '$lib/anchorsAssist';
    import { Button } from 'flowbite-svelte';
    import { ArrowDownOutline } from 'flowbite-svelte-icons';


</script>

<div class="bg-[url('/images/top-hero-v2.jpg')] h-[600px] flex justify-center items-center p-3 bg-cover">
    <div class="flex flex-col justify-center md:text-center p-5 bg-white bg-opacity-55 md:w-[800px]  md:h-[60%]">
        <div class="text-4xl font-bold md:text-5xl max-w-3xl m-auto mb-3">
            RDE Connectors & Cables, Inc.
        </div>

        <div class="md:text-2xl text-xl drop-shadow-sm font-semibold text-primary-500 uppercase italic font-sans">
            Making the Right Connections is our Specialty
        </div>


        <div class="text-xl max-w-3xl drop-shadow-sm text-gray-600 font-medium m-auto md:px-[100px] mt-2 mb-5">
            Manufacturer and distributor of industrial connector systems and cable assemblies
        </div>

        <Button color="none" class="bg-m-primary max-w-sm md:m-auto uppercase text-m-light hover:bg-primary-600 rounded text-md font-thin"
            on:click={event => handleAnchorClick(event, "main-products", 60)}>
            View Products <ArrowDownOutline size="lg" class="ml-2"/>
        </Button>
    </div>
</div>