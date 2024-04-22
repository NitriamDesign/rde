<script>
    import ProductCategories from "$lib/homepage/products/ProductCategories.svelte";
    import TopHero from "$lib/homepage/TopHero.svelte";
    import ProductCardHorizontal from "$lib/homepage/products/ProductCardHorizontal.svelte";
    import CallToActionRibbon from "$lib/pre-constructs/CallToActionRibbon.svelte";
	  import HeroBanner from "$lib/pre-constructs/hero-banner/HeroBanner.svelte";
    import TextContent from "$lib/homepage/TextContent.svelte";
    import { Img } from 'flowbite-svelte';
    import { Heading, P, Span, List, Li } from 'flowbite-svelte';
  
  
</script>

<TopHero/>
<div class="max-w-7xl m-auto mt-20  p-4 flex justify-center gap-10">
    
      <Img class="" size="w-[375px]" src="/images/rde-connects-image-grid.jpg" alt=""/>
   
      <div class="">
        <Heading tag="h1" class="mb-4" customSize="text-3xl font-extrabold  md:text-5xl lg:text-5xl">
          <Span gradient gradientClass="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-yellow-200">Specialists in Robust, Machine Turned Connector Systems.</Span>
        </Heading>
        <Heading tag="h2" customSize="text-lg font-semibold" class="mb-2 text-lg font-semibold text-gray-600 dark:text-white">Connectors & Interfaces for</Heading>
        <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
          <Li>Signal, Sensor, Power, and PCB Interfaces</Li>
          <Li>Feeder/Delivery & Assembly Systems</Li>
          <Li>Controllers, Encoders</Li>
          <Li>Robotics</Li>
        </List>

        <P class="mt-4 font-semibold text-gray-600">Complete cable assemblies for all the systems are available, along with the ability to customize configurations and develop prototypes as needed.</P>
      </div>
  
</div>



<ProductCategories/>
<CallToActionRibbon bgImageUrl = '/standin/dum.png'/>
<ProductCardHorizontal/>
<HeroBanner/>