<script>
	import { Heading, Img, Li, Span } from "flowbite-svelte";
	import { CheckCircleOutline, CheckCircleSolid,  } from "flowbite-svelte-icons";

</script>

<div class="max-w-7xl mt-5 md:mt-10 m-auto my-40 md:flex gap-20 p-4 mb-0">
    <Img class="object-cover rounded shadow-xl object-right-bottom w-[500px] md:inline-flex hidden" src="/images/rde-outside.jpg" alt=""/>

    <div class="wflex flex-col gap-20">
        <div class="text-left text-md">
            <!-- About Us -->
            <Heading tag="h2" class="flex items-center mb-5  text-primary-500" customSize="text-3xl font-extrabold  md:text-4xl lg:text-4xl mt-10">
                About Us
            </Heading>
            <div class="text-lg">
                At rde Connectors & Cables, Inc., we specialize in manufacturing industrial circular connectors for many types of electrical control and distribution systems. Applications include, but are not limited to, connectors for signal, sensor, power, and PCB interfaces, as well as controllers, encoders, and connector interfaces for robotics, feeder/delivery and assembly systems, including complete cable assemblies for any of the above systems. Custom configurations and prototyping are also possible. Our business facility is located in Sunrise, Florida, just west of Fort Lauderdale.
            </div>

            <!-- Mission Statement -->
            <Heading tag="h2" class="flex items-center mb-5 md:mt-5 mt-10  text-primary-500" customSize="text-3xl font-extrabold  md:text-4xl lg:text-4xl">
                Mission Statement
            </Heading>
            <div class="flex text-lg mb-3">
                <CheckCircleSolid size="xl" class="mr-2 mt-[2px]  text-primary-500"/>We are committed to providing product quality and reliability of interconnect systems and assemblies for automation control in some of the most demanding and challenging industries and market applications.
            </div>
        
            <div class="flex text-lg mb-3">
                <CheckCircleSolid size="xl" class="mr-2 mt-[2px]  text-primary-500"/>We are dedicated to continuous improvement and enhancing our leadership position in our chosen markets.
            </div>
            
            <div class="flex text-lg mb-3">
                <CheckCircleSolid size="xl" class="mr-2 mt-[2px]  text-primary-500"/>We are committed to exceed our customer expectations in terms of quality, value and services.
            </div>
        </div>
    </div>
</div>