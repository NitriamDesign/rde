<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, MegaMenu } from 'flowbite-svelte';
    import { products } from '$lib/data';

    let megeMenuOpen = false;
</script>

<!-- Hello -->
<Navbar class="w-full">
    <NavBrand href="/" class="p-0 px-0">
        <img src="/logos/rde-main-logo.jpg"  class="pt-5 pb-5 h-36 md:inline hidden" alt="Flowbite Logo" />
        <img src="/logos/rde-logo.png"  class="h-12 pl-1 md:hidden inline" alt="Flowbite Logo" />
    </NavBrand>

    <NavHamburger/>

    <NavUl>
        <NavLi class="font-semibold text-lg" href="/">Home</NavLi>
        <NavLi class="font-semibold text-lg cursor-pointer" on:hover={() => megeMenuOpen = true}>Products</NavLi>
            <MegaMenu items={products} let:item bind:open={megeMenuOpen} ulClass="grid grid-flow-row gap-4  auto-col-max auto-row-max">
                <a href={item.url} class="flex flex-col justify-between gap-4 p-5 rounded-lg border-2 hover:bg-gray-50 dark:hover:bg-gray-700 h-full">

                    <div class="font-semibold dark:text-white">{item.name}</div>
                    <span class="text-sm font-light text-gray-500 dark:text-gray-400">{item.title}</span>
                    <img src={item.mainImage} class="rounded" alt="asd">
                </a>
            </MegaMenu>
        <NavLi class="font-semibold text-lg" href="/guides">Guides</NavLi>
        <NavLi class="font-semibold text-lg" href="/about">About</NavLi>
        <NavLi class="font-semibold text-lg" href="/contact">Contact</NavLi>
    </NavUl>
</Navbar>