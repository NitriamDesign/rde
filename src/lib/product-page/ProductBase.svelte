<script lang="ts">
  import { type Product } from "$lib/data";
  import { AccordionItem, Accordion, Button, Heading, P, Span, List, Li, Card } from 'flowbite-svelte';

  export let product: Product;

  // const items = Array(3);

  let categoryNames:[string, string][] = [['Shell Material', 'shell_mat'], ['Insulator', 'insulator'], ['Contacts', 'contacts'], ['Sealing', 'sealing'], ['Temperature', 'temperature']];

  // const open_all = () => items.forEach((_, i) => (items[i] = true));
  // const close_all = () => items.forEach((_, i) => (items[i] = false));
</script>

<div class="max-w-7xl mx-auto mt-20 mb-20 p-4 md:p-0 flex flex-col md:flex-row gap-10">
  <div>
      <div class="text-3xl font-semibold text-m-primary mb-2">{product.name}</div>
      <div class="text-lg mb-10">{product.title}</div>
      <div class="mb-5">{product.description}</div>
  </div>
  <img src={product.mainImage} alt={product.name} class="rounded w-[500px]">
</div>

<Heading tag="h1" class="mt-10 md:mt-0 max-w-7xl mx-auto p-4 md:p-0 text-3xl font-extrabold md:text-4xl lg:text-4xl text-primary-500">
  Technical Data
</Heading>

<div class="max-w-7xl mx-auto flex flex-col md:flex-row items-start mt-10 p-4 md:p-0">
  <!-- Material information container -->
  <div class="md:w-[25%] w-full">
      {#each categoryNames as [headerName, dataName]}
          <Card class="rounded-none mb-5">
              <Heading tag="h2" class="mb-2 text-2xl font-extrabold">{headerName}</Heading>
              {#if product[dataName]}
                  {#each product[dataName] as entry}
                      <strong>{entry.title}:</strong> {entry.description}<br>
                  {/each}
              {/if}
          </Card>
      {/each}
  </div>

  <!-- Iframe container -->
  <div class="md:w-[75%] ml-0 md:ml-10 mt-10 md:mt-0 w-full">
      <iframe title={product.name} src={product.pdf} width="100%" height="1100px" style="border:none;"></iframe>
  </div>
</div>
