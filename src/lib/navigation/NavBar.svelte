<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>


<Navbar  class="max-w-7xl m-auto">
    <NavBrand href="/">
        <img src="/logos/rdelogo.png" class="me-3 h-24" alt="Flowbite Logo" />
        <span class="self-center whitespace-nowrap text-xl font-semibold text-[#C4C4C4] uppercase italic font-sans">Member of the phoenix contact group</span>
    </NavBrand>

    <NavHamburger  />

    <NavUl >
        <NavLi class="font-semibold text-lg" href="/">Home</NavLi>
        <NavLi class="font-semibold text-lg" href="/products">Products</NavLi>
        <NavLi class="font-semibold text-lg" href="/guides">Guides</NavLi>
        <NavLi class="font-semibold text-lg" href="/about">About</NavLi>
        <NavLi class="font-semibold text-lg" href="/contact">Contact</NavLi>
    </NavUl>
</Navbar>