<script lang="ts">
	import { Button, Dropdown, DropdownItem, Input } from "flowbite-svelte";
    import ProductBase from '$lib/pre-constructs/product-page/ProductBase.svelte'

    function formatDate(date: string | number | Date) {
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

    let today = formatDate('2024-04-08');
</script>


<div class="bg-m-primary">
    <div class="max-w-3xl flex justify-between p-4 items-center md:full md:m-auto">
        <div class="font-[500] text-white">
            {today}
        </div>

        <Button color="alternative" class="h-10 rounded">Choose a Product</Button>
        
        <Dropdown>
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
    </div>
</div>

<ProductBase/>