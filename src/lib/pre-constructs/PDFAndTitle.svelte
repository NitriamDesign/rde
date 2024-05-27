<script>
	import { Heading } from "flowbite-svelte";
    export let title = 'Default';
    export let pdf = '/pdf/accessories-all.pdf';

    
</script>

<div class="max-w-7xl mx-auto mt-10 p-4 md:p-0">

	<Heading class="mb-5 mt-20" color="text-primary-500" tag="h1">{title}</Heading>

	<div class="ml-0 md:ml-10 mt-20 md:mt-20">
		<iframe title="{title}" src="{pdf}" width="100%" height="1100px" style="border:none;"></iframe>
	</div>

</div>