<script>
    import * as PDFJS from "pdfjs-dist";
    import pdfjsWorker from "pdfjs-dist/webpack";

    // As of PDF.js version 2.x, you should configure the workerSrc
    PDFJS.GlobalWorkerOptions.workerSrc = pdfjsWorker;

    let canvas;

    // This function could be triggered by a reactive statement or by an explicit event
    async function loadPDF(url) {
        const loadingTask = PDFJS.getDocument(url);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);
        const scale = 1.5;  // Adjust scale to your preference
        const viewport = page.getViewport({ scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const renderContext = {
            canvasContext: canvas.getContext("2d"),
            viewport
        };
        await page.render(renderContext);
    }

    // Example URL or you can pass this as a prop
    const url = "path_to_your_pdf_file.pdf";

    // Load the PDF when the component mounts
    import { onMount } from "svelte";
    onMount(() => {
        loadPDF(url);
    });
</script>

<canvas bind:this={canvas}></canvas>