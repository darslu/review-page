<script>
	import { Button } from 'flowbite-svelte';

	// Example data for multiple products
	let products = [
		{
			title: "Menique Men's 100% Merino Boxer Briefs",
			productUrl: [
				'https://menique.com/products/mens-merino-160gsm-short-boxer-briefs',
				'https://www.amazon.co.uk/menique-Merino-Short-Briefs-Regular/dp/B0CPYCB6CR/'
			],
			linkTitle: ['£27.00 Official Dealer', '£21.95 Amazon'],
			overallScore: 9.8,
			ratings: {
				Material: 10,
				Support: 10,
				Breathability: 10,
				Durability: 9,
				'Odor Control': 10
			},
			reasonsToBuy: [
				'Incredibly soft natural 100% Merino Wool',
				'Flatlock seam construction designed to minimize chafing',
				'Very stretchy to accommodate a variety of body shapes',
				'Even after long days, these keep smelling fresh',
				'Sturdy, comfortable waistband'
			],
			reasonsToAvoid: ['Price point could be a barrier'],
			review: `I’ve been wearing the <b>Menique 100% Merino Boxer Briefs</b> for a few weeks now, and I have to say—they’re legit. The fit is snug without being restrictive, and the Merino wool feels soft and breathable all day. One thing I love is how they stay put. No annoying bunching or constant adjusting, which is a game-changer when I’m working out, running errands, or just chilling at home. Plus, the waistband is super comfy and doesn’t dig in, which is rare for me with most brands. 
        <br><br>The performance is what really sold me. These wick sweat like pros and keep me cool when I’m active but warm on colder days. The Merino wool also resists odors naturally, so I’ve been able to wear them a couple of times before washing (don’t judge—it’s impressive). For travel or busy weeks, that’s a huge win. They might not have fancy support panels like some brands, but the simplicity works. They’re breathable, flexible, and super versatile for pretty much anything.
        <br><br> Now, let’s talk price. At $39.95 a pair, they’re not exactly cheap, especially if you’re used to grabbing underwear for under $20. But considering the quality, durability, and the fact that Menique offers bulk pricing and sales on their site, I think they’re worth it if you’re looking to invest in better basics. I don’t regret picking them up—they’re easily some of the best boxer briefs I’ve tried in a long time.
      `,
			productImg: 'images/menique-boxers.png'
		},
		{
			title: 'Smartwool Merino Boxer Briefs',
			productUrl: [
				'https://www.smartwool.co.uk/uk/men-s-merino-boxer-brief-sw016998n061.html',
				'https://www.amazon.co.uk/Smartwool-Merino-Sport-Boxer-Briefs/dp/B0BKWW171Z'
			],
			linkTitle: ['£45.00 Official Dealer', '£34.95 Amazon'],
			overallScore: 8.6,
			ratings: {
				Material: 9,
				Support: 9,
				Breathability: 8,
				Durability: 8,
				'Odor Control': 9
			},
			reasonsToBuy: ['Can be worn for multiple days without smells', 'Great for daily wear'],
			reasonsToAvoid: [
				'Do not keep you cool in very humid situations',
				'Wear out faster over time'
			],
			review: `I’ve been wearing the Smartwool Merino Boxer Briefs for a few weeks, and while they’re a reliable option, they’re not without flaws. The Merino Wool and nylon blend feels soft and stretchy, making them comfortable for all-day wear. For example, I wore them during a long flight, and they kept me comfortable without any chafing, which was a big plus. The odor resistance is also impressive—after a hike, they still smelled fresh, which is something I love about Merino Wool.
        <br><br>That said, there are a couple of downsides. On a particularly humid day, I noticed they felt a bit stuffy, which surprised me since I usually expect Merino to breathe better. I’ve also found that after a few washes, they’re not holding up as well as I’d hoped—some fraying at the seams has started to show. Compared to Menique’s 100% Merino Wool briefs, which feel more breathable and durable, Smartwool falls short. Still, for the price and day-to-day use, they’re a decent choice if you can live with a few compromises.
      `,
			productImg: 'images/smartwool-boxers.png'
		},
		{
			title: 'Icebreaker Anatomica Merino Boxers',
			productUrl: [
				'https://www.icebreaker.com/en-gb/mens-underwear/merino-150-anatomica-boxers/103029G2.html',
				'https://www.amazon.co.uk/Icebreaker-Mens-Boxer-Briefs/dp/B0D2JLZ7TK'
			],
			linkTitle: ['£40.00 Official Dealer', '£34.10 Amazon'],
			overallScore: 8.2,
			ratings: {
				Material: 8,
				Support: 7,
				Breathability: 9,
				Durability: 8,
				'Odor Control': 9
			},
			reasonsToBuy: [],
			reasonsToAvoid: [
				'Could be better for intense activities',
				'Inseam is a bit short for some',
				'The cost feels a bit steep'
			],
			review: `I’ve been trying out the Icebreaker Anatomica Merino Boxers, and while they have some great features, they’re definitely not perfect. The breathability is a big win—on hot days or during light activity, they feel airy and comfortable. Plus, the odor control is top-notch, even after long wear. That said, they run small. I’m usually a medium, but these felt tight enough that I’d suggest sizing up if you want a more comfortable fit. The price is another sticking point; they’re on the higher end, and for what you’re getting, I feel like there are better options out there, like Menique, which has more durable and supportive designs for a similar (or even better) price.
         <br><br>Where they struggle most is in durability and support. The lightweight fabric feels great initially, but after a few washes, I noticed it started losing its elasticity. For the price, I expected these to hold up better. Also, if you’re looking for something that stays put during more intense activities, these might not be the best option. They’re fine for casual wear, but for high-movement days, I found myself adjusting them more often than I’d like. Overall, they’re okay, but with the sizing issues and steep price tag, I think you can find better value elsewhere.
        `,
			productImg: 'images/icebreaker-boxers.png'
		},
		{
			title: 'Patagonia Sender Boxer Briefs 6"',
			productUrl: [
				'https://www.patagonia.com/product/mens-sender-boxer-briefs-6-inch/32545.html',
				'https://www.amazon.co.uk/Patagonia-Sender-Briefs-6-Briefs-32545/dp/B07N28MN24'
			],
			linkTitle: ['$35 Official Dealer', '£34.50 Amazon'],
			overallScore: 7.6,
			ratings: {
				Material: 8,
				Support: 8,
				Breathability: 7,
				Durability: 8,
				'Odor Control': 7
			},
			reasonsToBuy: [
				'Recycled nylon and spandex are tough and resistant to wear',
				'Has a decent amount of support'
			],
			reasonsToAvoid: [
				'Poor breathability on hot days',
				'Support could be better',
				'Odor control isn’t great compared to Merino options'
			],
			review: `The Patagonia Sender Boxer Briefs are a pretty solid choice. They’re made with a blend of recycled nylon and spandex, which feels comfortable and is a nice nod to eco-conscious shopping. It holds up well after multiple washes and daily wear, showing off decent durability. I’ve worn these on lazy weekends and casual days, and they’ve held their shape and looked fresh enough to pass the “everyday wear” test. That said, this blend isn’t 100% natural, and that’s a noticeable trade-off when compared to natural options like Menique or Smartwool.
      <br><br>Where they fall short is breathability—on hot days, you’ll feel like they trap heat more than you’d want. A recent hike I did in the summer left me sweating more than expected, and they just didn’t offer the airy, cooling feel I’m used to with Merino wool options. Similarly, support was okay but not great; for lounging or casual office days, they’re fine, but trying to wear them during a heavier workout made me feel like I wasn’t getting the stability I needed. Odor control is also a weak spot here—where Merino’s natural properties combat odor seamlessly, these synthetic blends struggled to keep up. After a full day of wear, I could smell it creeping in, especially if I’d been on my feet all day or spent time in a warm environment. On the flip side, they’re great for guys who want something durable and versatile for everyday use at a reasonable price. 
      `,
			productImg: 'images/patagonia-boxers.png'
		},
		{
			title: 'Lululemon Rapid Vent Tech Boxer 5"',
			productUrl: [
				'https://www.lululemon.co.uk/en-gb/p/always-in-motion-boxer-5%22/prod9270823.html',
				'https://www.reversible.com/gb/shopping/men/item/lululemon-rapid-vent-tech-boxer-5-891128797'
			],
			linkTitle: ['£25 Official Dealer', '£20 Reversible.com'],
			overallScore: 7.2,
			ratings: {
				Material: 7,
				Support: 8,
				Breathability: 7,
				Durability: 8,
				'Odor Control': 6
			},
			reasonsToBuy: ['Material is soft, stretchy, and easy on the skin, perfect for all-day wear'],
			reasonsToAvoid: [
				'Loose fit that shifts during higher-intensity movement',
				'Breathability and odor control aren’t great',
				'Higher price than expected for the performance level'
			],
			review: `I’ve worn the Lululemon Rapid Vent Tech Boxer 5" a few times for both casual days and light gym sessions, and here’s the honest rundown from real experience. These are comfortable for regular daily wear—walking around town, running errands, or just lounging. The material feels soft against your skin, and the stretch gives you enough freedom to move without any discomfort. They fit well enough for everyday use and stay put during light movement, which is great for casual running around. However, they have a loose fit, which might not work for everyone—especially if you’re looking for something more snug or form-fitting during active workouts. I found they shift a bit too much during higher-intensity movement, which can get annoying if you’re sweating or trying to stay in motion for extended periods.
      <br><br>That said, when I wore them during a few intense summer workouts, the breathability fell flat. After about 20 minutes of heavy movement and sweating, I could feel them sticking and getting hot—something that wouldn’t happen with Merino alternatives like Menique. Also, after a few hours, I started noticing some odor creeping in, which makes sense because their odor control isn’t the best. For instance, after a quick jog and a few hours at work, I had to throw them in the wash sooner than I’d like. These boxers are stylish and functional enough for light workouts or casual wear but aren’t great for extended heat, sweating, or long days without a change. 
      `,
			productImg: 'images/lululemon-boxers.png'
		}
	];

	// Initialize the toggle state: first product opened, rest collapsed
	let showMoreState = products.map((_, i) => i === 0);

	function toggleShowMore(index) {
		showMoreState[index] = !showMoreState[index];
	}

	// Function to calculate the average score
	function calculateAverageScore(ratings) {
		return (
			Object.values(ratings).reduce((sum, value) => sum + value, 0) / Object.values(ratings).length
		);
	}

	function getScoreClass(score) {
		if (score > 8) return 'text-[#5DCE8B]';
		if (score > 7) return 'text-yellow-400';
		if (score > 6) return 'text-yellow-600';
		if (score > 4) return 'text-red-500';
		return 'text-red-700';
	}
