<script lang="ts">
    import { Button, Dropdown, DropdownItem, Input } from "flowbite-svelte";
    import ProductBase from '$lib/pre-constructs/product-page/ProductBase.svelte'
    import { products, type Product } from "$lib/data"
    import { page } from '$app/stores';
    import { MapPinAltSolid, PhoneSolid, MessagesSolid, InfoCircleSolid, BookSolid, QuestionCircleSolid, UsersGroupSolid, BookOutline} from 'flowbite-svelte-icons';
    import { goto } from "$app/navigation";

   
    
    let currentProduct: Product = products[0];
    let currentUrl: string;
    $: currentUrl = $page.url.pathname;

    $: if (currentUrl) {
        const foundProduct = products.find(product => product.url === currentUrl);
        if (foundProduct) currentProduct = foundProduct;
    }
</script>



<!--
<div class="bg-m-primary">
    <div class="max-w-3xl flex justify-between p-4 items-center md:full md:m-auto">
        <div class="font-[500] text-white">
            {today}
        </div>

        <Button color="alternative" class="h-10 rounded"><BookOutline class="mr-3"/>Choose a Product</Button>
        
        <Dropdown>
            {#each products as product, index}
                <DropdownItem on:click={() => goto(product.url)}>{product.name}</DropdownItem>
            {/each}
        </Dropdown>
    </div>
</div>
-->

{#if currentProduct}
    <ProductBase product={currentProduct}/>
{/if}