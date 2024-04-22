<script lang="ts">
    import { type Product } from "$lib/data"
    
    import {Table,TableBody,TableBodyCell,TableBodyRow,TableHead,TableHeadCell,ImagePlaceholder, Modal} from 'flowbite-svelte';
    import { slide } from 'svelte/transition';
    export let product: Product
    import { AccordionItem, Accordion, Button } from 'flowbite-svelte';
    
    const items = Array(3);

const open_all = () => items.forEach((_, i) => (items[i] = true));
const close_all = () => items.forEach((_, i) => (items[i] = false));


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

      
      <Button on:click={open_all}>Open all</Button>
      <Button on:click={close_all}>Close all</Button>

      <Accordion multiple>
        <AccordionItem bind:open={items[0]}>
          <span slot="header">Shell Material</span>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> get started </a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </AccordionItem>
        <AccordionItem bind:open={items[1]}>
          <div slot="header">My Header 2</div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
        </AccordionItem>
        <AccordionItem bind:open={items[2]}>
          <div slot="header">My Header 3</div>
          <p>Something more</p>
        </AccordionItem>
      </Accordion>
</div>
<!--
<div class=" max-w-7xl m-auto mt-10">
    <div class="text-left text-md">
        <div class="text-3xl font-semibold text-m-primary mb-2">
            Connectors M23 Series CA Technical Data
        </div>
    </div>
      
      <Table class="mt-10">
        <TableHead defaultRow={false}>
            <tr>
              <TableHeadCell class="p-4 text-md" colspan="1">Shell Material</TableHeadCell>
            </tr>
        </TableHead>
        <TableHead defaultRow={false}>
              <TableHeadCell class="p-4 text-md" colspan="1">Machined Components</TableHeadCell>
              <TableHeadCell class="p-4 text-md" colspan="1">Die-Cast Components</TableHeadCell>
              <TableHeadCell class="p-4 text-md" colspan="1">Shell Plating</TableHeadCell>
              <TableHeadCell class="p-4 text-md" colspan="1">Cable entry</TableHeadCell>
        </TableHead>

        <TableBody tableBodyClass="divide-y">
          <TableBodyRow>
            <TableBodyCell>Copper-Zinc alloy (CuZn)</TableBodyCell>
            <TableBodyCell>Zinc (GD-Zn)</TableBodyCell>
            <TableBodyCell>Nickel (Ni) plated</TableBodyCell>
            <TableBodyCell>max. 14.5 mm</TableBodyCell>
          </TableBodyRow>

        </TableBody>
      </Table>

      <Table class="mt-10">
        <TableHead defaultRow={false}>
              <TableHeadCell class="p-4 text-md" colspan="1">Insulator</TableHeadCell>
        </TableHead>

        <TableHead defaultRow={false}>
              <TableHeadCell class="p-4 text-md" colspan="1">Connector inserts</TableHeadCell>
        </TableHead>

        <TableBody tableBodyClass="divide-y">
            <TableBodyRow>
              <TableBodyCell>Thermoplastic polyester (PBT), Polyamid (PA66)</TableBodyCell>
            </TableBodyRow>
          </TableBody>
      </Table>

      <Table class="mt-10">
        
        <TableHead defaultRow={false}>
 
              <TableHeadCell class="p-4 text-md" colspan="1">Contacts</TableHeadCell>

        </TableHead>
        <TableHead defaultRow={false}>
              <TableHeadCell class="p-4 text-md" colspan="1">Material</TableHeadCell>
              <TableHeadCell class="p-4 text-md" colspan="1">Plating</TableHeadCell>
              <TableHeadCell class="p-4 text-md" colspan="1">Contact Termination</TableHeadCell>
        </TableHead>

        <TableBody tableBodyClass="divide-y">
            <TableBodyRow>
              <TableBodyCell>Copper-Zinc alloy (CuZn)</TableBodyCell>
              <TableBodyCell>Nickel (Ni) with gold (Au) passivated</TableBodyCell>
              <TableBodyCell>Solder cup, crimp type, screw type, dip solder</TableBodyCell>
            </TableBodyRow>
        </TableBody>
      </Table>

      <Table class="mt-10">
        
        <TableHead defaultRow={false}>
 
              <TableHeadCell class="p-4 text-md" colspan="1">Sealing</TableHeadCell>

        </TableHead>
        <TableHead defaultRow={false}>
              <TableHeadCell class="p-4 text-md" colspan="1">Sealing rings</TableHeadCell>
              <TableHeadCell class="p-4 text-md" colspan="1">Gaskets:</TableHeadCell>
        </TableHead>

        <TableBody tableBodyClass="divide-y">
            <TableBodyRow>
              <TableBodyCell>Fluor rubber (FPM)</TableBodyCell>
              <TableBodyCell>Fluor rubber (FPM), or Perbunan (NBR) stiffened gaskets</TableBodyCell>
            </TableBodyRow>
        </TableBody>
      </Table>

      <Table class="mt-10">
        
        <TableHead defaultRow={false}>
 
              <TableHeadCell class="p-4 text-md" colspan="1">Temperature</TableHeadCell>

        </TableHead>
        <TableHead defaultRow={false}>
              <TableHeadCell class="p-4 text-md" colspan="1">Temperature (long term) Celsius:</TableHeadCell>
              <TableHeadCell class="p-4 text-md" colspan="1">Temperature (long term) Fahrenheit:</TableHeadCell>
        </TableHead>

        <TableBody tableBodyClass="divide-y">
            <TableBodyRow>
              <TableBodyCell>- 40 °C up to +125°C</TableBodyCell>
              <TableBodyCell>- 40 °F up to + 257 °F</TableBodyCell>
            </TableBodyRow>
        </TableBody>
      </Table>

      <Table class="mt-10">
        
        <TableHead defaultRow={false}>
 
              <TableHeadCell class="p-4 text-md" colspan="1">Mating</TableHeadCell>

        </TableHead>
        <TableHead defaultRow={false}>
              <TableHeadCell class="p-4 text-md" colspan="1">Female coupling nuts</TableHeadCell>
              <TableHeadCell class="p-4 text-md" colspan="1">Male receptacles</TableHeadCell>
              <TableHeadCell class="p-4 text-md" colspan="1">Mating cycles</TableHeadCell>
        </TableHead>

        <TableBody tableBodyClass="divide-y">
            <TableBodyRow>
              <TableBodyCell>M23 screw locking/Speedcon</TableBodyCell>
              <TableBodyCell>M23 screw locking/Speedcon</TableBodyCell>
              <TableBodyCell>Standard min. 50</TableBodyCell>
            </TableBodyRow>
        </TableBody>
      </Table>

      <Table class="mt-10">
        
        <TableHead defaultRow={false}>
 
              <TableHeadCell class="p-4 text-md" colspan="1">Protection</TableHeadCell>

        </TableHead>
        <TableHead defaultRow={false}>
              <TableHeadCell class="p-4 text-md" colspan="1">Protection class</TableHeadCell>
        </TableHead>

        <TableBody tableBodyClass="divide-y">
            <TableBodyRow>
              <TableBodyCell>IP 67 (mated) depends on which cable gland is used</TableBodyCell>
            </TableBodyRow>
        </TableBody>
      </Table>
      
</div>
-->