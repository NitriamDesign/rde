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
    <title>RDE - Cordsets & Assemblies</title>
    <meta name="description" content="See our catalog of coninvers M23/M27 cordsets, receptacles, and assemblies"  />

    <!-- OpenGraph meta tags -->
    <meta property="og:title" content='RDE -  Crimp Contacts' />
    <meta property="og:description" content='See our catalog of coninvers M23/M27 cordsets, receptacles, and assemblies' />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{$page.url.pathname}" />
</svelte:head>

<PdfAndTitle title='M23/M27 Cordsets & Assemblies' pdf='/pdf/HA-HF.pdf'/>