</script>

<div class="mx-5 my-28 space-y-8">
	<h2
		class="s-hmLmOhxWmjw9 mb-4 mb-5 text-center text-2xl font-bold dark:text-white md:mb-16 md:text-3xl"
	>
		A Closer Look at Bestsellers
	</h2>
	{#each products as product, i}
		<section
			class={`w-full rounded-md bg-gray-50 p-6 shadow-md xl:mx-auto xl:w-[1110px] ${
				product.title === "Menique Men's 100% Merino Boxer Briefs"
					? 'border-4 border-[#5DCE8B]'
					: ''
			}`}
		>
			<!-- Header -->
			<div class="mb-10 mt-4 flex items-center justify-center">
				<h3 class="text-center text-2xl font-bold">{product.title}</h3>
			</div>

			<!-- Content -->
			<div
				class="mt-6 grid grid-cols-1 items-start gap-4 md:grid-cols-[calc(40%-10px),calc(40%-10px),calc(20%-10px)]"
			>
				<!-- Placeholder Image -->
				<img
					src={product.productImg}
					alt={product.title}
					class=" w-full rounded-md object-cover xl:px-20"
				/>

				<!-- Rating Section -->
				<div class="pr-0 xl:pr-10">
					<div class="flex justify-between">
						<div>
							<div class={`text-5xl font-bold`}>
								{calculateAverageScore(product.ratings).toFixed(1)}
							</div>
							<div class="text-sm text-gray-500">Overall Score</div>
						</div>
						{#if product.overallScore > 9}
							<div class="flex">
								<span class="text-black"
									><img src="images/recommend.svg" alt="Winner badge" class="mx-auto h-8" /></span
								>
							</div>
						{/if}
					</div>
					<div class="mt-4">
						{#each Object.entries(product.ratings) as [key, value]}
							<div class="mb-2 mt-3 flex items-center justify-between">
								<span class="text-sm">{key}</span>
								<span class="text-sm font-bold">{value}</span>
							</div>
							<div class="h-2 w-full rounded-full bg-gray-200">
								<div
									class="h-2 rounded-full
                    {value > 8
										? 'bg-[#5DCE8B]'
										: value > 6
											? 'bg-[#FAB907]'
											: value > 2
												? 'bg-[#EA3D3D]'
												: 'bg-[#EA3D3D]'}"
									style="width: calc({value * 10}%);"
								></div>
							</div>
						{/each}
					</div>
				</div>
				{#if product.productUrl}
					<div class="mt-6 flex flex-col justify-center xl:mt-0">
						{#each product.productUrl as url, i}
							<Button href={url} class="mb-3 rounded-md bg-[#5DCE8B] hover:bg-[#79e5a5]"
								>{product.linkTitle[i]}</Button
							>
						{/each}
					</div>
				{/if}
			</div>

			<!-- Reasons Section -->
			<div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
				<div class="product-pros">
					<h4 class="mb-3 text-lg font-bold">Reasons to Buy</h4>
					<ul class="list-inside list-disc text-[#191919]">
						{#if product.reasonsToBuy.length > 0}
							{#each product.reasonsToBuy as reason}
								<li class="mb-2 flex items-center">
									<svg
										class="mr-2 h-5"
										id="Layer_1"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 23.98 23.71"
									>
										<defs>
											<style>
												.cls-4 {
													fill: #5dce8b;
												}

												.cls-5 {
													fill: #fff;
												}

												.cls-6 {
													fill: #ea3d3d;
												}
											</style>
										</defs>
										<path
											class="cls-6"
											d="M-76.64,11.4c-1.01-.07-2.02-.11-3.05-.11-8.98,0-17.31,2.81-24.18,7.59l-33.29-66.28h31.22l29.3,58.8ZM-53.45-47.4L-77.48,2.55l4.55,9.11c5.38,1.22,13.02,4.15,17.42,7.22L-22.23-47.4h-31.22Z"
										/>
										<g>
											<circle class="cls-4" cx="11.99" cy="11.86" r="11.13" />
											<path
												class="cls-5"
												d="M17.45,13.35H6.52c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h10.93c.83,0,1.5.67,1.5,1.5s-.67,1.5-1.5,1.5Z"
											/>
											<path
												class="cls-5"
												d="M11.99,18.82c-.83,0-1.5-.67-1.5-1.5V6.39c0-.83.67-1.5,1.5-1.5s1.5.67,1.5,1.5v10.93c0,.83-.67,1.5-1.5,1.5Z"
											/>
										</g>
									</svg>
									{reason}
								</li>
							{/each}
						{:else}
							<li class="text-[#191919]">
								<svg
									class="mr-2 h-5"
									id="Layer_1"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 23.98 23.71"
								>
									<defs>
										<style>
											.cls-4 {
												fill: #5dce8b;
											}

											.cls-5 {
												fill: #fff;
											}

											.cls-6 {
												fill: #ea3d3d;
											}
										</style>
									</defs>
									<path
										class="cls-6"
										d="M-76.64,11.4c-1.01-.07-2.02-.11-3.05-.11-8.98,0-17.31,2.81-24.18,7.59l-33.29-66.28h31.22l29.3,58.8ZM-53.45-47.4L-77.48,2.55l4.55,9.11c5.38,1.22,13.02,4.15,17.42,7.22L-22.23-47.4h-31.22Z"
									/>
									<g>
										<circle class="cls-4" cx="11.99" cy="11.86" r="11.13" />
										<path
											class="cls-5"
											d="M17.45,13.35H6.52c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h10.93c.83,0,1.5.67,1.5,1.5s-.67,1.5-1.5,1.5Z"
										/>
										<path
											class="cls-5"
											d="M11.99,18.82c-.83,0-1.5-.67-1.5-1.5V6.39c0-.83.67-1.5,1.5-1.5s1.5.67,1.5,1.5v10.93c0,.83-.67,1.5-1.5,1.5Z"
										/>
									</g>
								</svg>No reasons listed.
							</li>
						{/if}
					</ul>
				</div>
				<div class="product-cons">
					<h4 class="mb-3 text-lg font-bold">Reasons to Avoid</h4>
					<ul class="list-inside list-disc text-[#191919]">
						{#if product.reasonsToAvoid.length > 0}
							{#each product.reasonsToAvoid as reason}
								<li class="mb-2 flex items-center">
									<svg class="mr-2 h-5" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.98 23.71">
										<defs>
											<style>
												.cls-7 {
													fill: #848484;
												}

												.cls-9 {
													fill: #fff;
												}
											</style>
										</defs>
										<circle class="cls-7" cx="11.99" cy="11.86" r="11.13" />
										<path
											class="cls-9"
											d="M17.45,13.35H6.52c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h10.93c.83,0,1.5.67,1.5,1.5s-.67,1.5-1.5,1.5Z"
										/>
									</svg>
									{reason}
								</li>
							{/each}
						{:else}
							<li class="text-[#191919]">No reasons listed.</li>
						{/if}
					</ul>
				</div>
			</div>

			<!-- Review Section with Toggle -->
			<div class="mt-10">
				<h3 class="mb-2 text-lg font-semibold">Review</h3>
				<p class="text-gray-700">
					{@html showMoreState[i] ? product.review : `${product.review.slice(0, 400)}...`}
				</p>
				<button
					class="mt-2 text-blue-500 underline hover:text-blue-700"
					on:click={() => toggleShowMore(i)}
				>
					{showMoreState[i] ? 'Show Less' : 'Show More'}
				</button>
			</div>

			{#if product.title === "Menique Men's 100% Merino Boxer Briefs"}
				<div class="mt-10">
					<p class="text-gray-700">
						<span class="font-semibold">Read more:</span>
						<a href={product.productUrl} class="underline underline-offset-2"
							>Menique Merino Wool Boxer Briefs.</a
						>
					</p>
				</div>
			{/if}
		</section>
	{/each}
</div>

<style>
	.product-cons li,
	.product-pros li {
		list-style: none; /* Remove the default marker */
		position: relative;
	}

</style>
