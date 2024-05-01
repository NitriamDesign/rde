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
	import AboutUs from "$lib/pre-constructs/AboutUs.svelte";
  
  
</script>

<TopHero/>

<div class="max-w-7xl m-auto mt-20 p-4 md:flex justify-center gap-10">
    
  <Img class="" size="md:w-[425px]" src="/images/rde-connects-image-grid.jpg" alt=""/>

  <div class="">
    <Heading tag="h1" class="mb-4 mt-4 md:mt-0 primary-500" customSize="text-3xl font-extrabold  md:text-4xl lg:text-4xl">
      <Span gradient gradientClass="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-secondary-600">Specialists in Robust, Machine Turned Connector Systems.</Span>
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

<AboutUs/>
