<script>
    import { ChevronRightOutline } from 'flowbite-svelte-icons';
</script>

<div class="w-[400px] h-[500px] flex flex-col justify-between rounded shadow-xl overflow-hidden bg-white">
    <!-- Image at the top -->
    <slot name="image">
        <img src="/standin/dum.png" alt="Stand In" class="w-full h-[200px] object-cover">
    </slot>
    
    <!-- Title and description in the middle -->
    <div class="pl-7 pt-7 flex-1 flex flex-col">
        
            <span class="text-2xl font-semibold  text-primary-500 uppercase italic font-sans">
                <slot name="title">
                    CA Series Connectors
                </slot>
            </span>

            <span class="text-[#C4C4C4] font-bold mt-4">COMPONENT MATERIALS</span>
            
        

        <div class="flex text-md mt-1 text-[#6B7280]">
            <span class="text-dark font-bold mr-1">Machined:</span> <slot name="desc1">
                Lorem ipsum dolor sit 
            </slot>
            
            
        </div>
        <div class="flex text-md mt-2 text-[#6B7280]">
            <span class="text-dark font-bold mr-1">Die-cast: </span>
            <slot name="desc2">
                Lorem ipsum dolor sit 
            </slot>     
        </div>
        <div class="flex text-md mt-2 text-[#6B7280]">
            <span class="text-dark font-bold mr-1">Shell Plating:</span>
            <slot name="desc3">
                Lorem ipsum dolor sit 
            </slot>     
        </div>
    </div> 

    <!-- View Item at the bottom -->
    <a class="px-7 pb-10 text-xl flex items-center text-primary-500 hover:text-primary-600 font-bold" href="/">
        Read More <ChevronRightOutline class="ml-2" />
    </a>
</div>
