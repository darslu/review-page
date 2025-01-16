<script>
let products = [
    {
        "name": "Menique Men's 100% Merino Boxer Briefs",
        "image": "images/menique-boxers.png",
        "award": "Best Overall Gaiter",
        "price": "$39.95",
        "pros": [
            "Incredibly soft natural 100% Merino Wool",
            "Flatlock seam construction designed to minimize chafing",
            "Very stretchy to accommodate a variety of body shapes",
            "Even after long days, these keep smelling fresh",
            "Sturdy, comfortable waistband"
        ],
        "cons": ["Price point could be a barrier"],
        "bottomLine": "An adjustable, lightweight full-length gaiter for sloppy mud, rain, and winter snow",
        "categories": {
            "Material": { "value": 10, "weight": 12 },
            "Support": { "value": 10, "weight": 12 },
            "Breathability": { "value": 10, "weight": 12 },
            "Durability": { "value": 9, "weight": 12 },
            "Odor Control": { "value": 10, "weight": 12 }
        }
    },
    {
        "name": "Smartwool Merino Boxer Briefs",
        "image": "",
        "award": "",
        "price": "$48",
        "pros": [
            "Can be worn for multiple days without smells",
            "Great for daily wear"
        ],
        "cons": [
            "Do not keep you cool in very humid situations",
            "Wear out faster over time"
        ],
        "bottomLine": "A reliable and comfortable pair of Merino wool boxer briefs, but with some durability issues.",
        "categories": {
            "Material": { "value": 9, "weight": 12 },
            "Support": { "value": 9, "weight": 12 },
            "Breathability": { "value": 8, "weight": 12 },
            "Durability": { "value": 8, "weight": 12 },
            "Odor Control": { "value": 9, "weight": 12 }
        }
    },
    {
        "name": "Icebreaker Anatomica Merino Boxers",
        "image": "",
        "award": "",
        "price": "$45.00",
        "pros": [
            "Great breathability, even on hot days",
            "Top-notch odor control"
        ],
        "cons": [
            "Inseam is a bit short for some",
            "Runs small; sizing up recommended",
            "Loses elasticity after washing"
        ],
        "bottomLine": "A breathable and comfortable option, but sizing and durability could be better.",
        "categories": {
            "Material": { "value": 8, "weight": 12 },
            "Support": { "value": 7, "weight": 12 },
            "Breathability": { "value": 9, "weight": 12 },
            "Durability": { "value": 8, "weight": 12 },
            "Odor Control": { "value": 9, "weight": 12 }
        }
    },
    {
        "name": "Patagonia Sender Boxer Briefs 6\"",
        "image": "",
        "award": "",
        "price": "$34",
        "pros": [],
        "cons": [],
        "bottomLine": "A solid, durable option, but lacks standout features in breathability and comfort.",
        "categories": {
            "Material": { "value": 8, "weight": 12 },
            "Support": { "value": 8, "weight": 12 },
            "Breathability": { "value": 7, "weight": 12 },
            "Durability": { "value": 8, "weight": 12 },
            "Odor Control": { "value": 7, "weight": 12 }
        }
    },
    {
        "name": "Lululemon Rapid Vent Tech Boxer 5\"",
        "image": "",
        "award": "",
        "price": "$38",
        "pros": [],
        "cons": [],
        "bottomLine": "A high-quality option for daily use, though not the best for performance in extreme conditions.",
        "categories": {
            "Material": { "value": 7, "weight": 12 },
            "Support": { "value": 8, "weight": 12 },
            "Breathability": { "value": 7, "weight": 12 },
            "Durability": { "value": 8, "weight": 12 },
            "Odor Control": { "value": 6, "weight": 12 }
        }
    }
];

	const calculateOverallScore = (categories) => {
	// Sum the total weights
	const totalWeight = Object.values(categories).reduce((sum, category) => sum + category.weight, 0);

	// Calculate the weighted sum
	const weightedSum = Object.values(categories).reduce(
		(sum, category) => sum + category.value * category.weight,
		0
	);

	// Divide the weighted sum by total weight
	const overallScore = weightedSum / totalWeight;

	// Return the score rounded to one decimal place (optional)
	return Math.round(overallScore * 10) / 10; // Keeps 7.2 instead of truncating to 7
	};
