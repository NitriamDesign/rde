<script lang="ts">
    import { ChevronRightOutline } from 'flowbite-svelte-icons';
    import { type Product } from '$lib/data';

    export let product:Product;

    console.log(product);
</script>

<div class="lg:w-[400px] lg:h-[500px] flex flex-col justify-between rounded shadow-xl overflow-hidden bg-white">
    <!-- Image at the top -->

    <img src={product.mainImage} alt="Stand In" class="w-full h-[200px] object-cover">

    
    <!-- Title and description in the middle -->
    <div class="px-7 pt-7 flex-1 flex flex-col">
        <span class="text-2xl font-semibold  text-primary-500 uppercase italic font-sans">
            {product.name}
        </span>

        <span class="text-[#C4C4C4] font-bold mt-4">COMPONENT MATERIALS</span>
        
        {#if product.shell_mat}
            {#each product.shell_mat.slice(0,3) as shellmat}
                <div class="flex text-md mt-1 text-[#6B7280]">
                    <div class="text-dark font-bold mr-1">{shellmat.simple_title ? shellmat.simple_title : shellmat.title}:</div>
                    <div class="max-w-48 sm:max-w-[999px]">{shellmat.description}</div>
                </div>
            {/each}
        {/if}
    </div>

    <!-- View Item at the bottom -->
    <a class="px-7 pb-10 text-xl flex items-center justify-end text-primary-500 hover:text-primary-600 font-bold " href={product.url}>
        View <ChevronRightOutline class="ml-2" />
    </a>
</div>
