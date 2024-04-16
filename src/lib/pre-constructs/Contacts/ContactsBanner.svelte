<script lang="ts">
    import { PhoneSolid, ClockSolid, MapPinAltSolid } from "flowbite-svelte-icons";
</script>

<div class="bg-m-primary mt-20">
    <div class="flex flex-wrap p-6  py-8 items-left gap-10 md:gap-0 md:flex-none md:justify-between items-center max-w-6xl m-auto md:p-0 md:py-16">
        
        <div class="md:max-w-xs md:flex md:gap-4 md:items-center ">
            <div class="w-16 h-16 bg-white rounded-xl justify-center items-center flex">
                <PhoneSolid class="text-m-primary w-3/5 h-3/5"/>
            </div>

            <div class="text-white font-semibold mt-2 md:mt-0">
                <div>
                    Main Line: <span class="font-normal">(954) 746-6400</span>
                </div>
                <div>
                    Fax: <span class="font-normal">(954) 746-4700</span>
                </div>
            </div>
        </div>


        <div class="md:flex md:gap-4 md:items-center">
            <div class="w-16 h-16 bg-white rounded-xl justify-center items-center flex">
                <ClockSolid class="text-m-primary w-3/5 h-3/5"/>
            </div>

            <div class="text-white font-semibold mt-2 md:mt-0">
                <div>
                    Monday-Friday: <span class="font-normal">8:30am - 12:30pm <br>and 1:00pm - 5:00pm Eastern Time.</span>
                </div>
            </div>
        </div>

        <div class="md:flex md:gap-4 md:items-center">
            <div class="w-16 h-16 bg-white rounded-xl justify-center items-center flex">
                <MapPinAltSolid class="text-m-primary w-3/5 h-3/5"/>
            </div>

            <div class="text-white mt-2 md:mt-0">
                <div>
                    rde Connectors & Cables, Inc.
                </div>
                <div>
                    5277 NW 108 Ave Sunrise, FL 33351, USA
                </div>
            </div>
        </div>
    </div>
</div>