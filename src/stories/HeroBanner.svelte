<script>
	import { Section, HeroHeader } from 'flowbite-svelte-blocks';
</script>

<Section name="heroVisual"  classDiv="py-4 lg:py-8 mx-auto max-w-screen-xl px-0 md:px-4 lg:gap-0" sectionClass="py-2">

	<div class="mr-auto col-span-12 w-full">
		<HeroHeader
			h1Class="mb-4 font-extrabold tracking-tight text-2xl md:text-5xl dark:text-white text-center mb-5 md:mb-10 font-black"
			pClass="  mb-6 font-light lg:mb-0 md:text-lg lg:text-xl dark:text-gray-400 text-center mx-auto lg:mb-10 "
		>
			<svelte:fragment slot="h1">The Best Men’s Boxer Briefs Money Can Buy in 2025</svelte:fragment>
			<svelte:fragment slot="paragraph"
				>Based on my testing, menique's boxer briefs are exceptional for their superior comfort and high-quality design.</svelte:fragment
			>
		</HeroHeader>
	</div>
  <div class="col-span-12 lg:mt-0 lg:flex mx-auto">
		<img src="images/best-boxers-2025.jpg" alt="merino sheeps" />
	</div>
</Section>

