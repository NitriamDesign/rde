<script>
    import ProductCategories from "$lib/homepage/products/ProductCategories.svelte";
    import TopHero from "$lib/homepage/TopHero.svelte";
    import ProductCardHorizontal from "$lib/homepage/products/ProductCardHorizontal.svelte";
    import CallToActionRibbon from "$lib/pre-constructs/CallToActionRibbon.svelte";
	import HeroBanner from "$lib/pre-constructs/hero-banner/HeroBanner.svelte";
    import TextContent from "$lib/homepage/TextContent.svelte";


</script>


<TopHero/>


<ProductCategories/>
<CallToActionRibbon bgImageUrl = '/standin/dum.png'/>
<ProductCardHorizontal/>
<HeroBanner/>