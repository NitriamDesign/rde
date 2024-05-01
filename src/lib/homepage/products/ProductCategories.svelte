<script lang="ts">
    import { Button, ButtonGroup, Heading, NavHamburger, NavLi, NavUl, Navbar, Span  } from 'flowbite-svelte';
    import ProductCard from './ProductCard.svelte';
    import { fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import { type Product } from '$lib/data';

    let products: Product[];

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
                <Button color="none" class="{`border-2 max-w-sm uppercase text-md font-bold ${selectedButton === '1' ? selected : ''}`}" on:click={() => selectedButton = '1'}>
                    Connectors
                </Button>
                <Button color="none" class="{`border-2 max-w-sm uppercase text-md font-bold ${selectedButton === '2' ? selected : ''}`}" on:click={() => selectedButton = '2'}>
                    Cables
                </Button>
                <Button color="none" class="{`border-2 max-w-sm uppercase text-md font-bold ${selectedButton === '3' ? selected : ''}`}" on:click={() => selectedButton = '3'}>
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
                <NavLi class="{selectedButton === '1' ? selected : ''}" on:click={() => selectedButton = '1'}>Connectors</NavLi>
                <NavLi class="{selectedButton === '2' ? selected : ''}" on:click={() => selectedButton = '2'}>Cables</NavLi>
                <NavLi class="{selectedButton === '3' ? selected : ''}" on:click={() => selectedButton = '3'}>Tools</NavLi>
            </NavUl>
        </Navbar>
    </div>


    <!-- Products -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10 justify-items-center">
        {#each filteredProducts.slice(0, 6) as product (product.name)}
            <div animate:flip={{ duration: 250 }} transition:fade={{ duration: 250 }}>
                <ProductCard url={product.title}>
                    <svelte:fragment slot="title">
                        {product.name}
                    </svelte:fragment>
                    <svelte:fragment slot="desc1">
                        {product.shell_mat[0].description}
                    </svelte:fragment>
                    <svelte:fragment slot="desc2">
                        {product.shell_mat[1].description}
                    </svelte:fragment>
                    <svelte:fragment slot="desc3">
                        {product.shell_mat[2].description}
                    </svelte:fragment>
                    <!--
                    <svelte:fragment slot="image">
                        {product.img}
                    </svelte:fragment>
                    -->
                </ProductCard>
            </div>
        {/each}
    </div>
</div>
