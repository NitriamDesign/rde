<script lang="ts">
    import { type Product } from "$lib/data"
    
    import {Table,TableBody,TableBodyCell,TableBodyRow,TableHead,TableHeadCell,ImagePlaceholder, Modal} from 'flowbite-svelte';
    import { slide } from 'svelte/transition';
    export let product: Product
    import { AccordionItem, Accordion, Button } from 'flowbite-svelte';
    
    const items = Array(3);

const open_all = () => items.forEach((_, i) => (items[i] = true));
const close_all = () => items.forEach((_, i) => (items[i] = false));

function getTechData(product: Product) {
    return product.techData ? product.techData : {};
  }




</script>

<div class="max-w-7xl m-auto mt-20 justify-between gap-10 flex flex-col md:flex-row p-4">
    <div>
        <div class="text-left text-md">
            <div class="text-3xl font-semibold text-m-primary mb-2">
                {product.name}
            </div>
        </div>

        <div class="text-left text-md">
            <div class="text-lg mb-10">
                {product.title}
            </div>
        </div>

        <div class="text-left text-md">
            <div class="mb-5">
                {product.description}
            </div>
        </div>
    </div>

    <img src={product.mainImage} alt="example" class="rounded w-[500px]">
</div>

<div class="max-w-7xl m-auto">

<Table color="green" class="mt-20" hoverable={true}>
  <TableHead>
    {#each Object.entries(getTechData(product)) as [key, entries]}
          <TableHeadCell>{key}</TableHeadCell>
    {/each}
  </TableHead>
  <TableBody tableBodyClass="divide-y">
    
    <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
    </TableBodyRow>

  </TableBody>
</Table>
</div>