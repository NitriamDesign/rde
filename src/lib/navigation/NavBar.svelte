<script lang="ts">
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Input, Dropdown } from 'flowbite-svelte';
    import { products } from '$lib/data';
    import { ChevronDoubleDownOutline, SearchOutline, MapPinAltSolid, PhoneSolid, MessagesSolid, InfoCircleSolid, ClockSolid, PrinterSolid } from 'flowbite-svelte-icons';
    import { goto } from '$app/navigation';
    import { writable } from 'svelte/store';
    import { onMount, onDestroy } from 'svelte';
    import { today } from "$lib/formatDate";
	import { fade } from 'svelte/transition';

    // Search
    let searchInput = '';
    let searchPlaceholder = 'Search...';
    let searchError = false;

    const routes = [
        { name: 'About us', href: '/about' },
        { name: 'Certification', href: '/certification' },
        { name: 'Contact', href: '/contact' },
        { name: 'Guides', href: '/guides' },
        { name: 'Legal Information', href: '/legal-information' },
        { name: 'Products', href: '/products' },
        { name: 'Terms & Conditions', href: '/terms-and-conditions' }
    ];

    const allSearchableItems = [
        ...routes.map(route => ({ name: route.name, href: route.href })),
        ...products.map(product => ({ name: product.name, href: product.url }))
    ];

    let filteredItems = allSearchableItems;

    function handleSearch() {
        const matchedItem = allSearchableItems.find(item => item.name.toLowerCase().includes(searchInput.toLowerCase()));

        if (matchedItem) {
            searchError = false;
            searchPlaceholder = 'Search...';
            goto(matchedItem.href);
        } else {
            searchError = true;
            searchPlaceholder = 'No matches';
        }
    }

    $: filteredItems = allSearchableItems.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()));

    // Mega Menu
    let megamenuVisible = writable(false);

    function toggleMegaMenu() {
        megamenuVisible.update(value => {
            const newValue = !value;
            console.log("Toggling Mega Menu:", newValue); // Debugging line
            if (newValue) {
                addOutsideClickListener();
            } else {
                removeOutsideClickListener();
            }
            return newValue;
        });
    }

    function handleClickOutside(event: MouseEvent) {
        const megamenuElement = document.getElementById("megamenu");
        const productsMenuElement = document.getElementById("products-menu");
        if (megamenuElement && !megamenuElement.contains(event.target as Node) && productsMenuElement && !productsMenuElement.contains(event.target as Node)) {
            megamenuVisible.set(false);
            removeOutsideClickListener();
        }
    }

    function addOutsideClickListener() {
        if (typeof document !== 'undefined') {
            document.addEventListener('click', handleClickOutside);
        }
    }

    function removeOutsideClickListener() {
        if (typeof document !== 'undefined') {
            document.removeEventListener('click', handleClickOutside);
        }
    }

    onMount(() => {
        return () => {
            removeOutsideClickListener();
        };
    });

    // Group products by category
    interface ProductsByCategory {
        [category: string]: typeof products;
    }

    const productsByCategory: ProductsByCategory = products.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {} as ProductsByCategory);
</script>

