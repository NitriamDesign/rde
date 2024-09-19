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
    <title>RDE - Crimp Contacts</title>
    <meta name="description" content="See our catalog of gold plated crimp contacts (2 mm Ø) for Connector inserts series RC/UC/TU/SSR/CA and more"  />

    <!-- OpenGraph meta tags -->
    <meta property="og:title" content='RDE -  Crimp Contacts' />
    <meta property="og:description" content='See our catalog of gold plated crimp contacts (2 mm Ø) for Connector inserts series RC/UC/TU/SSR/CA and more' />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{$page.url.pathname}" />
</svelte:head>

<PdfAndTitle title='Crimp Contacts' pdf='/pdf/contacts-all.pdf'/>