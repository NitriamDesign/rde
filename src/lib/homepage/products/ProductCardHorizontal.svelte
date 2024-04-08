<script>
	import { Button } from "flowbite-svelte";
	import { ArrowDownOutline, ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<div class="max-w-7xl border-2 rounded-xl shadow-xl md:flex md:m-auto md:h-80 m-3 md:mb-20">
    <slot id="image" name="image">
        <img src="/standin/dum.png" alt="Stand In" class="w-96 object-cover rounded-t-md md:rounded-l-md md:rounded-t-none">
    </slot>

    <div class="w-full p-4 flex flex-col justify-between md:py-6 md:px-10">
        <div class="max-w-2xl flex flex-col gap-4">
            <!-- Title and Description -->
            <slot id="text" name="text">
                <div class="text-sm uppercase font-sans tracking-widest font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>

                <div class="text-4xl font-sans tracking-normal font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>

                <div class="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
            </slot>
        </div>

        <div class="mt-4 text-center md:text-right ">
            <!-- Button -->
            <slot id="button" name="button">
                <Button color="none" class="bg-m-primary max-w-sm m-auto uppercase text-m-light hover:bg-primary-600 rounded text-md font-thin ">
                    View Products <ArrowRightOutline size="lg" class="ml-2"/>
                </Button>
            </slot>
        </div>
    </div>
</div>