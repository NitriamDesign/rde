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
    <title>RDE - Couplers</title>
    <meta name="description" content="See our catalog of couplers with coninvers connectors" />

    <!-- OpenGraph meta tags -->
    <meta property="og:title" content='RDE - Couplers' />
    <meta property="og:description" content='See our catalog of couplers with coninvers connectors' />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{$page.url.pathname}" />
</svelte:head>

<PdfAndTitle title='All Couplers' pdf='/pdf/couplers-all.pdf'/>

