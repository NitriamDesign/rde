<script lang="ts">
    import { writable } from 'svelte/store';
    import { Button, ButtonGroup } from 'flowbite-svelte';

    interface AssemblyData {
        name: string;
        title: string;
        pdf: string;
    }

    let generalStyling = "hover:scale-105 cursor-pointer transition-transform w-fit";

    let selectedSchematic = writable<string>("SCH_HC");
    let selectedPhotographic = writable<string>("PH_HC");
    let selectedSingle = writable<string>("SCH_HC");
    let mode = writable<string>("single");

    // Ensure initial state on page load
    $: if (!$selectedSchematic || !$selectedPhotographic) {
        selectedSchematic.set(schematicDocuments[0].name);
        selectedPhotographic.set(photographicDocuments[0].name);
        selectedSingle.set(schematicDocuments[0].name);
    }

    // Handle mode transitions
    $: if ($mode === 'dual' && !$selectedPhotographic) {
        selectedPhotographic.set(photographicDocuments[0].name);
    } else if ($mode === 'single' && !$selectedSingle) {
        selectedSingle.set(schematicDocuments[0].name);
    }

    const handleSelectSchematic = (name: string) => {
        if ($mode === 'single') {
            selectedSingle.set(name);
        } else {
            selectedSchematic.set(name);
        }
    };

    const handleSelectPhotographic = (name: string) => {
        if ($mode === 'single') {
            selectedSingle.set(name);
        } else {
            selectedPhotographic.set(name);
        }
    };

    const schematicDocuments: AssemblyData[] = [
        { name: "SCH_HC", title: "HC-Style WI, 8, 9, R, F, Q", pdf: "/pdf/HC-style-WI89RFQ.pdf" },
        { name: "SCH_RC", title: "RC-All Styles", pdf: "/pdf/RC-All-Styles.pdf" },
        { name: "SCH_RF", title: "RF-All Styles", pdf: "/pdf/RF-All-Styles.pdf" },
        { name: "SCH_SF", title: "SF-All Styles", pdf: "/pdf/SF-All-Styles.pdf" },
        { name: "SCH_SH", title: "SH-Style 80,90", pdf: "/pdf/SH-Style-80-90.pdf" },
        { name: "SCH_SL", title: "SL-Style 80,90", pdf: "/pdf/SL-Style-80-90.pdf" },
        { name: "SCH_SM", title: "SM-All Styles", pdf: "/pdf/SM-All-Styles.pdf" },
        { name: "SCH_ST", title: "ST-All Styles", pdf: "/pdf/ST-All-Styles.pdf" },
        { name: "SCH_TU", title: "TU-Style 8,R,9,F,N,T", pdf: "/pdf/TU-Style-8R9FNT.pdf" },
        { name: "SCH_UC", title: "UC-Style 8,4,9,F,T,N,Q", pdf: "/pdf/UC-Style-849FTNQ.pdf" }
    ];

    const photographicDocuments: AssemblyData[] = [
        { name: "PH_HC", title: "HC-Style 8, 9, R, F, Q", pdf: "/pdf/HC-style-89RFQ-UC-style-89RFQ-TU-style-8U9U.pdf" },
        { name: "PH_RC1", title: "RC Style 1, 3, 7, G, J, L, P, U", pdf: "/pdf/RC-style-137GJLPU-SSR-17.pdf" },
        { name: "PH_RC2", title: "RC-Style 8, 9, B, F, K, M, Q, R", pdf: "/pdf/RC-style-89BFKMQR-SSR-89FR.pdf" },
        { name: "PH_RC3", title: "RC-Style T, N", pdf: "/pdf/RC-style-TN.pdf" },
        { name: "PH_RC4", title: "RC-Style Z", pdf: "/pdf/RC-style-Z.pdf" },
        { name: "PH_SF", title: "SF Style 8, 9", pdf: "/pdf/SF-style-89.pdf" },
        { name: "PH_SSR1", title: "SSR-Style 1, 7", pdf: "/pdf/RC-style-137GJLPU-SSR-17.pdf" },
        { name: "PH_SSR2", title: "SSR-Style 8, 9, F, R", pdf: "/pdf/RC-style-89BFKMQR-SSR-89FR.pdf" },
        { name: "PH_TU", title: "TU-Style 8U, 9U", pdf: "/pdf/HC-style-89RFQ-UC-style-89RFQ-TU-style-8U9U.pdf" },
        { name: "PH_UC", title: "UC-Style 8, 9, R, F, Q", pdf: "/pdf/HC-style-89RFQ-UC-style-89RFQ-TU-style-8U9U.pdf" },
        { name: "PH_P", title: "Piercecon Style M8", pdf: "/pdf/Piercecon-style-for-m8-connector.pdf" }
    ];
