<script  lang="ts">
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, MegaMenu, Button, Input, Popover } from 'flowbite-svelte';
    import { products } from '$lib/data';
	import { ChevronDoubleDownOutline, MapPinAltSolid, PhoneSolid } from 'flowbite-svelte-icons';
    import MiniCard from '$lib/homepage/products/MiniCard.svelte';
    import ProductPills from '$lib/homepage/products/ProductPills.svelte';
    import { SearchOutline } from 'flowbite-svelte-icons';
    import { blur, fade, slide } from 'svelte/transition';

    function formatDate(date: Date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(date).toLocaleDateString('en-US', options);
        const day = new Date(date).getDate();
        let suffix;
        if (day > 3 && day < 21) suffix = 'th';
        else {
            switch (day % 10) {
                case 1:  suffix = "st"; break;
                case 2:  suffix = "nd"; break;
                case 3:  suffix = "rd"; break;
                default: suffix = "th";
            }
        }
        return formattedDate.replace(day, `${day}${suffix}`);
    }

    let today = formatDate(new Date());
</script>

<!-- Hello -->
<Navbar class="md:pt-6 md:pb-3 z-30">
    <NavBrand href="/" class="p-0 px-0 flex gap-3 md:gap-0">
        <img src="/logos/rde-logo.png"  class="md:h-[125px] md:inline h-14" alt="Flowbite Logo" />
   
        <div class="md:text-2xl text-xs font-semibold text-primary-500 uppercase italic font-sans md:ml-5">Member of the Phoenix Contact Group</div>

        <a href="tel:9547466400" class="md:hidden">
            <PhoneSolid size="lg"/>
        </a>
        
        <NavHamburger/>
    </NavBrand>

    <NavUl>
        <NavLi id="amg" class="font-semibold text-lg cursor-pointer flex items-center gap-2">Products <ChevronDoubleDownOutline size="sm"/></NavLi>

        <Popover triggeredBy="#amg" placement="bottom" class="w-[90%] md:w-[700px] border-2 p-2 shadow-xl rounded z-20 mx-2 md:mx-0" >
                <div class="md:grid md:grid-cols-3 md:gap-4">
                    {#each products.slice(0,9) as product}
                        <ProductPills product={product}/>
                    {/each}
                </div>
        
                <div class="flex justify-left mb-4 mt-3">
                    <Button color="none" class="bg-m-primary max-w-sm uppercase text-m-light hover:bg-primary-600 rounded text-md font-thin md:w-fit w-full" href="/products">
                        Explore All Products
                    </Button>
                </div>

        </Popover>


        <NavLi class="font-semibold text-lg" href="/about">About</NavLi>
        <NavLi class="font-semibold text-lg" href="/contact">Contact</NavLi>
    </NavUl>
    <div class="hidden items-center font-semibold gap-2 text-lg md:flex">   
        <PhoneSolid size="lg"/> Contact us (954) 746-6400
    </div>

</Navbar>

<div class="bg-m-primary shadow-lg z-10">
    <div class="flex max-w-6xl  justify-between p-4 items-center md:full md:m-auto">
        <div class="font-semibold text-white text-lg">
          {today}
        </div>
        
     
        <div class="relative">
            <div class="flex absolute inset-y-0 start-0 items-center ps-3 pointer-events-none">
              <SearchOutline class="w-4 h-4" />
            </div>

            <Input id="search-navbar" class="ps-10 md:w-[300px] max-w-36" placeholder="Search..." />
        </div>
    </div>
</div>