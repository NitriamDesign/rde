<script lang="ts">
    import { onMount } from 'svelte';

    // Props passed to the component
    export let apiKey = import.meta.env.VITE_GOOGLE_API;
    export let lat = 26.189198750324895;
    export let lng = -80.29346439021744;
    export let zoom = 18;
    let map;

    onMount(() => {
        if (!window.google) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);

            script.onload = () => {
            initMap();
            };
        } else {
            initMap();
        }
    });

    function initMap() {
        map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat, lng },
            zoom,
        });
    }
</script>

<div id="map" class="max-w-6xl m-auto border-2 rounded h-[400px]"></div>