</script>

<div class="max-w-7xl m-auto mt-10 w-[95%] lg:w-full">
    <div class="text-m-primary font-bold text-2xl tracking-widest">
        Assembly Instructions
    </div>

    <div class="font-light text-lg">
        Click your connector type above and instructions will display here.
    </div>

    <div class="lg:flex gap-10 mt-10">
        <div class="border-2 lg:w-1/2 p-4 rounded w-full">
            <div class="text-lg text-m-primary">Schematic Assembly Documents</div>
            <div class="m-2">
                {#each schematicDocuments as document}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div
                        class="{generalStyling} { $mode === 'single' ? ($selectedSingle === document.name ? 'selected' : '') : ($selectedSchematic === document.name ? 'selected' : '')}"
                        on:click={() => handleSelectSchematic(document.name)}
                    >
                        {document.title}
                    </div>
                {/each}
            </div>
        </div>
        
        <div class="border-2 lg:w-1/2 p-4 rounded w-full mt-10 md:mt-0">
            <div class="text-lg text-m-primary">Photographic Assembly Documents (step-by-step)</div>
            <div class="m-2">
                {#each photographicDocuments as document}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div
                        class="{generalStyling} { $mode === 'single' ? ($selectedSingle === document.name ? 'selected' : '') : ($selectedPhotographic === document.name ? 'selected' : '')}"
                        on:click={() => handleSelectPhotographic(document.name)}
                    >
                        {document.title}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<div class="max-w-7xl m-auto mt-10 w-[95%] lg:w-full">
    <ButtonGroup>
        <Button on:click={() => { 
            mode.set('single'); 
            selectedSingle.set($selectedSchematic || schematicDocuments[0].name); 
            selectedSchematic.set(''); 
            selectedPhotographic.set(''); 
        }} color="alternative" class={$mode === 'single' ? 'text-blue-400 font-bold border-b-2 border-yellow-200' : 'text-gray-400'}>
            Single Mode
        </Button>

        <Button on:click={() => { 
            mode.set('dual'); 
            selectedSchematic.set($selectedSingle || schematicDocuments[0].name); 
            selectedPhotographic.set($selectedPhotographic || photographicDocuments[0].name); 
        }} color="alternative" class={$mode === 'dual' ? 'text-blue-400 font-bold border-b-2 border-yellow-200' : 'text-gray-400'}>
            Dual Mode
        </Button>
    </ButtonGroup>
</div>

<div class="mt-10 ">
    {#if $mode === 'single'}
        <div class="flex mt-10 gap-10 max-w-7xl lg:w-full w-[95%] m-auto">
            {#if $mode === 'single'}
                <iframe title="Document" src={$selectedSingle ? (schematicDocuments.find(doc => doc.name === $selectedSingle)?.pdf || photographicDocuments.find(doc => doc.name === $selectedSingle)?.pdf) : schematicDocuments[0].pdf} width="100%" height="1100px" style="border:none;"></iframe>
            {/if}
        </div>
    {/if}

    {#if $mode === 'dual'}
        <div class="lg:flex gap-10 w-[95%] m-auto">

            <iframe title="Schematic Document" src={$selectedSchematic ? schematicDocuments.find(doc => doc.name === $selectedSchematic)?.pdf : schematicDocuments[0].pdf} width="100%" height="1100px" style="border:none;"></iframe>
            <iframe class="mt-10 md:mt-0" title="Photographic Document" src={$selectedPhotographic ? photographicDocuments.find(doc => doc.name === $selectedPhotographic)?.pdf : photographicDocuments[0].pdf} width="100%" height="1100px" style="border:none;"></iframe>
        </div>
    {/if}
</div>

<style>
    .selected {
        transform: scale(1.05);
        color: #ffa600;
    }
</style>
