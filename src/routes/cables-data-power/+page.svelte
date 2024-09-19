<script lang="ts">
	import AboutUs from "$lib/pre-constructs/AboutUs.svelte";
	import MasonryGallery from "$lib/pre-constructs/MasonryGallery.svelte";
	import PdfAndTitle from "$lib/pre-constructs/PDFAndTitle.svelte";
	import SeoMetaData from "$lib/pre-constructs/SeoMetaData.svelte";
	import { Carousel, Heading, Img, Indicator, Span, Thumbnails } from "flowbite-svelte";
	import { CheckCircleOutline } from "flowbite-svelte-icons";

</script>

<svelte:head>
    <title>RDE - Data / Signal & Power Cables</title>
    <meta name="description" content="See our catalog of data, power, control, power, chain, round, and flat cables" />

    <!-- OpenGraph meta tags -->
    <meta property="og:title" content='See our catalog of data, power, control, power, chain, round, and flat cables'/>
    <meta property="og:description" content='testing' />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{window.location.href}" />
</svelte:head>

<PdfAndTitle title='Data & Power Cables' pdf='/pdf/cables-data-power.pdf'/>
