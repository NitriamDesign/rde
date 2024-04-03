<script>
    import { Button, ButtonGroup } from 'flowbite-svelte';
    import ProductCard from './ProductCard.svelte';
    import { fade } from 'svelte/transition';

    let selectedButton = 'all';
    let selected = "bg-m-primary hover:bg-primary-600 text-white";
    
    let products = [
        { id: 1, category: '1', title: 'CA Series Connectors 1' },
        { id: 2, category: '2', title: 'CA Series Connectors 2' },
        { id: 3, category: '3', title: 'CA Series Connectors 3' },
    ];
</script>

<div class="bg-m-light max-w-7xl m-auto my-20">
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
    <div class="flex flex-wrap justify-between mt-10">
        {#each products as product}
            {#if selectedButton === 'all' || product.category === selectedButton}
                <div transition:fade={{ duration: 500 }}>
                    <ProductCard>
                        <svelte:fragment slot="title">
                            {product.title}
                        </svelte:fragment>
                    </ProductCard>
                </div>
            {/if}
        {/each}
    </div>
</div>
