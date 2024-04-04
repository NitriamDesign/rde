<script>
    import "../app.css";
    import NavBar from "$lib/navigation/NavBar.svelte";
	import Footer from "$lib/navigation/Footer.svelte";
</script>
  
<NavBar/>

<slot />

<Footer/>