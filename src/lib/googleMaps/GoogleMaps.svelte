<script lang="ts" indent="4">
	import { MapPinAltSolid } from 'flowbite-svelte-icons';
    import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    const apiKey = import.meta.env.VITE_GOOGLE_API;
    
    let globally = false;
    let map;

    let container: HTMLDivElement;
    let zoom = 19;
    let center = { lat: 26.18938738631131, lng:-80.2932863541374 };
    let src = ''; 

    onMount(() => {
        Object.assign(window, {
            mapLoaded: () => {
                // @ts-ignore
                map = new google.maps.Map(container, {
                    zoom,
                    center,
                });
                dispatch('load', true);
                if (globally) {
                    Object.assign(window, { map });
                }
                // @ts-ignore
                const marker = new google.maps.Marker({
                    position: center,
                    map: map,
                    title: 'My Location'
                });

            }
        });

        // Import Google Maps API.
        src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=mapLoaded`;
    });
</script>

<div class="flex items-center gap-2 text-m-primary font-bold max-w-6xl m-auto mt-20 mb-5 text-xl">    
    <MapPinAltSolid/>5277 NW 108 Ave Sunrise, FL 33351, USA
</div>

<div class="max-w-6xl h-[500px] m-auto" bind:this={container}>

</div>

<svelte:head>
    {#if src}
        <script {src}></script>
    {/if}
</svelte:head>