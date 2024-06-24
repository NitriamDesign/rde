<script lang="ts">
    import ProductCategories from "$lib/homepage/products/ProductCategories.svelte";
    import TopHero from "$lib/homepage/TopHero.svelte";
    import CallToActionRibbon from "$lib/pre-constructs/CallToActionRibbon.svelte";
    import { Button, Img } from 'flowbite-svelte';
    import { Heading, P, Span, List, Li } from 'flowbite-svelte';
    import AboutUs from "$lib/pre-constructs/AboutUs.svelte";
    import { Carousel } from 'flowbite-svelte';
    import {CheckCircleSolid} from "flowbite-svelte-icons";

    const images = [
    { src: '/images/connector-image-39-40.jpg', alt: ' Custom Over-Mold Load Sensor for Calibration Test and Measurement' },
    { src: '/images/hdmi-usb.jpg', alt: 'HDMI and USB Marine & Industrial Feed-Through Connectors' },
    { src: '/images/blood-warmer-harness.jpg', alt: 'Fluid Warmer Harness' },
    { src: '/images/motors-drivers-and-encoder-applications.jpg', alt: 'Motors, Drives, and Encoder Applications' },
    { src: '/images/ferrite-core-over-mold-applications.jpg', alt: 'Ferrite Core Over-Mold Applications' },
    { src: '/images/medical-molex-header-over-mold.jpg', alt: 'Molex Header Over-mold' },
    { src: '/images/measurement-and-calibration-applications.jpg', alt: 'Measurement & Calibration Applications' },
    { src: '/images/military-co-ax-ridle-scoping-application.jpg', alt: 'Co-Ax Rifle Scoping' },
    { src: '/images/smc-robotics-motion-control.jpg', alt: 'Robotics Motion Control' },
    { src: '/images/man-motor-control-commercial-shipping.jpg', alt: 'MAN Motor Control - Commercial Shipping' }
  ];


  let image:any;
      
    let index = 0;
    

</script>

<TopHero />

<div class="max-w-7xl m-auto mt-20 p-4 md:flex justify-center gap-10">


<Img class="" size="md:w-[450px]" src="/images/rde-connects-image-grid.jpg" alt=""/>

<div class="">
    <Heading color='text-primary-500' tag="h1" class="mb-4 mt-4 md:mt-0 primary-500" customSize="font-extrabold  text-4xl lg:text-5xl">
     Specialists in Robust, Machine Turned Connector Systems.
    </Heading>
    <Heading tag="h2" customSize="font-semibold" class="mb-2 md:text-2xl text-lg font-semibold text-gray-600 dark:text-white">Connectors & Interfaces for</Heading>
    <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400 md:text-xl text-md">
    <Li>Signal, Sensor, Power, and PCB Interfaces</Li>
    <Li>Feeder/Delivery & Assembly Systems</Li>
    <Li>Controllers, Encoders</Li>
    <Li>Robotics</Li>
    </List>

    <P class="mt-4 lg:pr-20 font-semibold text-gray-600 text-lg md:text-xl">Complete cable assemblies for all the systems are available, along with the ability to customize configurations and develop prototypes as needed.</P>
</div>
</div>




<ProductCategories/>

<div class="max-w-7xl m-auto mt-20 p-4 md:flex justify-center gap-0">
  
  <div class="w-2/3 content-center">
      <Heading color='text-primary-500' tag="h1" class="mb-4 mt-4 md:mt-0 primary-500" customSize="font-extrabold  text-4xl lg:text-5xl">
        Find the Right Connector Solution for Your Application
      </Heading>
  
      <P class="mt-5 lg:pr-20  text-gray-600 text-lg md:text-xl">
        We offer a diverse range of M-series connectors designed to meet various needs, 
        from high-performance signal connectors to heavy-duty power connectors. 
        Our M23/RC Series provides customizable options, while the stainless steel 
        M23/SSR Series is ideal for caustic and marine environments. 
      </P>
      
      <Button class="bg-m-primary mt-5" href="/full-line-catalog" size="xl">VIEW OUR FULL CATALOG</Button>
    </div>

  <div class="1/3">
<<<<<<< HEAD
  <Img class="" size="md:w-[600px]" src="/images/m17-m58.png" alt=""/>
=======
  <Img class="" size="md:w-[600px]" src="/images/m17-m58.jpg" alt=""/>
>>>>>>> main
  </div>
</div>

<CallToActionRibbon bgImageUrl = 'images/cta-ribbon-blue.jpg'/>

<div class="max-w-7xl m-auto mt-30 p-4 gap-10 flex flex-col sm:flex-row">
      
    <div class='md:w-1/2 md:mt-20 md:order-1 order-2'>
        <Carousel {images} let:Indicators let:Controls on:change={({ detail }) => (image = detail)}>
          <Controls />
          <Indicators />
        </Carousel>
      
        <div class="rounded h-10 dark:text-white p-2 my-2 md:text-center">
          <span class="text-xl font-semibold  text-primary-500 uppercase italic font-sans">
            {image?.alt}
          </span>
        </div>
    </div>

    <div class="md:w-1/2 mt-20 md:order-2 order-1">
        <Heading tag="h1" color='text-primary-500' class="mb-4 mt-4 md:mt-0 primary-500" customSize="md:text-3xl text-4xl font-extrabold  md:text-4xl lg:text-5xl">
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

<div class="max-w-7xl m-auto mt-20 mb-20 p-4 gap-10 md:flex hidden md:visible">
    <Img class="" size="" src="/images/imageRibbon.jpg" alt=""/>
</div>


<AboutUs/>