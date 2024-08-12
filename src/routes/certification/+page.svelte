<script>
	import PdfAndTitle from "$lib/pre-constructs/PDFAndTitle.svelte";
	import { Heading, Span, Img, Button } from "flowbite-svelte";
	import { ArrowRightOutline } from "flowbite-svelte-icons";

</script>

<div class="max-w-7xl m-auto mt-20 p-4 md:flex justify-center gap-10">

    <div class="text-left text-md md:w-1/2">

        <Heading tag="h2" class="flex items-center text-primary-500 mb-10" customSize="text-3xl font-extrabold md:text-4xl lg:text-4xl">
            ISO 9001-2015 : Compliant
        </Heading>

        
        <div class=" text-lg mb-5">
            At rde Connectors & Cables, Inc., we have long been recognized as a premier solutions provider for
            industrial automation interconnects and device over-molding applications.
        </div>

        <div class="text-lg">            
            rde is an ISO 9001 : 2015 compliant company. Established since 1981,
            we are recognized internationally for providing high-quality products and
            services to our customers on a consistent basis. Our continuous
            improvement efforts, combined with strong quality control standards,
            have allowed our established and new customers to place their
            confidence in our products and services for their applications and
            systems. 
        </div>
        
        <Button color="none" class="bg-m-primary w-fit uppercase text-m-light hover:bg-primary-600 rounded text-md font-thin mt-10" href="/pdf/RDE-QMS-Manual.pdf" target="_blank" >
            Download QMS Manual<ArrowRightOutline size="lg" class="ml-2"/>
        </Button>

    </div>

    <div class="md:w-1/2 flex-col justify-center">
        <Img class="md:mt-0 mt-10 w-full h-[650px] object-cover rounded-lg shadow-md" src="/certification/quality-certificate-rde.jpg" alt="2015 rde ISO Compliant Certificate"/>
        
        
    </div>
</div>

<div class="max-w-7xl m-auto mt-20 p-4 md:flex justify-center gap-10">
    <div class="p-6 bg-gray-100 rounded-lg shadow-md">
        <h1 class="text-2xl font-bold mb-4">Quality Management System Overview</h1>
        <p class="mb-4">
            rde Connectors and Cables, Inc. has developed and implemented a Quality Management System (QMS) to document the company's best business practices, better satisfy the requirements and expectations of its customers, and improve the overall management of the company.
        </p>
        <h2 class="text-xl font-semibold mb-2">Implementation of the Quality Management System</h2>
        <p class="mb-4">To implement this quality management system, rde has:</p>
        <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
            <li>Identified the processes required for the Quality Management System</li>
            <li>Ascertained the sequence and interaction of these processes</li>
            <li>Determined the criteria and methods required to verify the effective operation and control of these processes</li>
            <li>Verified the availability of information necessary to support the operation and the monitoring of these processes</li>
            <li>Measured, monitored, and analyzed these processes and implemented action necessary to achieve planned results and continual improvement</li>
        </ul>
        <h2 class="text-xl font-semibold mb-2">Commitment to Quality Control</h2>
        <p class="mb-4">
            rde Connectors and Cables, Inc. has committed to controlling products and processes to verify that they meet or exceed the contractual requirements. The extent of control will be as follows:
        </p>
        <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
            <li>The potential impact of the externally provided processes and products on rde's ability to consistently meet both the customer's and applicable statutory and regulatory requirements</li>
            <li>The degree to which the control of the process is shared</li>
            <li>The capability of achieving the control through Paragraph 7.4, Communication, in the Quality Manual</li>
        </ul>
        <h2 class="text-xl font-semibold mb-2">Manual Structure</h2>
        <p class="mb-4">
            This manual is divided into thirteen sections. The first ten sections correlate to the Quality Management System sections of ISO 9001-15. Sections Eleven and Twelve contain additional information. Section Thirteen is the revision history for this document. Each section begins with a policy statement expressing rde’s obligation to implement the basic requirements of the referenced Quality Management System section.
        </p>
    </div>


</div>

    <PdfAndTitle title='RDE QMS Manual' pdf='/pdf/RDE-QMS-Manual.pdf'/>

