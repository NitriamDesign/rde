<script>
	import AboutUs from "$lib/pre-constructs/AboutUs.svelte";
	import MasonryGallery from "$lib/pre-constructs/MasonryGallery.svelte";
	import { Carousel, Heading, Img, Indicator, Span, Thumbnails } from "flowbite-svelte";
	import { CheckCircleOutline } from "flowbite-svelte-icons";
	import PdfAndTitle from "$lib/pre-constructs/PDFAndTitle.svelte";
	import SeoMetaData from "$lib/pre-constructs/SeoMetaData.svelte";
	import { page } from "$app/stores";
	
</script>
<svelte:head>
    <title>RDE - All Accessories</title>
    <meta name="description" content="See our catalog of accessories" />

    <!-- OpenGraph meta tags -->
    <meta property="og:title" content='RDE - All Accessories' />
    <meta property="og:description" content='See our catalog of couplers with coninvers connectors' />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{$page.url.pathname}" />
</svelte:head>

<PdfAndTitle title='All Accessories' pdf='/pdf/accessories-all.pdf'/>

