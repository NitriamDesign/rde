<script lang="ts">
    import ProductCategories from "$lib/homepage/products/ProductCategories.svelte";
    import TopHero from "$lib/homepage/TopHero.svelte";
    import CallToActionRibbon from "$lib/pre-constructs/CallToActionRibbon.svelte";
    import { Img } from 'flowbite-svelte';
    import { Heading, P, Span, List, Li } from 'flowbite-svelte';
    import AboutUs from "$lib/pre-constructs/AboutUs.svelte";
    import { Carousel } from 'flowbite-svelte';
    import {CheckCircleSolid} from "flowbite-svelte-icons";

    const images = [
    { src: '/images/hdmi-usb.jpg', alt: 'HDMI and USB Marine & Industrial Feed-Through Connectors' },
    { src: '/images/blood-warmer-harness.jpg', alt: 'Military/Medical - Blood Warmer Harness' },
    { src: '/images/motors-drivers-and-encoder-applications.jpg', alt: 'Motors, Drives, and Encoder Applications' },
    { src: '/images/ferrite-core-over-mold-applications.jpg', alt: 'Ferrite Core Over-Mold Applications' },
    { src: '/images/medical-molex-header-over-mold.jpg', alt: 'Medical - Molex Header Over-mold' },
    { src: '/images/measurement-and-calibration-applications.jpg', alt: 'Measurement & Calibration Applications' },
    { src: '/images/military-co-ax-ridle-scoping-application.jpg', alt: 'Military CoAx Rifle Scoping' }
  ];


  let image:any;
      
    let index = 0;
    

</script>

<TopHero/>

<div class="max-w-7xl m-auto mt-20 p-4 md:flex justify-center gap-10">


<Img class="" size="md:w-[450px]" src="/images/rde-connects-image-grid.jpg" alt=""/>

<div class="">
    <Heading color='text-primary-500' tag="h1" class="mb-4 mt-4 md:mt-0 primary-500" customSize="text-3xl font-extrabold  md:text-4xl lg:text-5xl">
     Specialists in Robust, Machine Turned Connector Systems.
    </Heading>
    <Heading tag="h2" customSize="font-semibold" class="mb-2 text-2xl font-semibold text-gray-600 dark:text-white">Connectors & Interfaces for</Heading>
    <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400 md:text-xl text-md">
    <Li>Signal, Sensor, Power, and PCB Interfaces</Li>
    <Li>Feeder/Delivery & Assembly Systems</Li>
    <Li>Controllers, Encoders</Li>
    <Li>Robotics</Li>
    </List>

    <P class="mt-4 lg:pr-20 font-semibold text-gray-600 text-xl">Complete cable assemblies for all the systems are available, along with the ability to customize configurations and develop prototypes as needed.</P>
</div>
</div>


<ProductCategories/>
<CallToActionRibbon bgImageUrl = '/standin/dum.png'/>

<div class="max-w-7xl m-auto mt-30 p-4 gap-10 md:flex">
      
    <div class='w-1/2'>
        <Carousel {images} let:Indicators let:Controls on:change={({ detail }) => (image = detail)}>
          <Controls />
          <Indicators />
        </Carousel>
      
        <div class="rounded h-10 dark:text-white p-2 my-2 text-center">
          <span class="text-xl font-semibold  text-primary-500 uppercase italic font-sans">
            {image?.alt}
            </span>
        </div>
    </div>

    <div class="w-1/2">
        <Heading tag="h1" color='text-primary-500' class="mb-4 mt-4 md:mt-0 primary-500" customSize="text-3xl font-extrabold  md:text-4xl lg:text-5xl">
            Our Capabilities
        </Heading>
    
        <P class='text-xl'>
           We specialize in producing modified connector components with a focus on custom-specific applications. Leveraging our expertise in connector modifications to provide competent solutions for cable assemblies even in the most challenging environments.
        </P>
    
        <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400 md:text-xl text-md mt-5">
            <Li icon={true}><CheckCircleSolid size='xl' class='mr-2 text-primary-500'/> Capacity for low to mid-volume production</Li>
            <Li icon={true}><CheckCircleSolid size='xl' class='mr-2  text-primary-500'/>Custom-specific applications and modifications for connectors</Li>
            <Li icon={true}><CheckCircleSolid size='xl' class='mr-2  text-primary-500'/>Over-molding capabilities</Li>
            <Li icon={true}><CheckCircleSolid size='xl' class='mr-2  text-primary-500'/>Expertise in custom industrial cabling applications</Li>
        </List>

    </div>
</div>

<div class="max-w-7xl m-auto mt-10 p-4 gap-10 md:flex">
    <Img class="" size="" src="/images/imageRibbon.jpg" alt=""/>
</div>


<AboutUs/>