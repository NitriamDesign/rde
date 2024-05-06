<script lang="ts">
    import { Button, ButtonGroup, Heading, NavHamburger, NavLi, NavUl, Navbar, Span  } from 'flowbite-svelte';
    import ProductCard from './ProductCard.svelte';
    import { fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import { type Product, products } from '$lib/data';



    let selectedButton = 'all';
    let selected = "bg-m-primary hover:bg-primary-600 text-white";

    let maxDisplayed = 6;
    


    $: filteredProducts = selectedButton === 'all' ? products : products.filter(product => product.category === selectedButton);
    

</script>

<div class="bg-m-light max-w-7xl m-auto my-20 min-h-[450px]" id="main-products">
    <!-- Menu -->

    <!-- Desktop View -->
        <div class="justify-start gap-10 md:flex block md:p-0 p-4">
            <Heading tag="h2" color='text-primary-500' class="flex items-center " customSize="text-3xl font-extrabold  md:text-4xl lg:text-4xl md:mb-0 mb-4">
                View our Connectors, Cables & Tools
            </Heading>
            
            <ButtonGroup divClass="inline-flex md:rounded-lg md:shadow-sm md:flex-none flex-wrap p-2 gap-2 md:gap-0 md:p-0 md:shadow-none">
                <Button color="none" class="border-2 max-w-sm uppercase rounded-md text-md font-bold md:mr-2 md:rounded-r-none {selectedButton === 'all' ? selected : ''}" on:click={() => selectedButton = 'all'}>
                    All
                </Button>

                <Button color="none" class="{`border-2 max-w-sm uppercase text-md rounded-md font-bold md:rounded-none ${selectedButton === 'connector' ? selected : ''}`}" on:click={() => selectedButton = 'connector'}>
                    Connectors
                </Button>

                <Button color="none" class="{`border-2 max-w-sm uppercase text-md rounded-md font-bold md:rounded-none ${selectedButton === 'cable' ? selected : ''}`}" on:click={() => selectedButton = 'cable'}>
                    Cables
                </Button>
                
                <Button color="none" class="{`border-2 max-w-sm uppercase text-md rounded-md font-bold md:rounded-none ${selectedButton === 'tool' ? selected : ''}`}" on:click={() => selectedButton = 'tool'}>
                    Tools
                </Button>
            </ButtonGroup>
        </div>



    <!-- Products -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-20 md:mt-10 justify-items-center">
        {#each filteredProducts.slice(0, maxDisplayed) as product (product.name)}
            <div animate:flip={{ duration: 250 }} transition:fade={{ duration: 250 }}>
                <ProductCard product={product}/>
            </div>
        {/each}
    </div>
</div>
