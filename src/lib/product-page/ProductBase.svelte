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

<Table color="green" class="mt-20" hoverable={true}>
  <TableHead>
    <TableHeadCell>Shell Material</TableHeadCell>
    <TableHeadCell>Insulator</TableHeadCell>
    <TableHeadCell>Contacts</TableHeadCell>
    <TableHeadCell>Sealing</TableHeadCell>
    <TableHeadCell>Temperature</TableHeadCell>
    <TableHeadCell>Mating</TableHeadCell>
    <TableHeadCell>Protection</TableHeadCell>
  </TableHead>
  <TableBody tableBodyClass="divide-y">
    <TableBodyRow>

      <TableBodyCell>
        {#if product.shell_mat}
        {#each product.shell_mat ?? [] as entry}
        <strong>{entry.title}:</strong> {entry.description}<br>
        {/each}
        {/if}
      </TableBodyCell>
      

      <TableBodyCell>
        {#if product.insulator}
        {#each product.insulator ?? [] as entry}
        <strong>{entry.title}:</strong> {entry.description}<br>
        {/each}
        {/if}

      </TableBodyCell>

      <TableBodyCell>
        {#if product.contacts}
        {#each product.contacts ?? [] as entry}
        <strong>{entry.title}:</strong> {entry.description}<br>
        {/each}
        {/if}

      </TableBodyCell>

      <TableBodyCell>
        {#if product.sealing}
        {#each product.sealing ?? [] as entry}
        <strong>{entry.title}:</strong> {entry.description}<br>
        {/each}
        {/if}

      </TableBodyCell>

      <TableBodyCell>
        {#if product.temperature}
        {#each product.temperature ?? [] as entry}
        <strong>{entry.title}:</strong> {entry.description}<br>
        {/each}
        {/if}

      </TableBodyCell>

      <TableBodyCell>
        {#if product.mating}
        {#each product.mating ?? [] as entry}
        <strong>{entry.title}:</strong> {entry.description}<br>
        {/each}
        {/if}
      </TableBodyCell>

      <TableBodyCell>
        {#if product.protection}
        {#each product.protection ?? [] as entry}
        <strong>{entry.title}:</strong> {entry.description}<br>
        {/each}
        {/if}
      </TableBodyCell>
    </TableBodyRow>


  </TableBody>
</Table>
</div>