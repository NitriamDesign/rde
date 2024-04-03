<script>
	import { Button } from "flowbite-svelte";
	import { ArrowDownOutline, ArrowRightOutline } from "flowbite-svelte-icons";


</script>

<div class="max-w-7xl h-80 border-2 rounded-xl shadow-xl flex m-auto">
    <slot id="image" name="image">
        <img src="/standin/dum.png" alt="Stand In" class="w-96 object-cover rounded-l-xl">
    </slot>

    <div class="w-full py-6 px-10 flex flex-col justify-between">
        <div class="max-w-2xl flex flex-col gap-4">
            <!-- Title and Description -->
            <div class="text-sm uppercase font-sans tracking-widest font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>

            <div class="text-4xl font-sans tracking-normal font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>

            <div class="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
        </div>

        <div class="text-right">
            <!-- Button -->
            <Button color="none" class="bg-m-primary max-w-sm m-auto uppercase text-m-light hover:bg-primary-600 rounded text-md font-thin">
                View Products <ArrowRightOutline size="lg" class="ml-2"/>
            </Button>
        </div>
    </div>
</div>