<script lang="ts">
    import { Button } from 'flowbite-svelte';
    import { ArrowDownOutline } from 'flowbite-svelte-icons';
    import {handleAnchorClick} from '$lib/anchorsAssist'
</script>




<div class="bg-[#C4C4C4] flex flex-col justify-center text-center py-40 p-5 w-full gap-5">
    <div class="text-3xl font-bold md:text-5xl max-w-3xl m-auto">
        Industrial & Marine Interconnect Systems
    </div>

    <div class="text-xl text-[#6B7280] max-w-3xl m-auto">
        We specialize in manufacturing industrial/marine connectors for many types of electrical control and distribution systems.
    </div>

    <Button color="none" class="bg-m-primary max-w-sm m-auto uppercase text-m-light hover:bg-primary-600 rounded text-md font-thin"
        on:click={event => handleAnchorClick(event, "main-products", 60)}
    >
        View Products <ArrowDownOutline size="lg" class="ml-2"/>
    </Button>
</div>
