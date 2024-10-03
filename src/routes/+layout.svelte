<script>
    import "../app.css";
    import NavBar from "$lib/navigation/NavBar.svelte";
	import Footer from "$lib/navigation/Footer.svelte";
    import BackToHomeButton from '$lib/pre-constructs/BackToHomeButton.svelte';
    
</script>


  
<NavBar/>

<slot />
<BackToHomeButton />
<Footer/>