<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, MegaMenu, Button } from 'flowbite-svelte';
    import { products } from '$lib/data';
	import { ChevronDoubleDownOutline } from 'flowbite-svelte-icons';
    import { fade } from 'svelte/transition';
    import MiniCard from '$lib/homepage/products/MiniCard.svelte';

    let megeMenuOpen = true;

    function toggleMega() {
        megeMenuOpen = !megeMenuOpen;
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
        <NavLi class="font-semibold text-lg cursor-pointer flex items-center gap-2" on:click={(toggleMega)}>Products <ChevronDoubleDownOutline size="sm"/></NavLi>
        <NavLi class="font-semibold text-lg" href="/guides">Guides</NavLi>
        <NavLi class="font-semibold text-lg" href="/about">About</NavLi>
        <NavLi class="font-semibold text-lg" href="/contact">Contact</NavLi>
    </NavUl>
</Navbar>

{#if megeMenuOpen}
    <div class="h-fit w-full border-t-2 border-b-2 bg-white absolute p-2" transition:fade>
        <div class="max-w-7xl m-auto ">
            <div class="text-xl font-bold text-m-primary mb-4">Our Best Products</div>
            <div class="flex flex-wrap gap-10 justify-center mb-4">
                {#each products.slice(0,4) as product}
                    <MiniCard product={product}/>
                {/each}
            </div>
        </div>


        <div class="max-w-7xl m-auto ">
            <div class="text-xl font-bold text-m-primary mb-4">Our Bester Products</div>
            <div class="flex flex-wrap gap-10 justify-center mb-4">
                {#each products.slice(4,8) as product}
                    <MiniCard product={product}/>
                {/each}
            </div>
        </div>

        <div class="flex justify-center my-6 mt-10">
            <Button color="none" class="bg-m-primary max-w-sm uppercase text-m-light hover:bg-primary-600 rounded text-md font-thin" href="/products">
                Explore All Products
            </Button>
        </div>
    </div>
{/if}

