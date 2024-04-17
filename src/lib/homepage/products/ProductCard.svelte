<script>
    import { ChevronRightOutline } from 'flowbite-svelte-icons';
</script>

<div class="w-[350px] h-[400px] flex flex-col justify-between rounded shadow-xl overflow-hidden">
    <!-- Image at the top -->
    <slot name="image">
        <img src="/standin/dum.png" alt="Stand In" class="w-full">
    </slot>
    
    <!-- Title and description in the middle -->
    <div class="px-4 py-2 flex-1 flex flex-col justify-center">
        <div class="text-xl font-bold">
            <slot name="title">
                CA Series Connectors
            </slot>
        </div>

        <div class="flex flex-col text-md mt-2 text-[#6B7280]">
            <slot name="desc1">
                Lorem ipsum dolor sit 
            </slot>
            
        </div>
        <div class="flex flex-col text-md mt-2 text-[#6B7280]">
            <slot name="desc2">
                Lorem ipsum dolor sit 
            </slot>     
        </div>
        <div class="flex flex-col text-md mt-2 text-[#6B7280]">
            <slot name="desc3">
                Lorem ipsum dolor sit 
            </slot>     
        </div>
    </div> 

    <!-- View Item at the bottom -->
    <a class="px-4 py-2 text-md flex items-center text-primary-500 hover:text-primary-600 font-bold" href="/">
        View Item <ChevronRightOutline class="ml-2" />
    </a>
</div>
