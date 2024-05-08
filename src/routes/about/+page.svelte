<script>
	import AboutUs from "$lib/pre-constructs/AboutUs.svelte";
	import MasonryGallery from "$lib/pre-constructs/MasonryGallery.svelte";
	import { Heading, Img, Span } from "flowbite-svelte";
	import { CheckCircleOutline } from "flowbite-svelte-icons";
</script>


<div class="max-w-7xl m-auto my-40 md:flex gap-20 p-4">
    <Img class="object-cover rounded shadow-xl object-right-bottom w-[500px]" src="/images/rde-outside.jpg" alt=""/>

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


<div class="max-w-7xl m-auto grid grid-cols-2 gap-20 p-4 justify-center">
    <img src="/people/assembly-room.jpg" alt="assembly room" class="object-cover aspect-square rounded shadow-xl">
    <img src="/people/people-1.jpg" alt="people"  class="object-cover aspect-square rounded shadow-xl">
    <img src="/people/people-2.jpg" alt="people"  class="object-cover aspect-square rounded shadow-xl">
    <img src="/people/store-front.jpg" alt="store front"  class="object-cover aspect-square rounded shadow-xl">
</div>