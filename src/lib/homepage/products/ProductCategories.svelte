<script>
    import { Section, News, HeroHeader, HeroBody } from 'flowbite-svelte-blocks';
    import { Button, ButtonGroup } from 'flowbite-svelte';
    import { ArrowDownOutline } from 'flowbite-svelte-icons';
	import ProductCard from './ProductCard.svelte';

    let selectedButton = 'all';
    let selected = "bg-m-primary hover:bg-primary-600 text-white";
</script>


<div class="bg-m-light max-w-7xl m-auto my-20">

        <!-- Menu -->
        <div class="flex justify-start gap-10">
            <Button color="none" class="border-2 max-w-sm uppercase rounded text-md font-bold {selectedButton === 'all' ? selected : ''}" on:click={() => selectedButton = 'all'}>
                All Products
            </Button>

            <ButtonGroup>
                <Button color="none" class="border-2 max-w-sm uppercase text-md font-bold {selectedButton === '1' ? selected : ''}" on:click={() => selectedButton = '1'}>
                    Category 1
                </Button>

                <Button color="none" class="border-2 max-w-sm uppercase text-md font-bold {selectedButton === '2' ? selected : ''}" on:click={() => selectedButton = '2'}>
                    Category 2
                </Button>

                <Button color="none" class="border-2 max-w-sm uppercase text-md font-bold {selectedButton === '3' ? selected : ''}" on:click={() => selectedButton = '3'}>
                    Category 3
                </Button>
            </ButtonGroup>
        </div>


        <div class="grid grid-cols-3 gap-10 mt-10">
            <ProductCard>

            </ProductCard>

            <ProductCard>

            </ProductCard>

            <ProductCard>

            </ProductCard>
        </div>


</div>
