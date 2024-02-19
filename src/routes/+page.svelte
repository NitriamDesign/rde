<script>
    import { Gallery } from 'flowbite-svelte';
    const images = [
      { alt: 'erbology', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg' },
      { alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
      { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
      { alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
      { alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
      { alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' },
      { alt: 'cream', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg' },
      { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg' },
      { alt: 'lamp', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg' },
      { alt: 'toiletbag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg' },
      { alt: 'playstation', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg' },
      { alt: 'bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg' }
    ];
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Annapurna+SIL:wght@400;700&family=Kode+Mono:wght@400..700&family=Noto+Sans+Buhid&display=swap" rel="stylesheet">

<style>
.noto-sans {
  font-family: "Noto Sans Buhid", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>


<div class="max-w-3xl m-auto text-7xl text-center p-10 noto-sans  text-gray-900">
   ᝃᝑᝓᝃᝑᝓᝃᝓᝋᝎᝄ ᝃᝊᝓᝌᝓᝊᝓᝌᝐᝒᝂᝎᝓ
</div>

<div class="max-w-7xl m-auto">
    <Gallery items={images} class="gap-4 grid-cols-2 md:grid-cols-3 mb-20" />
</div>