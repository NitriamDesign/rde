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
    <title>Industrial Marine Receptical System</title>
    <meta name="description" content="Initially developed for the marine industry, this robust and full metal body design is well suited
 for harsh environment applications often found in industrial, marine, and military sectors." />

    <!-- OpenGraph meta tags -->
	<meta property="og:title" content='Industrial Marine Receptical System' />
    <meta property="og:description" content='Initially developed for the marine industry, this robust and full metal body design is well suited
 for harsh environment applications often found in industrial, marine, and military sectors.' />
    <meta property="og:type" content="website" />
	<meta property="og:url" content="{$page.url.pathname}" />
    
</svelte:head>

<PdfAndTitle title='WCS Industrial Marine Watertight Series' pdf='/pdf/WCS-industrial-marine-watertight.pdf'/>