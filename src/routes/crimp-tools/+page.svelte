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
    <title>RDE - Crimp Tools</title>
    <meta name="description" content="See our catalog of crimping tools for all coninvers/phoenix gold contacts" />

    <!-- OpenGraph meta tags -->
    <meta property="og:title" content='RDE -  Crimp Tools' />
    <meta property="og:description" content='See our catalog of crimping tools for all coninvers/phoenix gold contacts' />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{$page.url.pathname}" />
</svelte:head>

<PdfAndTitle title='Crimp Tools' pdf='/pdf/crimp-tools.pdf'/>