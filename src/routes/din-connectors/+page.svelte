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
    <title>RDE - DIN Connectors</title>
    <meta name="description" content="View our catalog of circular M12/M16 DIN connectors" />

    <!-- OpenGraph meta tags -->
    <meta property="og:title" content='RDE - DIN Connectors' />
    <meta property="og:description" content='View our catalog of circular M12/M16 DIN connectors' />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{$page.url.pathname}" />
</svelte:head>

<PdfAndTitle title='M12 / M16 / DIN Connectors' pdf='/pdf/EA-EQ.pdf'/>