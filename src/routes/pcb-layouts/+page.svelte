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
    <title>PCB Layouts</title>
    <meta name="description" content="PCB Layouts for Coninvers Connector Inserts." />

    <!-- OpenGraph meta tags -->
	<meta property="og:title" content='PCB Layouts' />
    <meta property="og:description" content='PCB Layouts for Coninvers Connector Inserts.' />
    <meta property="og:type" content="website" />
	<meta property="og:url" content="{$page.url.pathname}" />
    
</svelte:head>

<PdfAndTitle title='PCB Layouts' pdf='/pdf/PCB-layouts.pdf'/>