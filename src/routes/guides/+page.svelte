<script>
    import { onMount } from "svelte";
    let PdfViewer;
    let url = "/pdf/crimp-tools.pdf";

    onMount(async () => {
      try {
        const module = await import("svelte-pdf");
        PdfViewer = module.default;
      } catch (error) {
        console.error("Failed to load the PDF viewer module:", error);
      }
    });
</script>

<svelte:component this={PdfViewer} url={url} />
