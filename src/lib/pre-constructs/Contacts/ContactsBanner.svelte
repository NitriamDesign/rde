<script lang="ts">
    import { PhoneSolid, ClockSolid, MapPinAltSolid } from "flowbite-svelte-icons";
</script>

<div class="bg-m-primary mt-20">
    <div class="flex justify-between items-center max-w-6xl m-auto py-14">
        <div class="max-w-xs">
            <div class="w-16 h-16 bg-white rounded-xl justify-center items-center flex">
                <PhoneSolid class="text-m-primary w-3/5 h-3/5"/>
            </div>

            <div class="text-white font-semibold mt-3">
                <div>
                    Main Line: <span class="font-normal">(954) 746-6400</span>
                </div>
                <div>
                    Fax: <span class="font-normal">(954) 746-4700</span>
                </div>
            </div>
        </div>


        <div class="max-w-xs">
            <div class="w-16 h-16 bg-white rounded-xl justify-center items-center flex">
                <ClockSolid class="text-m-primary w-3/5 h-3/5"/>
            </div>

            <div class="text-white font-semibold mt-3">
                <div>
                    Monday-Friday: <span class="font-normal">8:30am - 12:30pm and 1:00pm - 5:00pm Eastern Time.</span>
                </div>
            </div>
        </div>

        <div class="max-w-xs">
            <div class="w-16 h-16 bg-white rounded-xl justify-center items-center flex">
                <MapPinAltSolid class="text-m-primary w-3/5 h-3/5"/>
            </div>

            <div class="text-white font-semibold mt-3">
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