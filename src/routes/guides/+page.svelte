<script>
  import PDFViewer from "$lib/pre-constructs/PDFViewer.svelte"
    import { onMount } from "svelte";
    let PdfViewer;
    let url = "/pdf/crimp-tools.pdf";

    onMount(async () => {
    const module = await import("svelte-pdf");
    PdfViewer = module.default;
  });
</script>

<svelte:component this={PdfViewer} url={url} showButtons={["navigation", "zoom", "print", "download", "pageInfo"]}/>


<PDFViewer/>