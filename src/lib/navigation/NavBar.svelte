<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>


<Navbar class="max-w-7xl ">
    <NavBrand href="/">
        <img src="/logos/rde-main-logo.jpg" style="width: 700px;" class="pt-5 pb-5" alt="Flowbite Logo" />
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