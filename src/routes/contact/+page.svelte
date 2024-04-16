<script lang="ts">
    import GoogleMaps from "$lib/googleMaps/GoogleMaps.svelte";
	import { Button } from "flowbite-svelte";
    import { PhoneSolid, ClockSolid, MapPinAltSolid } from "flowbite-svelte-icons";
    import ContactsBanner from "$lib/pre-constructs/Contacts/ContactsBanner.svelte";
    import Contacts from "$lib/pre-constructs/Contacts/Contacts.svelte";
</script>

<GoogleMaps/>

<ContactsBanner/>

<Contacts/>