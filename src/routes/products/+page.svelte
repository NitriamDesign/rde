<script lang="ts">
    import { Button, Dropdown, DropdownItem, Heading, Span } from "flowbite-svelte";
    import ProductBase from '$lib/product-page/ProductBase.svelte'
    import { products, type Product } from "$lib/data";
    import { page } from '$app/stores';
    import { ChevronRightOutline } from 'flowbite-svelte-icons';
    import { writable } from 'svelte/store';
	import { goto } from "$app/navigation";

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


<Heading tag="h2" class="max-w-6xl m-auto flex items-center md:mt-12 mt-10 w-[95%] md:w-full" customSize="text-3xl font-extrabold  md:text-4xl lg:text-4xl">
    <Span gradient gradientClass="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary2-700">Explore All Products</Span>
</Heading>

<div class="max-w-6xl m-auto mt-10 px-4 xl:p-0">
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
            <div class="p-4 shadow-xl flex flex-col justify-between hover:scale-[101%] transition border-[1px] rounded">
                <div>
                    <a href={product.url} class="cursor-pointer">
                        <img src={product.mainImage} alt={product.name} class="hover:opacity-90">
                    </a>

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
