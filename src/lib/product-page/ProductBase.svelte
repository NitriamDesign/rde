<script lang="ts">
    import { type Product } from "$lib/data"
    
    import {Table,TableBody,TableBodyCell,TableBodyRow,TableHead,TableHeadCell,ImagePlaceholder, Modal, Card} from 'flowbite-svelte';
    import { slide } from 'svelte/transition';
    export let product: Product
    import { AccordionItem, Accordion, Button } from 'flowbite-svelte';
    import { Heading, P, Span, List, Li } from 'flowbite-svelte';
  
 
    const items = Array(3);
    let categoryNames = [['Shell Material', 'shell_mat'], ['Insulator','insulator'],  ['Contacts','contacts' ], ['Sealing','sealing'], ['Temperature', 'temperature']]

const open_all = () => items.forEach((_, i) => (items[i] = true));
const close_all = () => items.forEach((_, i) => (items[i] = false));
</script>

<div class="max-w-7xl m-auto mt-20 mb-20 justify-between gap-10 flex flex-col md:flex-row ">

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

<Heading color="text-primary-500" tag="h1" class="mt-10 md:mt-0 max-w-7xl m-auto" customSize="text-3xl font-extrabold  md:text-4xl lg:text-4xl">
  Technical Data
</Heading>

<div class="max-w-7xl mx-auto flex flex-col md:flex-row items-start mt-10">
   <!-- Material information container -->
   <div class="flex-2">

    {#each categoryNames as [headerName, dataName]}
    <Card class="rounded-none mb-5">
      <Heading tag="h2" class="mb-2 text-2xl font-extrabold">
        {headerName}
      </Heading>
      {#if product[dataName]}
    {#each product[dataName] ?? [] as entry}
    <strong>{entry.title}:</strong> {entry.description}<br>
    {/each}
    {/if}
    </Card>
    {/each}
    
  </div>

  <!-- Iframe container -->
  <div class="flex-1 ml-10">
    <iframe title="{product.name}" src={product.pdf} width="100%" height="1100px" style="border:none;"></iframe>
  </div>


</div>