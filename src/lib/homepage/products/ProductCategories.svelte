<script>
    import { Button, ButtonGroup, NavHamburger, NavLi, NavUl, Navbar  } from 'flowbite-svelte';
    import ProductCard from './ProductCard.svelte';
    import { fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';

    let selectedButton = 'all';
    let selected = "bg-m-primary hover:bg-primary-600 text-white";
    
    let products = [
        { id: 1, category: '1', title: 'CA Series Connectors', desc: "Copper-Zinc alloy (CuZn) <br>die cast components: Zinc (GD-Zn) Shell plating: Nickel (Ni) plated Cable entry: max. 14.5 mm", img: '' },
        { id: 2, category: '1', title: 'HC Series Connectors',  desc: '', img: '' },
        { id: 3, category: '1', title: 'RC Series Connectors',  desc: '', img: '' },
        { id: 4, category: '1', title: 'RF Series Connectors',  desc: '', img: '' },
        { id: 5, category: '1', title: 'SF Series Connectors',  desc: '', img: '' },
        { id: 6, category: '1', title: 'SH Series Connectors',  desc: '', img: '' },
        { id: 7, category: '1', title: 'SL Series Connectors',  desc: '', img: '' },
        { id: 8, category: '1', title: 'SM Series Connectors',  desc: '', img: '' },
        { id: 9, category: '1', title: 'SSR Series Connectors',  desc: '', img: '' },
        { id: 10, category: '1', title: 'ST Series Connectors',  desc: '', img: '' },
        { id: 11, category: '1', title: 'TU Series Connectors',  desc: '', img: '' },
        { id: 12, category: '1', title: 'UC Series Connectors',  desc: '', img: '' }
    ];


    $: filteredProducts = selectedButton === 'all' ? products : products.filter(product => product.category === selectedButton);

</script>

<div class="bg-m-light max-w-7xl m-auto my-20 min-h-[450px]" id="main-products">
    <!-- Menu -->

    <!-- Desktop View -->
        <div class="justify-start gap-10 hidden md:flex">
            <Button color="none" class="border-2 max-w-sm uppercase rounded-md text-md font-bold {selectedButton === 'all' ? selected : ''}" on:click={() => selectedButton = 'all'}>
                All Products
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
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-10 justify-items-center">
        {#each filteredProducts as product (product.id)}
            <div animate:flip={{ duration: 250 }} transition:fade={{ duration: 250 }}>
                <ProductCard>
                    <svelte:fragment slot="title">
                        {product.title}
                    </svelte:fragment>
                    <svelte:fragment slot="desc">
                        {product.desc}
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
