<script lang="ts">
	import AboutUs from "$lib/pre-constructs/AboutUs.svelte";
	import MasonryGallery from "$lib/pre-constructs/MasonryGallery.svelte";
	import { Carousel, Heading, Img, Indicator, Span, Thumbnails } from "flowbite-svelte";
	import { CheckCircleOutline } from "flowbite-svelte-icons";

	const images = [
		{ src: '/people/Image_06.png', alt: 'Needs Alt Text' },
		{ src: '/people/Image_07.png', alt: 'Needs Alt Text' },
		{ src: '/people/Image_08.png', alt: 'Needs Alt Text' },
		{ src: '/people/Image_09.png', alt: 'Needs Alt Text' },
		{ src: '/people/Image_21.jpg', alt: 'Needs Alt Text' },
		{ src: '/people/Image_27.png', alt: 'Needs Alt Text' },
		{ src: '/people/Image_39.png', alt: 'Needs Alt Text' },
	];

	let image = images[0];
	let index = 0;

	$: image = images[index];
</script>

<div class="max-w-7xl m-auto my-40 lg:flex xl:gap-20 gap-10 p-4 flex-col md:flex-row">
	<Img class="object-cover rounded shadow-xl object-right-bottom w-[500px] mb-10" src="/images/rde-outside.jpg" alt=""/>

	<div class="wflex flex-col gap-20">
		<div class="text-left text-md">
			<!-- About Us -->
			<Heading tag="h2" class="flex items-center mb-5" customSize="text-3xl font-extrabold  md:text-4xl lg:text-4xl">
				<Span gradient gradientClass="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary2-700">About Us</Span>
			</Heading>
			<div class="text-lg">
				At rde Connectors & Cables, Inc., we specialize in manufacturing industrial circular connectors for many types of electrical control and distribution systems. Applications include, but are not limited to, connectors for signal, sensor, power, and PCB interfaces, as well as controllers, encoders, and connector interfaces for robotics, feeder/delivery and assembly systems, including complete cable assemblies for any of the above systems. Custom configurations and prototyping are also possible. Our business facility is located in Sunrise, Florida, just west of Fort Lauderdale.
			</div>

			<!-- Mission Statement -->
			<Heading tag="h2" class="flex items-center mb-5 mt-5" customSize="text-3xl font-extrabold  md:text-4xl lg:text-4xl">
				<Span gradient gradientClass="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary2-700">Mission Statement</Span>
			</Heading>
			<div class="flex text-lg mb-3">
				<CheckCircleOutline size="xl" class="mr-2 mt-[2px]"/>Committed to providing product quality and reliability of interconnect systems and assemblies for automation control in some of the most demanding and challenging industries and market applications.
			</div>
		
			<div class="flex text-lg mb-3">
				<CheckCircleOutline size="xl" class="mr-2 mt-[2px]"/>We are dedicated to continuous improvement and enhancing our leadership position in our chosen markets.
			</div>
			
			<div class="flex text-lg mb-3">
				<CheckCircleOutline size="xl" class="mr-2 mt-[2px]"/>We are committed to exceed our customer expectations in terms of quality, value and services.
			</div>
		</div>
	</div>
</div>

<div class="sm:m-auto sm:max-w-7xl w-[95%] m-4 bg-gray-50 p-10 flex flex-col gap-10 shadow-xl rounded-xl">
	<div class="rounded dark:text-white text-center">
		<span class="text-xl font-semibold text-primary-500 uppercase italic font-sans">
			{image.alt}
		</span>
	</div>

	<Carousel {images} bind:index imgClass="object-contain h-96">
	</Carousel>

	<Thumbnails class="bg-transparent gap-3" let:Thumbnail let:image let:selected {images} bind:index>
		<Thumbnail {...image} {selected} class="rounded-md shadow-xl hover:outline hover:outline-primary-500 object-cover h-24 w-24" activeClass="outline outline-primary-400"/>
	</Thumbnails>
</div>
