<script lang="ts">
    import { type Product } from "$lib/data"

    export let product: Product
</script>

<div class="max-w-7xl m-auto mt-10 justify-between gap-10 flex flex-col md:flex-row p-4">
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

    <img src={product.mainImage} alt="example" class="rounded">
</div>