<script lang="ts">
	import {
		Section,
		PricingBodyHead,
		PricingCard,
		PricingItemWrapper,
		PricingHead,
		PricingItem
	} from 'flowbite-svelte-blocks';
	import { AccordionItem, Accordion, Button } from 'flowbite-svelte';
	const items = Array(3);
</script>

<Section name="pricing">
	<PricingHead h2Class="flex justify-center items-center mb-6">
		<svelte:fragment slot="h2"
			><div class="flex flex-col md:flex-row">
				<span class="flex items-end text-4xl">Best reviews in</span>
				<img src="images/Trustpilot_Logo__2022__svg.webp" class="ml-3 h-12" alt="Trustpilot" />
			</div></svelte:fragment
		>
		<svelte:fragment slot="paragraph"
			>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
			long-term value and drive economic growth.</svelte:fragment
		>
	</PricingHead>
	<div class="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
		<PricingCard>
			<PricingBodyHead>
				<svelte:fragment slot="h3">Menique</svelte:fragment>
				<svelte:fragment slot="paragraph"
					>Relevant for multiple users, extended & premium support.</svelte:fragment
				>
				<svelte:fragment slot="price">
					<span class="mr-2 text-5xl font-extrabold">4.7</span>
					<span class="text-gray-500 dark:text-gray-400">(1551 reviews)</span>
				</svelte:fragment>
			</PricingBodyHead>
			<PricingItemWrapper>
				<PricingItem class="text-green-500 dark:text-green-400">
					<span>Super soft 100% merino</span>
				</PricingItem>
				<PricingItem class="text-green-500 dark:text-green-400">
					<span>Premium quality</span>
				</PricingItem>
				<PricingItem class="text-green-500 dark:text-green-400">
					<span>Minimalist style</span>
				</PricingItem>
				<PricingItem class="text-red-500 dark:text-red-400">
					<span>Limited sizing options</span>
				</PricingItem>
				<PricingItem class="text-red-500 dark:text-red-400">
					<span>Not always in stock</span>
				</PricingItem>

				<svelte:fragment slot="btn">
					<Button color="red" href="https://menique.com">Get started</Button>
				</svelte:fragment>
			</PricingItemWrapper>
		</PricingCard>
		<PricingCard>
			<PricingBodyHead>
				<svelte:fragment slot="h3">Allbirds</svelte:fragment>
				<svelte:fragment slot="paragraph"
					>Best option for personal use & for your next project.</svelte:fragment
				>
				<svelte:fragment slot="price">
					<span class="mr-2 text-5xl font-extrabold">4.3</span>
					<span class="text-gray-500 dark:text-gray-400">(2026 reviews)</span>
				</svelte:fragment>
			</PricingBodyHead>
			<PricingItemWrapper>
				<PricingItem class="text-green-500 dark:text-green-400">
					<span>Individual configuration</span>
				</PricingItem>
				<PricingItem class="text-green-500 dark:text-green-400">
					<span>No setup, or hidden fees</span>
				</PricingItem>
				<PricingItem class="text-green-500 dark:text-green-400">
					<span>Team size: <span class="font-semibold">1 developer</span></span>
				</PricingItem>
				<PricingItem class="text-red-500 dark:text-red-400">
					<span>Premium support: <span class="font-semibold">6 months</span></span>
				</PricingItem>
				<PricingItem class="text-red-500 dark:text-red-400">
					<span>Free updates: <span class="font-semibold">6 months</span></span>
				</PricingItem>

				<svelte:fragment slot="btn">
					<Button color="red">Get started</Button>
				</svelte:fragment>
			</PricingItemWrapper>
		</PricingCard>

		<PricingCard>
			<PricingBodyHead>
				<svelte:fragment slot="h3">Icebreaker</svelte:fragment>
				<svelte:fragment slot="paragraph"
					>Best for large scale uses and extended redistribution rights.</svelte:fragment
				>
				<svelte:fragment slot="price">
					<span class="mr-2 text-5xl font-extrabold">4.0</span>
					<span class="text-gray-500 dark:text-gray-400">(1526 reviews)</span>
				</svelte:fragment>
			</PricingBodyHead>
			<PricingItemWrapper>
				<PricingItem class="text-green-500 dark:text-green-400">
					<span>Individual configuration</span>
				</PricingItem>
				<PricingItem class="text-green-500 dark:text-green-400">
					<span>No setup, or hidden fees</span>
				</PricingItem>
				<PricingItem class="text-green-500 dark:text-green-400">
					<span>Team size: <span class="font-semibold">100+ developer</span></span>
				</PricingItem>
				<PricingItem class="text-red-500 dark:text-red-400">
					<span>Premium support: <span class="font-semibold">36 months</span></span>
				</PricingItem>
				<PricingItem class="text-red-500 dark:text-red-400">
					<span>Free updates: <span class="font-semibold">36 months</span></span>
				</PricingItem>

				<svelte:fragment slot="btn">
					<Button color="red">Get started</Button>
				</svelte:fragment>
			</PricingItemWrapper>
		</PricingCard>
	</div>
</Section>

<div class="container mx-auto px-3 px-md-60 mb-10">
	<h3 class="mb-5 text-center text-3xl">Another brands...</h3>
	<Accordion multiple>
		<AccordionItem bind:open={items[0]}>
			<span slot="header">Smartwool
                <PricingItem class="text-green-500 dark:text-green-400">
					<span>4.4 (1600reviews)</span>
				</PricingItem>
            </span>
			<p class="mb-2 text-gray-500 dark:text-gray-400">
				U.S. brand known for comfortable and durable merino products, especially socks.
			</p>
		</AccordionItem>
		<AccordionItem bind:open={items[1]}>
			<div slot="header">
				Patagonia 
                <PricingItem class="text-green-500 dark:text-green-400">
					<span>4.3 (600reviews)</span>
				</PricingItem>
			</div>
			<p class="mb-2 text-gray-500 dark:text-gray-400">
				Renowned for outdoor gear, with merino blends for durability and sustainability.
			</p>
		</AccordionItem>
		<AccordionItem bind:open={items[2]}>
			<div slot="header">Minus33
                <PricingItem class="text-green-500 dark:text-green-400">
					<span>4.1 (400reviews)</span>
				</PricingItem>
            </div>
			<p>Affordable and versatile merino clothing focused on quality and everyday wear.</p>
		</AccordionItem>
		<AccordionItem bind:open={items[2]}>
			<div slot="header">Darn Tough
                <PricingItem class="text-yellow-500 dark:text-yellow-400">
					<span>4.2 (300reviews)</span>
				</PricingItem>
            </div>
			<p>Vermont-based, known for durable merino wool socks with a lifetime warranty.</p>
		</AccordionItem>
	</Accordion>
</div>
