<script>
    import { Button, ButtonGroup, Heading, NavHamburger, NavLi, NavUl, Navbar, Span  } from 'flowbite-svelte';
    import ProductCard from './ProductCard.svelte';
    import { fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';

    let selectedButton = 'all';
    let selected = "bg-m-primary hover:bg-primary-600 text-white";
    /* TEMPORARY, DO NOT DELET YET THO */

    const maxDisplayed = 6;

    let products = [
        { id: 1, category: '1', title: 'CA Series Connectors', desc1: "Copper-Zinc alloy (CuZn)", desc2:"Zinc (GD-Zn)", desc3: "Nickel (Ni) plated", img: '' },
        { id: 2, category: '1', title: 'HC Series Connectors',  desc1: "Copper-Zinc alloy (CuZn)", desc2:"Zinc (GD-Zn)", desc3: "Nickel (Ni) plated", img: '' },
        { id: 3, category: '1', title: 'RC Series Connectors',  desc1: "Copper-Zinc alloy (CuZn)", desc2:"Zinc (GD-Zn)", desc3: "Nickel (Ni) plated", img: '' },
        { id: 4, category: '1', title: 'RF Series Connectors',  desc1: "Copper-Zinc alloy (CuZn)", desc2:"Zinc (GD-Zn)", desc3: "Nickel (Ni) plated", img: '' },
        { id: 5, category: '1', title: 'SF Series Connectors',  desc1: "Copper-Zinc alloy (CuZn)", desc2:"Zinc (GD-Zn)", desc3: "Nickel (Ni) plated", img: '' },
        { id: 6, category: '1', title: 'SH Series Connectors',  desc1: "Copper-Zinc alloy (CuZn)", desc2:"Zinc (GD-Zn)", desc3: "Nickel (Ni) plated", img: '' },
        { id: 7, category: '2', title: 'SL Series Connectors',  desc1: "Copper-Zinc alloy (CuZn)", desc2:"Zinc (GD-Zn)", desc3: "Nickel (Ni) plated", img: '' },
        { id: 8, category: '2', title: 'SM Series Connectors',  desc1: "Copper-Zinc alloy (CuZn)", desc2:"Zinc (GD-Zn)", desc3: "Nickel (Ni) plated", img: '' },
        { id: 9, category: '2', title: 'SSR Series Connectors',  desc1: "Copper-Zinc alloy (CuZn)", desc2:"Zinc (GD-Zn)", desc3: "Nickel (Ni) plated", img: '' },
        { id: 10, category: '3', title: 'ST Series Connectors',  desc1: "Copper-Zinc alloy (CuZn)", desc2:"Zinc (GD-Zn)", desc3: "Nickel (Ni) plated", img: '' },
        { id: 11, category: '3', title: 'TU Series Connectors',  desc1: "Copper-Zinc alloy (CuZn)", desc2:"Zinc (GD-Zn)", desc3: "Nickel (Ni) plated", img: '' },
        { id: 12, category: '3', title: 'UC Series Connectors',  desc1: "Copper-Zinc alloy (CuZn)", desc2:"Zinc (GD-Zn)", desc3: "Nickel (Ni) plated", img: '' }
    ];

    


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
        {#each filteredProducts.slice(0, 6) as product (product.id)}
            <div animate:flip={{ duration: 250 }} transition:fade={{ duration: 250 }}>
                <ProductCard url={product.title}>
                    <svelte:fragment slot="title">
                        {product.title}
                    </svelte:fragment>
                    <svelte:fragment slot="desc1">
                        {product.desc1}
                    </svelte:fragment>
                    <svelte:fragment slot="desc2">
                        {product.desc2}
                    </svelte:fragment>
                    <svelte:fragment slot="desc3">
                        {product.desc3}
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
