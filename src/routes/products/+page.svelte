<script lang="ts">
	import { Button, Dropdown, DropdownItem, Input } from "flowbite-svelte";
    import ProductBase from '$lib/pre-constructs/product-page/ProductBase.svelte'
    import { products, type Product } from "$lib/data"
    import { page } from '$app/stores';
    import { MapPinAltSolid, PhoneSolid, MessagesSolid, InfoCircleSolid, BookSolid, QuestionCircleSolid, UsersGroupSolid, BookOutline} from 'flowbite-svelte-icons';
	import { goto } from "$app/navigation";


    // Date
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


<div class="bg-m-primary">
    <div class="max-w-3xl flex justify-between p-4 items-center md:full md:m-auto">
        <div class="font-[500] text-white">
            {today}
        </div>

        <Button color="alternative" class="h-10 rounded"><BookOutline class="mr-3"/>Choose a Product</Button>
        
        <Dropdown>
            {#each products as product, index}
                <DropdownItem on:click={() => goto(product.url)}>{product.name}</DropdownItem>
            {/each}
        </Dropdown>
    </div>
</div>


This is the every product page
