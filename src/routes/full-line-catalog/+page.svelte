<script lang="ts">
	import AboutUs from "$lib/pre-constructs/AboutUs.svelte";
	import MasonryGallery from "$lib/pre-constructs/MasonryGallery.svelte";
	import { Carousel, Heading, Img, Indicator, Li, List, P, Span, Thumbnails } from "flowbite-svelte";
	import { CheckCircleOutline, CheckCircleSolid, DownloadOutline } from "flowbite-svelte-icons";
  import ConnectorTableGenerator from "$lib/pre-constructs/ConnectorTableGenerator.svelte";
  import { connectorsQuickData, othersQuickData, type QuickConnectorData} from "$lib/data";
	import SeoMetaData from "$lib/pre-constructs/SeoMetaData.svelte";
	import { page } from "$app/stores";

  let titles = [
    "Connector Images",
    "Series",
    "Locking",
    "Positions",
    "Volt/Amp max.",
    "Cable Ø",
    "AWG",
    "Contacts Ø",
    "Material",
    "Shield",
    "UL",
    "Links"
  ];

  let othertitles = [
    "Connector Images",
    "Series",
    "Locking",
    "Positions",
    "Volt/Amp max.",
    "Cable Ø",
    "AWG",
    "Contacts Ø",
    "Material",
    "Shield",
    "UL",
    "Links"
  ];
</script>

<svelte:head>
    <title>RDE - Full Product Catalog</title>
    <meta name="description" content="View the full catalog for detailed information on our products and capabilities. We specialize in connector components with a focus on custom-specific applications, 
    leveraging our expertise in interconnect systems to provide competent solutions for cable assemblies even in the most challenging environments. " />

    <!-- OpenGraph meta tags -->
    <meta property="og:title" content='RDE - Full Product Catalog' />
    <meta property="og:description" content='View the full catalog for detailed information on our products and capabilities. We specialize in connector components with a focus on custom-specific applications, 
    leveraging our expertise in interconnect systems to provide competent solutions for cable assemblies even in the most challenging environments.' />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{$page.url.pathname}" />
</svelte:head>

<div class="max-w-7xl m-auto mt-[35px] p-4 gap-20 flex flex-col sm:flex-row">
      
  <div class='md:w-1/4 md:mt-10 md:order-1 order-2'>
      <Img class="" size="h-[400px]" src="/images/rde-catalog.jpg" alt=""/>
    
      <div class="rounded h-10 dark:text-white p-2 my-2 md:text-center">
        <span class="text-xl font-semibold  text-primary-500 uppercase italic font-sans">
          
        </span>
      </div>
  </div>

  <div class="md:w-3/4 mt-20 md:order-2 order-1">
      <Heading tag="h1" color='text-primary-500' class="mb-4 mt-4 md:mt-0 primary-500" customSize="md:text-3xl text-4xl font-extrabold  md:text-4xl lg:text-5xl">
          Full Line Catalog
      </Heading>
  
      <P class='text-xl'>
        We specialize in connector components with a focus on custom-specific applications, leveraging our expertise in interconnect systems to provide competent solutions for cable assemblies even in the most challenging environments.
     </P>

  <P class='text-xl pt-4'>View the full catalog for detailed information on our products and capabilities.</P>

  <a class="flex mt-5 text-xl font-semibold text-primary-700" href="/pdf/RDE-Full-Catalog.pdf" target="_blank"><DownloadOutline size='xl' class='mr-2'/>Download Full PDF</a>
  
  </div>
</div>

<div class="max-w-[1600px] m-auto mt-5 p-4 gap-10 flex flex-col sm:flex-row">
<Heading tag="h1" color='text-primary-500' class="mb-4 mt-4 md:mt-0 primary-500" customSize="md:text-3xl text-4xl font-extrabold  md:text-4xl lg:text-5xl">
	Quick Reference List
</Heading>
</div>

<div class="max-w-[1600px] m-auto mt-30 p-4 gap-10 flex flex-col sm:flex-row">

    <div class="w-full max-w-8xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
        
		<header class="px-5 py-4 border-b border-gray-100">
            <h2 class="font-semibold text-xl text-primary-500">All Connector Sizes (Accessories see A-B-03 in PDF)</h2>
        </header>

        <ConnectorTableGenerator data={connectorsQuickData} titles={titles}/>
    </div>
</div>

<div class="max-w-[1600px] m-auto mt-20 p-4 gap-10 flex flex-col sm:flex-row">

    <div class="w-full max-w-[1600px] mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
        
		<header class="px-5 py-4 border-b border-gray-100">
            <h2 class="font-semibold text-xl text-primary-500">Mounting - Crimping - Data - Assembly - Accessories</h2>
        </header>

        <ConnectorTableGenerator data={othersQuickData} titles={othertitles}/>

    </div>
</div>




