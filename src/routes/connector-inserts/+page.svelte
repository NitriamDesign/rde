<script lang="ts">
	import { page } from "$app/stores";
	import AboutUs from "$lib/pre-constructs/AboutUs.svelte";
	import MasonryGallery from "$lib/pre-constructs/MasonryGallery.svelte";
	import PdfAndTitle from "$lib/pre-constructs/PDFAndTitle.svelte";
	import SeoMetaData from "$lib/pre-constructs/SeoMetaData.svelte";
	import { Carousel, Heading, Img, Indicator, Span, Thumbnails } from "flowbite-svelte";
	import { CheckCircleOutline } from "flowbite-svelte-icons";

</script>

<svelte:head>
    <title>RDE - Connector Inserts</title>
    <meta name="description" content="Interchangeable Connector Inserts that fit into all connectors series TU, RC/RM, CA, UC, SSR"  />

    <!-- OpenGraph meta tags -->
    <meta property="og:title" content='RDE -  Contacts' />
    <meta property="og:description" content='Get in contact with someone from our team at RDE' />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{$page.url.pathname}" />
</svelte:head>

<PdfAndTitle title='Connector Inserts' pdf='/pdf/connector-inserts.pdf'/>