<script>
    import CarouselContent from './CarouselContent.svelte';
    import { Button } from "flowbite-svelte";
    import { AngleRightOutline, AngleLeftOutline } from "flowbite-svelte-icons";
    import { fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';

    let currentIndex = 0;

    export let content = [
        {
            title: "Innovative Engineering Solutions",
            desc: "Explore cutting-edge engineering technologies that push the boundaries of what's possible. Join us in shaping the future, one innovation at a time.",
            href: "/innovative-solutions",
            img: "/people/rep_1.webp",
            offset:"-10rem"
        },
        {
            title: "Sustainable Environmental Design",
            desc: "Discover how our sustainable design practices contribute to preservation while meeting the needs of our communities.",
            href: "/sustainable-design",
            img: "/people/rep_2.webp",
            offset:"-10rem"
        },
        {
            title: "Advanced Robotics in Industry",
            desc: "Dive into the world of advanced robotics and learn how automation is revolutionizing industries, enhancing efficiency, and transforming the workforce.",
            href: "/advanced-robotics",
            img: "/people/rep_3.webp",
            offset:"-10rem"
        }
    ];


    function handleNext() {
        currentIndex = (currentIndex + 1) % content.length;
    }

    function handlePrev() {
        currentIndex = (currentIndex - 1 + content.length) % content.length;
    }

</script>

<div class="bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300 h-[450px] max-w-7xl m-auto rounded flex justify-between w-full shadow-xl">
    <Button color="alternative" class="w-12 h-12 rounded-full m-auto ml-10" on:click={handlePrev}>
        <AngleLeftOutline strokeWidth=3/>
    </Button>

    <div class="relative flex-grow flex justify-center items-center">
        {#key currentIndex}
            <div class="absolute " transition:fade={{ duration: 250 }}>
                <CarouselContent info={content[currentIndex]} />
            </div>
        {/key}
    </div>


    <Button color="alternative" class="w-12 h-12 rounded-full m-auto mr-10" on:click={handleNext}>
        <AngleRightOutline strokeWidth=3/>
    </Button>
</div>
