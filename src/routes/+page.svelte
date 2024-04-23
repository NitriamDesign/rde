<script>
    import ProductCategories from "$lib/homepage/products/ProductCategories.svelte";
    import TopHero from "$lib/homepage/TopHero.svelte";
    import ProductCardHorizontal from "$lib/homepage/products/ProductCardHorizontal.svelte";
    import CallToActionRibbon from "$lib/pre-constructs/CallToActionRibbon.svelte";
	  import HeroBanner from "$lib/pre-constructs/HeroBanner.svelte";
    import TextContent from "$lib/homepage/TextContent.svelte";
    import { Img } from 'flowbite-svelte';
    import { Heading, P, Span, List, Li } from 'flowbite-svelte';
    import LeftImageRightContent from "$lib/pre-constructs/LeftImageRightContent.svelte";
    import { CheckCircleOutline } from "flowbite-svelte-icons";
  
  
</script>

<TopHero/>

<div class="max-w-7xl m-auto mt-20 p-4 md:flex justify-center gap-10">
    
  <Img class="" size="md:w-[425px]" src="/images/rde-connects-image-grid.jpg" alt=""/>

  <div class="">
    <Heading tag="h1" class="mb-4 mt-4 md:mt-0" customSize="text-3xl font-extrabold  md:text-4xl lg:text-4xl">
      <Span gradient gradientClass="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary2-500">Specialists in Robust, Machine Turned Connector Systems.</Span>
    </Heading>
    <Heading tag="h2" customSize="font-semibold" class="mb-2 text-xl font-semibold text-gray-600 dark:text-white">Connectors & Interfaces for</Heading>
    <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400 md:text-lg text-md">
      <Li>Signal, Sensor, Power, and PCB Interfaces</Li>
      <Li>Feeder/Delivery & Assembly Systems</Li>
      <Li>Controllers, Encoders</Li>
      <Li>Robotics</Li>
    </List>

    <P class="mt-4 lg:pr-20 font-semibold text-gray-600 ">Complete cable assemblies for all the systems are available, along with the ability to customize configurations and develop prototypes as needed.</P>
  </div>

</div>

<ProductCategories/>
<CallToActionRibbon bgImageUrl = '/standin/dum.png'/>

<div class="max-w-7xl m-auto my-40 md:flex gap-20 p-4">
  <Img class="" size="w-[500px]" src="/images/rde-outside.jpg" alt=""/>

  <div class="wflex flex-col gap-20">
      <div class="text-left text-md">
          <Heading tag="h2" class="flex items-center mb-5" customSize="text-3xl font-extrabold  md:text-4xl lg:text-4xl">
            <Span gradient gradientClass="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary2-700">About Us</Span>
          </Heading>

          <div class="text-lg">
              At rde Connectors & Cables, Inc., we specialize in manufacturing industrial circular connectors for many types of electrical control and distribution systems. Applications include, but are not limited to, connectors for signal, sensor, power, and PCB interfaces, as well as controllers, encoders, and connector interfaces for robotics, feeder/delivery and assembly systems, including complete cable assemblies for any of the above systems. Custom configurations and prototyping are also possible. Our business facility is located in Sunrise, Florida, just west of Fort Lauderdale.
          </div>

          <Heading tag="h2" class="flex items-center mb-5 mt-5" customSize="text-3xl font-extrabold  md:text-4xl lg:text-4xl">
            <Span gradient gradientClass="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary2-700">Mission Statement</Span>
          </Heading>

          
        <div class="flex text-lg mb-3">
            <CheckCircleOutline size="xl" class="mr-2 mt-[2px]"/>rde is committed to providing product quality and reliability of interconnect systems and assemblies for automation control in some of the most demanding and challenging industries and market applications.
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
