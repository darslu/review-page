<script>
	import { Section, HeroHeader } from 'flowbite-svelte-blocks';
</script>

<Section name="heroVisual"  classDiv="py-4 lg:py-8 mx-auto max-w-screen-xl px-4" sectionClass="py-2">

	<div class="mr-auto col-span-12 w-full">
		<HeroHeader
			h1Class="mb-4  font-extrabold tracking-tight  md:text-5xl dark:text-white text-center mb-10"
			pClass=" max-w-2xl mb-6 font-light text-gray-500 lg:mb-0 md:text-lg lg:text-xl dark:text-gray-400 text-center mx-auto lg:mb-10"
		>
			<svelte:fragment slot="h1">Top 10 Merino Brands</svelte:fragment>
			<svelte:fragment slot="paragraph"
				>Exploring the top merino brands for unmatched comfort, durability, and eco-friendly style
				in every season</svelte:fragment
			>
		</HeroHeader>
	</div>
  <div class="col-span-12 lg:mt-0 lg:flex">
		<img src="images/merino-sheep.jpg" alt="merino sheeps" />
	</div>
</Section>

