<script lang="ts">
    import GoogleMaps from "$lib/googleMaps/GoogleMaps.svelte";
	import ContactsBanner from "$lib/pre-constructs/ContactsBanner.svelte";
    import Contacts from "$lib/pre-constructs/Contacts.svelte";
	import SeoMetaData from "$lib/pre-constructs/SeoMetaData.svelte";
	import { page } from "$app/stores";
</script>

<svelte:head>
    <title>RDE - Contacts</title>
    <meta name="description" content="Get in contact with someone from our team at RDE"  />

    <!-- OpenGraph meta tags -->
    <meta property="og:title" content='RDE -  Contacts' />
    <meta property="og:description" content='Get in contact with someone from our team at RDE' />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{$page.url.pathname}" />
</svelte:head>

<GoogleMaps/>
<ContactsBanner/>
<Contacts/>