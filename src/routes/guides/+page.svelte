<script>
// @ts-nocheck

    import { onMount } from "svelte";
    /**
	 * @type {typeof import("svelte-pdf").default}
	 */
    let PdfViewer;
    let url = "/pdf/crimp-tools.pdf";

    onMount(async () => {
    const module = await import("svelte-pdf");
    PdfViewer = module.default;
  });

</script>

<svelte:component this={PdfViewer} url={url} showButtons={["navigation", "zoom", "print", "download", "pageInfo"]}/>
