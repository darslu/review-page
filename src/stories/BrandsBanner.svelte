<script>
	import { Section, HeroHeader } from 'flowbite-svelte-blocks';
</script>

<Section name="logos" classDiv="py-4 lg:py-8 mx-auto max-w-screen-xl px-4">
	<HeroHeader>
		<svelte:fragment slot="h2">There is most known brands</svelte:fragment>
		<div
			class="grid grid-cols-2 gap-8 text-gray-500 dark:text-gray-400 sm:gap-12 md:grid-cols-3 lg:grid-cols-6"
		>
			<div class="flex items-center justify-center">
                <img src="images/icebreaker.png" alt="icebreaker" />
            </div>
			<div class="flex items-center justify-center">
                <img src="images/smartwool.png" alt="smartwool" />
            </div>
			<div class="flex items-center justify-center">
                <img src="images/pantagonia.png" alt="pantagonia" />
            </div>
			<div class="flex items-center justify-center">
                <img src="images/minus33.png" alt="minus33" />
            </div>
            <div class="flex items-center justify-center">
                <img src="images/menique-logo.png" alt="menique-logo" />
            </div>
            <div class="flex items-center justify-center">
                <img src="images/darntough.png" alt="darntough" />
            </div>
		</div></HeroHeader
	>
</Section>
