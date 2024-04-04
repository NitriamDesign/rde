<script>
    import { Button, ButtonGroup } from 'flowbite-svelte';
    import ProductCard from './ProductCard.svelte';
    import { fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';

    let selectedButton = 'all';
    let selected = "bg-m-primary hover:bg-primary-600 text-white";
    
    let products = [
        { id: 1, category: '1', title: 'CA Series Connectors UCG-3' },
        { id: 2, category: '1', title: 'CA Series Connectors Lite' },
        { id: 3, category: '1', title: 'CA Series Connectors Xtreme' },
        { id: 4, category: '2', title: 'FlexiConnect PowerPlus' },
        { id: 5, category: '2', title: 'FlexiConnect Straight' },
        { id: 6, category: '3', title: 'GoldConnect Class B' },
    ];


    $: filteredProducts = selectedButton === 'all' ? products : products.filter(product => product.category === selectedButton);

</script>

<div class="bg-m-light max-w-7xl m-auto my-20 min-h-[450px]" id="main-products">
    <!-- Menu -->
    <div class="flex justify-start gap-10">
        <Button color="none" class="border-2 max-w-sm uppercase rounded-md text-md font-bold {selectedButton === 'all' ? selected : ''}" on:click={() => selectedButton = 'all'}>
            All Products
        </Button>
        <ButtonGroup>
            <Button color="none" class="{`border-2 max-w-sm uppercase text-md font-bold ${selectedButton === '1' ? selected : ''}`}" on:click={() => selectedButton = '1'}>
                Category 1
            </Button>
            <Button color="none" class="{`border-2 max-w-sm uppercase text-md font-bold ${selectedButton === '2' ? selected : ''}`}" on:click={() => selectedButton = '2'}>
                Category 2
            </Button>
            <Button color="none" class="{`border-2 max-w-sm uppercase text-md font-bold ${selectedButton === '3' ? selected : ''}`}" on:click={() => selectedButton = '3'}>
                Category 3
            </Button>
        </ButtonGroup>
    </div>

    <!-- Products -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-10 justify-items-center">
        {#each filteredProducts as product (product.id)}
            <div animate:flip={{ duration: 250 }} transition:fade={{ duration: 250 }}>
                <ProductCard>
                    <svelte:fragment slot="title">
                        {product.title}
                    </svelte:fragment>
                </ProductCard>
            </div>
        {/each}
    </div>
</div>
