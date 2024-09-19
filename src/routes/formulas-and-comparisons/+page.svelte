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
    <title>RDE - Formulas & Comparisons</title>
    <meta name="description" content="Use this PDF document to make data comparisons on some of our products" />

    <!-- OpenGraph meta tags -->
    <meta property="og:title" content='RDE - Formulas & Comparisons' />
    <meta property="og:description" content='Use this PDF document to make data comparisons on some of our products' />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{$page.url.pathname}" />
</svelte:head>

<PdfAndTitle title='Formulas & Comparisons' pdf='/pdf/formulas-and-comparisons.pdf'/>