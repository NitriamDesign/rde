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
    <title>Mounting Tools</title>
    <meta name="description" content="RDE assembly tools for connectors we sell." />

    <!-- OpenGraph meta tags -->
	<meta property="og:title" content='Mounting Tools' />
    <meta property="og:description" content='RDE assembly tools for connectors we sell.' />
    <meta property="og:type" content="website" />
	<meta property="og:url" content="{$page.url.pathname}" />
    
</svelte:head>

<PdfAndTitle title='Mounting Tools' pdf='/pdf/mounting-tools.pdf'/>