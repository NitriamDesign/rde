<script lang="ts">
    import { Section, News, HeroHeader, HeroBody } from 'flowbite-svelte-blocks';
    import { Button } from 'flowbite-svelte';
    import { ArrowDownOutline } from 'flowbite-svelte-icons';

	function handleAnchorClick (event:any, anchorId: string) {
		event.preventDefault();
		const anchor = document.getElementById(anchorId);

        if(anchor) {
            window.scrollTo({
                top: anchor.offsetTop - 60,
                behavior: 'smooth'
            })
        }
	}
</script>

<div class="bg-[#C4C4C4] h-[600px] flex justify-center">
    <div class="max-w-5xl h-60 text-center flex flex-col gap-10 my-auto">
        <div class="text-7xl font-bold">
            Title / CTA
        </div>

        <div class="text-3xl  text-[#6B7280]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
        </div>

        <Button color="none" class="bg-m-primary max-w-sm m-auto uppercase text-m-light hover:bg-primary-600 rounded text-md font-thin" on:click={event => handleAnchorClick(event, "main-products")}>
            View Products <ArrowDownOutline size="lg" class="ml-2"/>
        </Button>
    </div>
</div>