<Navbar class="md:py-6 py-4">
    <NavBrand class="p-0 px-0 flex gap-3 md:gap-0" href="/">
        <img src="/logos/rde-logo.png" class="md:h-[125px] md:inline h-14" alt="Flowbite Logo" />
        <div class="md:text-2xl text-xs font-semibold text-primary-500 uppercase italic font-sans md:ml-5">
            Member of the Phoenix Contact Group
        </div>
        <a href="tel:9547466400" class="md:hidden">
            <PhoneSolid size="lg"/>
        </a>
        <NavHamburger/>
    </NavBrand>

    <NavUl>
        <NavLi id="products-menu" class="font-semibold text-lg cursor-pointer items-center gap-2 hidden sm:flex" on:click={toggleMegaMenu}>Products <ChevronDoubleDownOutline size="sm"/></NavLi>
        <NavLi class="font-semibold text-lg" href="/about">About</NavLi>
        <NavLi class="font-semibold text-lg" href="/contact">Contact</NavLi>

        <div class="relative md:hidden inline mt-2">
            <div class="flex absolute inset-y-0 start-0 items-center ps-3 pointer-events-none">
                <SearchOutline class="w-4 h-4" />
            </div>
            <Input
                autocomplete="off"
                id="search-navbar"
                class="ps-10 w-full"
                placeholder={searchPlaceholder}
                bind:value={searchInput}
                on:keydown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Dropdown placement="bottom-start" class="max-h-96 min-w-40 overflow-y-auto">
                {#each filteredItems as item}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div class="p-2 hover:bg-yellow-50 cursor-pointer" on:click={() => goto(item.href)}>
                        {item.name}
                    </div>
                {/each}
                {#if filteredItems.length == 0}
                    <div class="p-2">No results</div>
                {/if}
            </Dropdown>
        </div>
    </NavUl>
    <div class="hidden items-center font-semibold gap-2 text-lg md:flex">
        <PhoneSolid size="lg"/> Contact us (954) 746-6400
    </div>
</Navbar>

<!-- The Mega Menu -->
{#if $megamenuVisible}
    <div id="megamenu" class="w-full bg-white absolute left-0 z-50 p-10 flex shadow-xl gap-4" transition:fade>
        <!-- Products -->
        <div class="flex flex-col w-2/5 lg:w-1/2 flex-wrap border-r-[1px] pr-4">
            {#each Object.keys(productsByCategory) as category}
                <div>
                    <h2 class="text-xl font-bold uppercase text-m-primary">{category}s</h2>
                    <div class="grid grid-cols-2 lg:grid-cols-3">
                        {#each productsByCategory[category] as product}
                            <div class="ml-4">
                                <a on:click={() => megamenuVisible.set(false)} class="hover:text-m-primary cursor-pointer text-sm" href={product.url}>{product.name}</a>
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>

        <!-- Info -->
        <div class="flex w-3/5 lg:w-1/2 lg:gap-10 gap-0">
            <div class="w-full p-4 rounded">    
                <div class="text-lg font-semibold uppercase mb-4">    
                    <div class="flex items-center gap-2">  
                        ISO 9001-2015 Certified
                    </div>
                </div>
                
                <div class="flex flex-col gap-2 text-sm underline">
                    <a class="flex items-center gap-2" href="/certification">  
                        <InfoCircleSolid class="text-m-primary2"/>Certification
                    </a>
                    <a class="flex items-center gap-2" href="/terms-and-conditions">  
                        <InfoCircleSolid class="text-m-primary2"/>Terms & Conditions
                    </a>
                    <a class="flex items-center gap-2" href="/legal-information">  
                        <InfoCircleSolid class="text-m-primary2"/>Legal Information
                    </a>
                </div>
            </div>

            <div class="w-full p-4 rounded">    
                <div class="text-lg font-semibold uppercase mb-4">    
                    Contact
                </div>
                
                <div class="flex flex-col gap-2 text-sm">
                    <div class="flex items-center gap-2">    
                        <MapPinAltSolid class="text-m-primary2"/>5277 NW 108 Ave Sunrise, FL 33351, USA
                    </div>
    
                    <div class="flex items-center gap-2">   
                        <PhoneSolid class="text-m-primary2"/>(954) 746-6400
                    </div>
    
                    <div class="flex items-center gap-2">   
                        <PrinterSolid class="text-m-primary2"/>Fax: (954) 746-4700
                    </div>
    
                    <div class="flex items-center gap-2">   
                        <MessagesSolid class="text-m-primary2"/>sales@rde-usa.com
                    </div>
                </div>
            </div>

            <div class="w-full p-4 rounded">    
                <div class="text-lg font-semibold uppercase mb-4">    
                    <div class="flex items-center gap-2">  
                        Operation
                    </div>
                </div>
            
                <div class="flex gap-2 text-sm  items-start">   
                    <ClockSolid class="mt-[3px] text-m-primary2"/>
                        Monday - Friday
                        <br>8:30am - 12:30pm and 
                        <br>1:00pm - 5:00pm
                        <br>Eastern Time
                </div>
            </div>

        </div>
    </div>
{/if}

<div class="bg-m-primary shadow-lg z-10 hidden md:block">
    <div class="flex max-w-6xl justify-between md:p-4 p-2 items-center md:full md:m-auto">
        <div class="font-semibold text-white text-lg">
            {today}
        </div>
        <div class="relative">
            <div class="flex absolute inset-y-0 start-0 items-center ps-3 pointer-events-none">
                <SearchOutline class="w-4 h-4" />
            </div>
            <Input
                autocomplete="off"
                id="search-navbar"
                class="ps-10 md:w-[300px] w-40"
                placeholder={searchPlaceholder}
                bind:value={searchInput}
                on:keydown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Dropdown placement="bottom-start" class="max-h-96 min-w-40 overflow-y-auto">
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                {#each filteredItems as item}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div class="p-2 hover:bg-yellow-50 cursor-pointer" on:click={() => goto(item.href)}>
                        {item.name}
                    </div>
                {/each}
                {#if filteredItems.length == 0}
                    <div class="p-2">No results</div>
                {/if}
            </Dropdown>
        </div>
    </div>
</div>
