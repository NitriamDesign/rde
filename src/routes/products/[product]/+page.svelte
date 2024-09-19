<script lang="ts">
    import ProductBase from '$lib/product-page/ProductBase.svelte'
    import { products, type Product } from "$lib/data"
    import { page } from '$app/stores';
	import SeoMetaData from '$lib/pre-constructs/SeoMetaData.svelte';

    
    let currentProduct: Product = products[0];
    let currentUrl: string;
    $: currentUrl = $page.url.pathname;

    $: if (currentUrl) {
        const foundProduct = products.find(product => product.url === currentUrl);
        if (foundProduct) currentProduct = foundProduct;
    }
</script>

<svelte:head>
    <title>{currentProduct.name}</title>
    <meta name="description" content="{currentProduct.description}" />

    <!-- OpenGraph meta tags -->
    <meta property="og:title" content="{currentProduct.name}" />
    <meta property="og:description" content="{currentProduct.description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{currentUrl}" />
</svelte:head>

{#if currentProduct}
    <ProductBase product={currentProduct}/>
{/if}