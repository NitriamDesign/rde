<script lang="ts">
    import { Button, Dropdown, DropdownItem } from "flowbite-svelte";
    import ProductBase from '$lib/product-page/ProductBase.svelte'
    import { products, type Product } from "$lib/data";
    import { page } from '$app/stores';
    import { ChevronRightOutline } from 'flowbite-svelte-icons';
    import { writable } from 'svelte/store';

    const sortOptions = ["Name", "Title", "Category"];
    let selectedSortOption = writable("Name");
    let sortedProducts = writable([...products]);

    selectedSortOption.subscribe(value => {
        sortProducts(value);
    });

    function sortProducts(criteria: string) {
        let sortedArray = [...products];
        if (criteria === "Name") {
            sortedArray.sort((a, b) => a.name.localeCompare(b.name));
        } else if (criteria === "Title") {
            sortedArray.sort((a, b) => a.title.localeCompare(b.title));
        } else if (criteria === "Category") {
            sortedArray.sort((a, b) => a.category.localeCompare(b.category));
        }
        sortedProducts.set(sortedArray);
    }
</script>

<div class="max-w-6xl m-auto mt-20 px-4 xl:p-0">
    <Button color="alternative">
        Sort By: {$selectedSortOption}
    </Button>
    
    <Dropdown>
        {#each sortOptions as option}
            <DropdownItem on:click={() => selectedSortOption.set(option)}>
                {option}
            </DropdownItem>
        {/each}
    </Dropdown>
</div>

<div class="max-w-6xl m-auto mt-10 px-4 xl:p-0">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {#each $sortedProducts as product, index}
            <div class="p-4 shadow-xl flex flex-col justify-between">
                <div>
                    <img src={product.mainImage} alt={product.name}>
                    <div class="text-m-primary font-semibold mt-2">{product.name}</div>
                    <div class="font-thin mt-2 text-sm">{product.description.slice(0,100)}...</div>
                </div>
                <a class="text-lg flex items-center justify-end text-primary-500 hover:text-primary-600 font-bold" href={product.url}>
                    View <ChevronRightOutline class="ml-2" />
                </a>            
            </div>
        {/each}
    </div>
</div>