</script>

<div class="overflow-x-auto md:w-[750px] mx-5 xl:mx-auto">
	<table class="min-w-full border border-gray-200 divide-y divide-gray-200 text-sm">
		<thead class="bg-gray-100">
			<tr>
				<th class="px-4 py-2 text-left font-semibold text-gray-700">Feature</th>
				{#each products as product}
				<th class="px-4 py-2 text-left font-semibold text-gray-700">{product.name}</th>
			{/each}
			</tr>
		</thead>
		<tbody class="divide-y divide-gray-200">
			<tr>
				<td class="px-4 py-2 font-medium text-gray-800">Image</td>
				{#each products as product}
					<td class="px-4 py-2">{product.image ? `<img src="${product.image}" alt="${product.name}" />` : "No Image"}</td>
				{/each}
			</tr>
			<tr>
				<td class="px-4 py-2 font-medium text-gray-800">Award</td>
				{#each products as product}
					<td class="px-4 py-2">{product.award}</td>
				{/each}
			</tr>
			<tr>
				<td class="px-4 py-2 font-medium text-gray-800">Price</td>
				{#each products as product}
					<td class="px-4 py-2">{product.price}</td>
				{/each}
			</tr>
			<tr>
				<td class="px-4 py-2 font-medium text-gray-800">Overall Score</td>
				{#each products as product}
				  <td class="px-4 py-2">
					{calculateOverallScore(product.categories)*10}
				  </td>
				{/each}
			</tr>
			<tr>
				<td class="px-4 py-2 font-medium text-gray-800">Overall Score</td>
				{#each products as product}
				  <td class="px-4 py-2">
					<div class="relative w-full bg-gray-200 rounded">
					  <div
						class="bg-[#5DCE8B] text-xs leading-none text-right pr-2 text-white h-4 rounded flex justify-end items-center"
						style="width: {calculateOverallScore(product.categories)*10}%;">
						{calculateOverallScore(product.categories)*10}
					  </div>
					</div>
				  </td>
				{/each}
			  </tr>
			<tr>
				<td class="px-4 py-2 font-medium text-gray-800">Pros</td>
				{#each products as product}
					<td class="px-4 py-2">
						<ul class="list-disc ml-5">
							{#each product.pros as pros }
							<li>{pros}</li>
							{/each}
						</ul>
					</td>
				{/each}
			</tr>
			<tr>
				<td class="px-4 py-2 font-medium text-gray-800">Cons</td>
				{#each products as product}
					<td class="px-4 py-2">
						<ul class="list-disc ml-5">
							{#each product.cons as cons }
							<li>{cons}</li>
							{/each}
						</ul>
					</td>
				{/each}
			</tr>
			<tr>
				<td class="px-4 py-2 font-medium text-gray-800">Bottom Line</td>
				{#each products as product}
					<td class="px-4 py-2">{product.bottomLine}</td>
				{/each}
			</tr>
			{#each Object.keys(products[0].categories) as category}
				<tr>
					<td class="px-4 py-2 font-medium text-gray-800">{category} ({products[0].categories[category].weight}%)</td>
					{#each products as product}
						<td class="px-4 py-2">
							<div class="relative w-full bg-gray-200 rounded">
								<div
									class="bg-blue-500 text-xs leading-none text-right pr-2 text-white h-4 rounded flex justify-end items-center"
									style="width: {product.categories[category].value * 10}%;">
									{product.categories[category].value}
								</div>
							</div>
						</td>
					{/each}
				</tr>
			{/each}

		</tbody>
	</table>
</div>



<style>


	th, td {
		border: 1px solid #ddd;
		padding: 8px;
		text-align: left;
	}

	th {
		background-color: #f4f4f4;
		font-weight: bold;
	}
</style>
