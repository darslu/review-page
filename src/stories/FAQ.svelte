<script>
    import { AccordionItem, Accordion, Button } from 'flowbite-svelte';
	const items = Array(3);
</script>
<div class="container mx-auto mb-10 mt-10 space-y-8 px-5 md:px-20 lg:px-40">
	<h2 class="text-3xl font-bold mb-6 text-center mt-20 md:mb-10">Faqs</h2>
	<Accordion multiple>
		<AccordionItem bind:open={items[0]} defaultClass="text-[#191919] flex items-center justify-between w-full font-medium text-left group-first:rounded-t-md border-s border-e group-first:border-t border-b border-gray-200 dark:border-gray-700 p-5  dark:text-gray-400 hover:dark:bg-gray-800"
			activeClass="bg-white-0 hover:bg-white-0"
			inactiveClass="bg-white-0 hover:bg-white-0">
			<span slot="header">Which type of underwear is best for males?
            </span>
			<p class="mb-2 text-[#191919] dark:text-gray-400">
				When it comes to finding the best type of underwear, boxer briefs are a top choice for their blend of comfort, versatility, and support. They provide excellent coverage while staying breathable and flexible, making them ideal for everyday wear, working out, or even travel. In my own experience, they stay put without bunching and feel secure without being overly tight. The support they offer is especially beneficial for active days or long commutes. Based on personal trial, boxer briefs tend to outperform other styles for both functionality and comfort.
				<br><br>On warmer days or when I want a looser fit, boxers are my go-to choice because they’re incredibly breathable and lightweight. They’re perfect for lounging or casual days when support isn’t as much of a priority. However, while comfortable, they lack the structure boxer briefs offer, which can lead to discomfort during physical activity. For those who prioritize simplicity and movement, briefs are another good option—they provide excellent support for running or sports without excess fabric.
				<br><br>Ultimately, the "best" type of underwear will depend on body type, activity level, and personal fit preferences. Comfort is key, so trial and error may lead to finding the perfect pair for any occasion.
			</p>
		</AccordionItem>
		<AccordionItem bind:open={items[1]} defaultClass="text-[#191919] flex items-center justify-between w-full font-medium text-left group-first:rounded-t-md border-s border-e group-first:border-t border-b border-gray-200 dark:border-gray-700 p-5  dark:text-gray-400 hover:dark:bg-gray-800"
		activeClass="bg-white-0 hover:bg-white-0"
		inactiveClass="bg-white-0 hover:bg-white-0">
			<div slot="header">
				What is the best men's underwear brand?
			</div>
			<p class="mb-2 text-[#191919] dark:text-gray-400">
				Based on my personal experience and testing, I recommend brands that offer natural materials, like Merino wool boxers for their unbeatable comfort, performance, and durability. Brands like Menique, Smartwool, and Icebreaker stand out for their high-quality options. However, after my latest research and hands-on experience, Menique's products are my top choice. They provide the perfect balance of comfort, odor resistance, breathability, and durability while maintaining a great fit for everyday wear. What makes Menique even better is that they offer a wide range of underwear options for both men and women, focusing on style, quality, and natural comfort.
			</p>
		</AccordionItem>
		<AccordionItem bind:open={items[2]} defaultClass="text-[#191919] flex items-center justify-between w-full font-medium text-left group-first:rounded-t-md border-s border-e group-first:border-t border-b border-gray-200 dark:border-gray-700 p-5  dark:text-gray-400 hover:dark:bg-gray-800"
		activeClass="bg-white-0 hover:bg-white-0"
		inactiveClass="bg-white-0 hover:bg-white-0">
			<div slot="header">Which underwear material is best for men?
            </div>
			<p class="mb-2 text-[#191919] dark:text-gray-400">Optimizing the comfort of boxers begins with choosing the right materials, as factors like moisture management, softness, and temperature depend on fabric selection.
				<br><br><b>Cotton</b>: While 100% cotton has long been a popular choice due to its breathability, it falls short in moisture management and can lose shape over time, leading to discomfort. Additionally, it can lead to an unpleasant feeling in warm conditions. Blended fabrics are a better option as they are typically more moisture-wicking and comfortable. Alternatives like Tencel and Merino wool are highly recommended for their breathability, odor control, and moisture management properties.
				<br><br><b>Blends</b>Blends: Blending fabrics such as nylon and spandex offers a modern approach. Nylon is excellent for moisture-wicking and maintains shape without pilling, while spandex adds flexibility and enhances comfort for movement. For those who prefer a single material, 100% Merino wool is a strong alternative due to its natural moisture-wicking and breathable properties.
				<br><br><b>Modal</b>Modal: Fabrics like micro modal are moisture-wicking, lightweight, and resistant to shrinkage while maintaining a silky, soft feel. Micro modal is also known for not locking in bacteria like polyester does. For an even stronger alternative, lyocell offers superior softness, durability, and tear resistance compared to modal, though it comes at a higher price.
				</p>
		</AccordionItem>
		<AccordionItem bind:open={items[3]} defaultClass="text-[#191919] flex items-center justify-between w-full font-medium text-left group-first:rounded-t-md border-s border-e group-first:border-t border-b border-gray-200 dark:border-gray-700 p-5  dark:text-gray-400 hover:dark:bg-gray-800"
		activeClass="bg-white-0 hover:bg-white-0"
		inactiveClass="bg-white-0 hover:bg-white-0">
			<div slot="header">How often should I replace my boxers?
            </div>
			<p class="mb-2 text-[#191919] dark:text-gray-400">I typically replace my boxers every 6 to 12 months, depending on how often I wear them and how they’re holding up. In my experience, even the best quality boxers start showing wear over time—losing their shape, elasticity, or developing small holes. I try to keep an eye on them, and if they start feeling less supportive or showing obvious signs of damage, I’ll swap them out. Regularly replacing them keeps things comfortable, prevents hygiene issues, and ensures they’re working the way they should.</p>
		</AccordionItem>
	</Accordion>
</div>