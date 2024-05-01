<script>
    import { MapPinAltSolid, PhoneSolid, MessagesSolid, InfoCircleSolid, BookSolid, QuestionCircleSolid, UsersGroupSolid, ClockSolid, PrinterSolid} from 'flowbite-svelte-icons';
</script>


<div class="h-full p-5 mt-20 bg-gray-100 md:mt-40">
    <div class="md:flex justify-between max-w-7xl m-auto text-m-dark gap-20 md:pt-5 md:pb-5">
        <div class="mb-10 md:mb-0">
            <div class="text-lg font-semibold uppercase mb-4">    
                RDE CONNECTS
            </div>
            
            <div class="flex flex-col gap-2 text-md font-semibold uppercase text-m-primary2">
                <div class="flex items-center gap-2">       
                    <BookSolid/>Products
                </div>

                <div class="flex items-center gap-2">      
                    <QuestionCircleSolid/>Guides
                </div>

                <div class="flex items-center gap-2">     
                    <UsersGroupSolid/>About Us
                </div>
            </div>
        </div>


        <div class="mb-10 md:mb-0">    
            <div class="text-lg font-semibold uppercase mb-4">    
                Contact
            </div>
            
            <div class="flex flex-col gap-2 text-md font-semibold text-m-primary2">
                <div class="flex items-center gap-2">    
                    <MapPinAltSolid/>5277 NW 108 Ave Sunrise, FL 33351, USA
                </div>

                <div class="flex items-center gap-2">   
                    <PhoneSolid/>(954) 746-6400
                </div>

                <div class="flex items-center gap-2 text-m-primary2">   
                    <PrinterSolid/>Fax: (954) 746-4700
                </div>

                <div class="flex items-center gap-2">   
                    <MessagesSolid/>sales@rde-usa.com
                </div>
            </div>
        </div>

        <div class="">    
            <div class="text-lg font-semibold uppercase mb-4">    
                <div class="flex items-center gap-2">  
                    ISO 9001-2015 Certified
                </div>
            </div>
            
            <div class="flex flex-col gap-2 text-md font-semibold  text-m-primary2">
                <a class="flex items-center gap-2" href="/certification">  
                    <InfoCircleSolid/>Certification
                </a>
                <a class="flex items-center gap-2" href="/terms-and-conditions">  
                    <InfoCircleSolid/>Terms & Conditions
                </a>
                <a class="flex items-center gap-2" href="/legal-information">  
                    <InfoCircleSolid/>Legal Information
                </a>
            </div>
        </div>

        <div class="">    
            <div class="text-lg font-semibold uppercase mb-4">    
                <div class="flex items-center gap-2">  
                    Operation
                </div>
            </div>
        
            <div class="flex gap-2 text-md font-semibold text-m-primary2 items-start">   
                <ClockSolid/>
                    Monday - Friday<br>
                    8:30am - 12:30pm and 1:00pm - 5:00pm<br>
                    Eastern Time<br>
            </div>
        </div>


    </div>
</div>

<div class="bg-m-dark md:h-15">
    <div class="md:flex justify-center max-w-7xl m-auto h-full items-center text-gray-300 gap-20 p-5">
        <div class="text-xs md:text-md">    
            <a href="/legal">    
                Legal Information
            </a>
        </div>
        <div class="text-xs md:text-md">    
            <a href="/legal">    
                Terms & Conditions
            </a>
        </div>

        <div class="text-xs md:text-md">    
            © Copyright 2024 - RDE Connectors & Cables, Inc.
        </div>
    </div>
</div>