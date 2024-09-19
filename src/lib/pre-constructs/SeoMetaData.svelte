<script>
    export let title = "Default Page Title";
    export let description = "Default page description.";
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />

    <!-- OpenGraph meta tags -->
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{window.location.href}" />
</svelte:head>
