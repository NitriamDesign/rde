<script lang="ts">
	import AboutUs from "$lib/pre-constructs/AboutUs.svelte";
	import MasonryGallery from "$lib/pre-constructs/MasonryGallery.svelte";
	import { Carousel, Heading, Img, Indicator, Span, Thumbnails } from "flowbite-svelte";
	import { CheckCircleOutline } from "flowbite-svelte-icons";
	import PdfAndTitle from "$lib/pre-constructs/PDFAndTitle.svelte";
	import SeoMetaData from "$lib/pre-constructs/SeoMetaData.svelte";

	
</script>
<svelte:head>
    <title>test</title>
    <meta name="description" content="testing" />

    <!-- OpenGraph meta tags -->
    <meta property="og:title" content='test' />
    <meta property="og:description" content='testing' />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{window.location.href}" />
</svelte:head>

<PdfAndTitle title='All Accessories' pdf='/pdf/accessories-all.pdf'/>

