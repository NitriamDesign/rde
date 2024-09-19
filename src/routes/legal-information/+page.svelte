<script>
	import { page } from "$app/stores";
	import SeoMetaData from "$lib/pre-constructs/SeoMetaData.svelte";
    import { CheckCircleOutline } from "flowbite-svelte-icons";
</script>

<svelte:head>
    <title>RDE - Legal Information</title>
    <meta name="description" content="Rde Connectors and Cables, Inc is part of the Phoenix Contact Group and is incorporated into the Compliance Management System of the Group. For more information on the topic of compliance at Phoenix Contact, please go to Compliance at Phoenix Contact
            As is the case in the entire Phoenix Contact Group, we at rde Connectors and Cables, Inc take compliance extremely seriously." />

    <!-- OpenGraph meta tags -->
	<meta property="og:title" content='RDE - Legal Information' />
    <meta property="og:description" content='Rde Connectors and Cables, Inc is part of the Phoenix Contact Group and is incorporated into the Compliance Management System of the Group. For more information on the topic of compliance at Phoenix Contact, please go to Compliance at Phoenix Contact
            As is the case in the entire Phoenix Contact Group, we at rde Connectors and Cables, Inc take compliance extremely seriously.' />
    <meta property="og:type" content="website" />
	<meta property="og:url" content="{$page.url.pathname}" />
    
</svelte:head>

<div class="max-w-7xl m-auto my-10 flex flex-wrap gap-10 p-4">

    <div class="text-left text-md">
        <div class="text-3xl font-semibold text-m-primary mb-5">
            Compliance
        </div>
        <div class="text-justify text-md">
            Rde Connectors and Cables, Inc is part of the Phoenix Contact Group and is incorporated into the Compliance Management System of the Group. For more information on the topic of compliance at Phoenix Contact, please go to Compliance at Phoenix Contact
            As is the case in the entire Phoenix Contact Group, we at rde Connectors and Cables, Inc take compliance extremely seriously. The core of the Compliance Management System is the Phoenix Contact Group Code of Conduct, which applies without restrictions for us as well. It is supplemented by further measures such as the whistleblower system and the policy statement on the German Supply Chain Act (GSCA).
        </div>
    </div>

    <div class="text-left text-md">
        <div class="text-3xl font-semibold text-m-primary mb-5">
            Code of Conduct
        </div>
        <div class="text-justify text-md mb-10">
            The Code of Conduct of the Phoenix Contact Group forms the core of our compliance measures. As an integral part of the Phoenix Contact Group, it is also implemented at rde Connectors and Cables, Inc in its entirety. It is our common denominator and applies without restriction to all employees.
        </div>
        <iframe title="Environmental Compliance Standard" src='pdf/code-of-conduct.pdf' width="100%" height="900px" style="border:none;"></iframe>
    </div>

    <div class="text-left text-md">
        <div class="text-3xl font-semibold text-m-primary mb-5">
            Whistleblower System
        </div>
        <div class="text-justify text-md">
            The Phoenix Contact Group whistleblower system gives both our employees and third parties the opportunity to report information about possible violations of the law and internal regulations. The whistleblower system also serves as a complaints procedure in accordance with Sections 8 and 9 (1) of the LkSG. Whistleblowing at Phoenix Contact.
        </div>
    </div>

    <div class="text-left text-md">
        <div class="text-3xl font-semibold text-m-primary">
            Environmental Compliance Standard
        </div>
    </div>

    <iframe title="Environmental Compliance Standard" src='pdf/evironmental-compliance-standard.pdf' width="100%" height="1100px" style="border:none;"></iframe>

    
</div>
