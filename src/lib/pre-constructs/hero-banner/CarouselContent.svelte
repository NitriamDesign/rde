<script lang="ts">
	import { Button } from "flowbite-svelte";
	import { ArrowRightOutline, InfoCircleOutline } from "flowbite-svelte-icons";

    export let info = {
        title: "We are Certified! This is a title about Certification",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
        href: "/",
        img: "/people/rep_1.png"
    }

</script>

<div class="flex gap-10 justify-center items-center">
    <div class="bg-white rounded h-64 w-96 p-8 flex flex-col gap-2 justify-between mr-[-10rem]">
        <div class="text-xl font-semibold">
            {info.title}
        </div>

        <div class="">
            {info.desc}
        </div>

        <Button color="none" class="bg-m-primary w-fit uppercase text-m-light hover:bg-primary-600 rounded text-md font-thin" href={info.href}>
            Learn More<ArrowRightOutline size="lg" class="ml-2"/>
        </Button>
    </div>

    <img src={info.img} alt="George" class="h-[450px] object-cover">
</div>