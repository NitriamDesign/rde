<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
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
        <NavLi class="font-semibold text-lg" href="/products">Products</NavLi>
        <NavLi class="font-semibold text-lg" href="/guides">Guides</NavLi>
        <NavLi class="font-semibold text-lg" href="/about">About</NavLi>
        <NavLi class="font-semibold text-lg" href="/contact">Contact</NavLi>
    </NavUl>
</Navbar>