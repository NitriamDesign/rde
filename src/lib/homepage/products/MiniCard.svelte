<script lang="ts">
	import { goto } from '$app/navigation';
    import type { Product } from '$lib/data';
    export let product:Product;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="w-48 h-60 flex flex-col justify-between p-2 border-2 rounded bg-white hover:scale-105" on:click={() => goto(product.url)}>

    <div class="text-lg font-semibold">{product.name}</div>
    <div class="text-sm">{product.title}</div>

    <img src={product.mainImage} alt="{product.name} Main Image" class="rounded object-cover">

</div>