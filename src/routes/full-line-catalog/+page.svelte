<script lang="ts">
	import AboutUs from "$lib/pre-constructs/AboutUs.svelte";
	import MasonryGallery from "$lib/pre-constructs/MasonryGallery.svelte";
	import { Carousel, Heading, Img, Indicator, Li, List, P, Span, Thumbnails } from "flowbite-svelte";
	import { CheckCircleOutline, CheckCircleSolid, DownloadOutline } from "flowbite-svelte-icons";


	let connectors = [
    {
      connectorImage: "https://example.com/connector-1.jpg",
      series: "Series A",
      locking: "Yes",
      positions: "8",
      voltAmpMax: "250V/10A",
      cableDiameter: "5mm",
      awg: "20-24",
      contactsDiameter: "2mm",
      material: "Copper",
      shield: "Yes",
      ul: "Yes",
      links: "https://example.com/connector-1"
    },
    // Add more connector data here
  ];

</script>

<div class="max-w-7xl m-auto mt-20 p-4 gap-10 flex flex-col sm:flex-row">
<Heading tag="h1" color='text-primary-500' class="mb-4 mt-4 md:mt-0 primary-500" customSize="md:text-3xl text-4xl font-extrabold  md:text-4xl lg:text-5xl">
	Quick Reference Charts
</Heading>
</div>

<div class="max-w-7xl m-auto mt-30 p-4 gap-10 flex flex-col sm:flex-row">

    <div class="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
        
		<header class="px-5 py-4 border-b border-gray-100">
            <h2 class="font-semibold text-xl text-primary-500">All Connector Sizes (Accessories see A-B-03 in PDF)</h2>
        </header>

        <div class="p-3">
            <div class="overflow-x-auto">
                <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">Connector Images</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">Series</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">Locking</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-center">Positions</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">Volt/Amp max.</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">Cable Ø</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">AWG</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">Contacts Ø</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">Material</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">Shield</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">UL</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">Links</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                        {#each connectors as connector}
                        <tr>
                            <td class="p-2 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                        <img class="rounded-full" src={connector.connectorImage} width="40" height="40" alt="">
                                    </div>
                                </div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-left">{connector.series}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-left">{connector.locking}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-center">{connector.positions}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-left">{connector.voltAmpMax}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-left">{connector.cableDiameter}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-left">{connector.awg}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-left">{connector.contactsDiameter}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-left">{connector.material}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-left">{connector.shield}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-left">{connector.ul}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-left"><a href={connector.links} target="_blank">Link</a></div>
                            </td>
                        </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<div class="max-w-7xl m-auto mt-30 p-4 gap-10 flex flex-col sm:flex-row">

    <div class="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
        
		<header class="px-5 py-4 border-b border-gray-100">
            <h2 class="font-semibold text-xl text-primary-500">Mounting - Crimping - Data - Assembly - Accessories</h2>
        </header>

        <div class="p-3">
            <div class="overflow-x-auto">
                <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">Connector Images</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">Series</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">Locking</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-center">Positions</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">Volt/Amp max.</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">Cable Ø</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">AWG</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">Contacts Ø</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">Material</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">Shield</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">UL</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">Links</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                        {#each connectors as connector}
                        <tr>
                            <td class="p-2 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                        <img class="rounded-full" src={connector.connectorImage} width="40" height="40" alt="">
                                    </div>
                                </div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-left">{connector.series}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-left">{connector.locking}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-center">{connector.positions}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-left">{connector.voltAmpMax}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-left">{connector.cableDiameter}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-left">{connector.awg}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-left">{connector.contactsDiameter}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-left">{connector.material}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-left">{connector.shield}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-left">{connector.ul}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <div class="text-left"><a href={connector.links} target="_blank">Link</a></div>
                            </td>
                        </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>



<div class="max-w-7xl m-auto mt-30 p-4 gap-10 flex flex-col sm:flex-row">
      
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
           We specialize in producing modified connector components with a focus on custom-specific applications. 
		   Leveraging our expertise in connector modifications to provide competent solutions for cable assemblies 
		   even in the most challenging environments.
		   </P>

		<P class='text-xl pt-4'>View the full catalog for detailed information on our products and capabilities.</P>

		<a class="flex mt-5 text-xl font-semibold text-primary-700" href="/pdf/rde-terms-warranty.pdf" target="_blank"><DownloadOutline size='xl' class='mr-2'/>Download Full PDF</a>
    
    </div>

</div>
