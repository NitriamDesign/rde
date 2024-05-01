<script lang="ts">
    import { Button, ButtonGroup, Heading, NavHamburger, NavLi, NavUl, Navbar, Span  } from 'flowbite-svelte';
    import ProductCard from './ProductCard.svelte';
    import { fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import { type Product, products } from '$lib/data';



    let selectedButton = 'all';
    let selected = "bg-m-primary hover:bg-primary-600 text-white";

    const maxDisplayed = 6;
    


    $: filteredProducts = selectedButton === 'all' ? products : products.filter(product => product.category === selectedButton);
    

</script>

<div class="bg-m-light max-w-7xl m-auto my-20 min-h-[450px]" id="main-products">
    <!-- Menu -->

    <!-- Desktop View -->
        <div class="justify-start gap-10 hidden md:flex">
            <Heading tag="h2" class="flex items-center " customSize="text-3xl font-extrabold  md:text-4xl lg:text-4xl">
                <Span gradient gradientClass="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary2-700">View our Connectors, Cables & Tools</Span>
            </Heading>

            <Button color="none" class="border-2 max-w-sm uppercase rounded-md text-md font-bold {selectedButton === 'all' ? selected : ''}" on:click={() => selectedButton = 'all'}>
                All
            </Button>
            
            <ButtonGroup>
                <Button color="none" class="{`border-2 max-w-sm uppercase text-md font-bold ${selectedButton === '1' ? selected : ''}`}" on:click={() => selectedButton = 'connector'}>
                    Connectors
                </Button>
                <Button color="none" class="{`border-2 max-w-sm uppercase text-md font-bold ${selectedButton === '2' ? selected : ''}`}" on:click={() => selectedButton = 'cable'}>
                    Cables
                </Button>
                <Button color="none" class="{`border-2 max-w-sm uppercase text-md font-bold ${selectedButton === '3' ? selected : ''}`}" on:click={() => selectedButton = 'tool'}>
                    Tools
                </Button>
            </ButtonGroup>
        </div>

    <!-- Mobile View --> 
    <div class="justify-start gap-10 md:hidden flex">
        <Navbar>
            <NavHamburger/>
            <NavUl >
                <NavLi class="{selectedButton === 'all' ? selected : ''}" on:click={() => selectedButton = 'all'}>ALL</NavLi>
                <NavLi class="{selectedButton === 'connector' ? selected : ''}" on:click={() => selectedButton = 'connector'}>Connectors</NavLi>
                <NavLi class="{selectedButton === 'cable' ? selected : ''}" on:click={() => selectedButton = 'cable'}>Cables</NavLi>
                <NavLi class="{selectedButton === 'tool' ? selected : ''}" on:click={() => selectedButton = 'tool'}>Tools</NavLi>
            </NavUl>
        </Navbar>
    </div>


    <!-- Products -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10 justify-items-center">
        {#each filteredProducts.slice(0, 6) as product (product.name)}
            <div animate:flip={{ duration: 250 }} transition:fade={{ duration: 250 }}>
                <ProductCard product={product}/>
            </div>
        {/each}
    </div>
</div>
