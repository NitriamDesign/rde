<script>
    import { Img } from 'flowbite-svelte';
    import { Heading, P, Span, List, Li } from 'flowbite-svelte';
</script>

<div class="max-w-7xl m-auto mt-20  p-4 flex justify-center gap-10">
    
    <Img class="" size="w-[425px]" src="/images/rde-connects-image-grid.jpg" alt=""/>
 
    <div class="">
      <Heading tag="h1" class="mb-4" customSize="text-3xl font-extrabold  md:text-4xl lg:text-4xl">
        <Span gradient gradientClass="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary2-500">Specialists in Robust, Machine Turned Connector Systems.</Span>
      </Heading>
      <Heading tag="h2" customSize="font-semibold" class="mb-2 text-xl font-semibold text-gray-600 dark:text-white">Connectors & Interfaces for</Heading>
      <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400 text-lg">
        <Li>Signal, Sensor, Power, and PCB Interfaces</Li>
        <Li>Feeder/Delivery & Assembly Systems</Li>
        <Li>Controllers, Encoders</Li>
        <Li>Robotics</Li>
      </List>

      <P class="mt-4 pr-20 font-semibold text-gray-600 text-lg">Complete cable assemblies for all the systems are available, along with the ability to customize configurations and develop prototypes as needed.</P>
    </div>

</div>