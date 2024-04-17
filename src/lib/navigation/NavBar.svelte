<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, MegaMenu, Button } from 'flowbite-svelte';
    import { products } from '$lib/data';
	import { ChevronDoubleDownOutline } from 'flowbite-svelte-icons';
    import { fade } from 'svelte/transition';
    import MiniCard from '$lib/homepage/products/MiniCard.svelte';
    import ProductPills from '$lib/homepage/products/ProductPills.svelte';

    let megeMenuOpen = false;

    function toggleMega() {
        megeMenuOpen = !megeMenuOpen;
    }

    function closeMega() {
        megeMenuOpen = false;
    }


    function openMega() {
        megeMenuOpen = true;
    }
</script>

<!-- Hello -->
<Navbar class="">
    <NavBrand href="/" class="p-0 px-0">
        <img src="/logos/rde-main-logo.jpg"  class="pt-5 pb-5 h-36 md:inline hidden" alt="Flowbite Logo" />
        <img src="/logos/rde-logo.png"  class="h-12 pl-1 md:hidden inline" alt="Flowbite Logo" />
    </NavBrand>

    <NavHamburger/>

    <NavUl>
        <NavLi class="font-semibold text-lg" href="/">Home</NavLi>
        <NavLi class="font-semibold text-lg cursor-pointer flex items-center gap-2" on:mouseenter={openMega}>Products <ChevronDoubleDownOutline size="sm"/></NavLi>
        <NavLi class="font-semibold text-lg" href="/guides">Guides</NavLi>
        <NavLi class="font-semibold text-lg" href="/about">About</NavLi>
        <NavLi class="font-semibold text-lg" href="/contact">Contact</NavLi>
    </NavUl>
</Navbar>

{#if megeMenuOpen}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="h-fit max-w-3xl border-2 bg-white absolute right-36 p-2 shadow-xl rounded" transition:fade on:mouseleave={closeMega}>
        <div class="grid grid-cols-3 gap-4">
            {#each products.slice(0,9) as product}
                <ProductPills product={product} on:click={(closeMega)}/>
            {/each}
        </div>

        <div class="flex justify-left mb-4 mt-3">
            <Button color="none" class="bg-m-primary max-w-sm uppercase text-m-light hover:bg-primary-600 rounded text-md font-thin" href="/products">
                Explore All Products
            </Button>
        </div>
    </div>
{/if}

