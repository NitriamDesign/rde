<script lang="ts">
    import { products } from '$lib/data';
    import { Button, ButtonGroup, Heading } from 'flowbite-svelte';
    import { flip } from 'svelte/animate';
    import { fade } from 'svelte/transition';
    import ProductCard from './ProductCard.svelte';

    let selectedButton = 'all';
    let selected = "bg-m-primary hover:bg-primary-600 text-white";

    let maxDisplayed = 6;
    
    $: filteredProducts = selectedButton === 'all' ? products : products.filter(product => product.category === selectedButton);
    // Adding the button function
    function loadMore() {
        maxDisplayed += 3;
    }
</script>

<div class="bg-m-light max-w-7xl m-auto my-20 min-h-[450px]" id="main-products">
    <!-- Menu -->

        <div class="justify-start gap-10 md:flex block md:p-0 p-4">
            <Heading tag="h2" color='text-primary-500' class="flex items-center " customSize="text-3xl font-extrabold  md:text-4xl lg:text-4xl md:mb-0 mb-4">
                View our Connectors, Cables & Tools
            </Heading>
            
            <ButtonGroup divClass="inline-flex md:rounded-lg md:shadow-sm md:flex-none flex-wrap p-2 gap-2 md:gap-0 md:p-0 md:shadow-none">
                <Button color="none" class="border-2 max-w-sm uppercase rounded-md text-md font-bold md:mr-2 md:rounded-r-none {selectedButton === 'all' ? selected : ''}" on:click={() => selectedButton = 'all'}>
                    All
                </Button>

                <Button color="none" class="{`border-2 max-w-sm uppercase text-md rounded-md font-bold md:rounded-none ${selectedButton === 'M23' ? selected : ''}`}" on:click={() => selectedButton = 'M23'}>
                    M23
                </Button>

                <Button color="none" class="{`border-2 max-w-sm uppercase text-md rounded-md font-bold md:rounded-none ${selectedButton === 'M17/M27' ? selected : ''}`}" on:click={() => selectedButton = 'M17/M27'}>
                    M17/M27
                </Button>
                
                <Button color="none" class="{`border-2 max-w-sm uppercase text-md rounded-md font-bold md:rounded-none ${selectedButton === 'M40/M58' ? selected : ''}`}" on:click={() => selectedButton = 'M40/M58'}>
                    M40/M58
                </Button>
            </ButtonGroup>
        </div>



    <!-- Products -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-20 md:mt-10 justify-items-center">
        {#each filteredProducts.slice(0, maxDisplayed) as product (product.name)}
            <!-- updated timing for smoother transition -->
            <div animate:flip={{ duration: 250 }} transition:fade={{ duration: 500, delay: 100 }}>
                <ProductCard product={product}/>
            </div>
        {/each}
    </div>
    <!-- added functionality for load more button -->
    {#if maxDisplayed < filteredProducts.length}
        <div class="flex justify-center mt-10">
            <Button on:click={loadMore} class="bg-primary-500 text-white font-bold py-2 px-4 rounded">
                Load More
            </Button>
        </div>
    {/if}
</div>