<script lang="ts">
    export let apiKey = "AIzaSyCRzoPjIQlVJVVC97fHu4JUE_iCZnhuYKE";
</script>

<svelte:head>
    <script async src="https://maps.googleapis.com/maps/api/js?key={apiKey}&callback=console.debug&libraries=maps,marker&v=beta">
    </script>
</svelte:head>

<gmp-map center="26.189443588256836,-80.29332733154297" zoom="14" map-id="DEMO_MAP_ID" class="max-w-6xl h-96 m-auto mt-20">
    <gmp-advanced-marker position="26.189443588256836,-80.29332733154297" title="My location"></gmp-advanced-marker>
</gmp-map>