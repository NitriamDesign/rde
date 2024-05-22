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

	<!-- Iframe container -->
	<div class="flex-1 ml-0 md:ml-10 mt-10 md:mt-0">
		<iframe title="connector Inserts" src="pdf/connector-inserts.pdf" width="100%" height="1100px" style="border:none;"></iframe>
		<!--<iframe title={product.name} src={product.pdf} width="100%" height="1100px" style="border:none;"></iframe>-->
	</div>
</div>
