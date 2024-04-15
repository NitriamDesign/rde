<script lang="ts">
	import { goto } from '$app/navigation';
    import type { Product } from '$lib/data';
    export let product:Product;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="flex gap-5 justify-between items-center p-2 rounded bg-white hover:scale-105 cursor-pointer" on:click={() => goto(product.url)}>
    <img src={product.mainImage} alt="{product.name} Main Image" class="rounded h-12 w-12 object-cover">
    <div class="text-lg font-semibold">{product.name}</div>
</div>