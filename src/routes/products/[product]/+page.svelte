<script lang="ts">
    import ProductBase from '$lib/product-page/ProductBase.svelte'
    import { products, type Product } from "$lib/data"
    import { page } from '$app/stores';

    
    let currentProduct: Product = products[0];
    let currentUrl: string;
    $: currentUrl = $page.url.pathname;

    $: if (currentUrl) {
        const foundProduct = products.find(product => product.url === currentUrl);
        if (foundProduct) currentProduct = foundProduct;
    }
</script>

{#if currentProduct}
    <ProductBase product={currentProduct}/>
{/if}