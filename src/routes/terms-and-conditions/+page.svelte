<script>
    import { CheckCircleOutline, ArrowRightAltSolid, DownloadOutline } from "flowbite-svelte-icons";
    import { Heading, P, Span, List, Li } from 'flowbite-svelte';
</script>

<div class="max-w-7xl m-auto my-10 flex flex-wrap gap-10 p-4">
    <div class="text-left text-md">
        <Heading class="mb-5" color="text-primary-500" tag="h1">Terms & Conditions</Heading>
        <P>
            RDE Connectors and Cables, Inc is part of the Phoenix Contact Group and is incorporated into the Compliance Management System of the Group. For more information on the topic of compliance at Phoenix Contact, please go to Compliance at Phoenix Contact
            As is the case in the entire Phoenix Contact Group, we at rde Connectors and Cables, Inc take compliance extremely seriously. The core of the Compliance Management System is the Phoenix Contact Group Code of Conduct, which applies without restrictions for us as well. It is supplemented by further measures such as the whistleblower system and the policy statement on the German Supply Chain Act (GSCA).
        </P>

        <Heading class="mt-5" color="text-primary-500" tag="h3">Terms</Heading>
        <P>
            All orders are shipped C.O.D. or via credit card payment, unless an open account has been established
            previously. Open account terms are 30 days net from the date of the invoice. Should a collection fee be
            incurred due to delayed payments, it will be applied to the account. Other penalty charges may apply. All
            products purchased from rde Connectors & Cables, Inc., remain the property of rde until all outstanding
            invoices have been paid in full.
        </P>

        <Heading class="mt-5" color="text-primary-500" tag="h3">Minimum Orders</Heading>
        <P>
            There is no minimum order requirement. Orders under $100 may be paid by credit card only. Orders under
            $100.00 are subject to a $25.00 handling charge, unless other arrangements are made. A minimum order
            amount of $250.00 is required for orders outside of the USA.
        </P>

        <Heading class="mt-5"  color="text-primary-500" tag="h3">Shipping</Heading>
        <P>
            Unless otherwise specified, all orders will be shipped via UPS Ground. All goods are shipped FOB
            Sunrise, Florida. We insure each UPS shipment. Insurance will only be excluded if we have a written
            statement of the customer to pay the full amount of the invoice if the shipment gets lost. The title does not
            pass to the customer until the goods are fully paid to rde Connectors & Cables, Inc.
        </P>

        <Heading class="mt-5" color="text-primary-500" tag="h3">Backorders</Heading>
        <P>
            Unless otherwise instructed, any items that are out of stock will be placed on backorder. The customer
            is instructed not to reorder this item as it will be shipped upon arrival at our production facilities.
        </P>

        <Heading class="mt-5" color="text-primary-500" tag="h3">Returns</Heading>
        <P>
            rde Connectors & Cables, Inc., warrants its merchandise to be free from any defect(s) in material,
            assembly, title, or other. All orders are final; only defective goods may be returned. In the event of a
            product defect, it may be returned to our current business address, provided the customer has secured an
            RMA number from rde, and has displayed such on the outside of the package. The customer may call or
            write to obtain an RMA number from our sales department prior to returning the product(s). All RMA
            requests must be submitted within 30 days of receipt of the merchandise.
        </P>

        <Heading class="mt-5" color="text-primary-500" tag="h3">Cancellations</Heading>
        <P>
            Orders may only be cancelled within 1 business day after the date of placement.There will be no exceptions.
        </P>

        <Heading class="mt-5"  color="text-primary-500"tag="h3">Notice</Heading>
        <P>
            RDE Connectors & Cables, Inc., reserves the right to change its Conditions of Sale without prior notice.
        </P>
        
        <a href=""><DownloadOutline/>Download PDF</a>
     
        <Heading class="mt-10 mb-5"  color="text-primary-500" tag="h1">Warranty & Disclaimer</Heading>
        <P>A limited warranty applies to the products sold by rde Connectors & Cables, Inc. </P>
        
        <P class="mt-5">
           RDE Connectors & Cables, Inc. will not be liable for any loss, damage, cost of repairs, incidental or
           consequential damages of any kind, whether or not based upon express or limited warranty, contract,
           negligence, or strict liability arising in connection with the design, manufacture, sale, use, or repair of
           the products.
        </P>

        <P class="mt-5">
        RDE Connectors & Cables, Inc. expressly warrants that each product sold will be free from defects in
        material and workmanship. The purchaser should inspect goods delivered with respect to possible external
        damage immediately upon receipt. rde Connector & Cables, Inc.'s liability under this warranty is limited to
        the repair or replacement of any unit which proves to be defective in material or workmanship under normal
        use or service within one year from date of shipment, provided the unit is returned at purchaser's expense
        to seller's shipping point. No material is accepted for analysis, replacement, or repair without an RMA
        number issued by the sales department of rde Connectors & Cables, Inc.
        </P>

        <P class="mt-5">
        The warranty of rde Connectors & Cables, Inc. shall not apply to any goods or components thereof which
        have been subjected to any of the following:
        </P>

        <List tag="ul" class="space-y-1 mt-2 text-red-500 dark:text-gray-400 md:text-lg text-md font-bold">
            <Li icon={true}><ArrowRightAltSolid class="mr-2"/>IMPROPER OPERATION</Li>
            <Li icon={true}><ArrowRightAltSolid class="mr-2"/>STORAGE OR MAINTENANCE</Li>
            <Li icon={true}><ArrowRightAltSolid class="mr-2"/>MATERIAL MODIFICATIONS, UNLESS APPROVED BY RDE CONNECTORS & CABLES, INC.</Li>
            <Li icon={true}><ArrowRightAltSolid class="mr-2"/>ANY DAMAGE CAUSED BY ACCIDENT, REGARDLESS OF FAULT</Li>
        </List>


    </div>

    <iframe title="Environmental Compliance Standard" src='pdf/evironmental-compliance-standard.pdf' width="100%" height="1100px" style="border:none;"></iframe>
</div>
