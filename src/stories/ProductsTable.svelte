<script>
	let products = [
		{
			name: "Rab Muztag GTX",
			image: "",
			award: "Best Overall Gaiter",
			price: "$90.00",
			pros: "Comfortable, lightweight for the size, replaceable instep, excellent protection",
			cons: "Thinner material for a full length, challenging lace hook",
			bottomLine: "An adjustable, lightweight full-length gaiter for sloppy mud, rain, and winter snow",
			categories: {
				"Comfort and Breathability": { value: 7.0, weight: 25 },
				"Debris Protection": { value: 9.0, weight: 25 },
				"Durability": { value: 6.0, weight: 15 },
				"Ease of Attachment": { value: 6.0, weight: 15 },
				"Water Resistance": { value: 8.0, weight: 10 },
				"Weight": { value: 6.0, weight: 10 }
			}
		},
		{
			name: "Outdoor Research Helium",
			image: "",
			award: "Most Comfortable Full-Length Option",
			price: "$35.53",
			pros: "Light, instep strap can be replaced, comfortable, good breathability",
			cons: "No insulation, thin material isn’t as durable",
			bottomLine: "A full-length yet lightweight gaiter that feels good and is great in the shoulder seasons",
			categories: {
				"Comfort and Breathability": { value: 7.0, weight: 25 },
				"Debris Protection": { value: 9.0, weight: 25 },
				"Durability": { value: 6.0, weight: 15 },
				"Ease of Attachment": { value: 6.0, weight: 15 },
				"Water Resistance": { value: 8.0, weight: 10 },
				"Weight": { value: 6.0, weight: 10 }
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

<div class="overflow-x-auto md:w-[750px] mx-auto">
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
				<td class="px-4 py-2 font-medium text-gray-800">Award</td>
				<td class="px-4 py-2">Best Overall Gaiter</td>
				<td class="px-4 py-2">Most Comfortable Full-Length Option</td>
			</tr>
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
						class="bg-green-500 text-xs leading-none text-right pr-2 text-white h-4 rounded flex justify-end items-center"
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
					<td class="px-4 py-2">{product.pros}</td>
				{/each}
			</tr>
			<tr>
				<td class="px-4 py-2 font-medium text-gray-800">Cons</td>
				{#each products as product}
					<td class="px-4 py-2">{product.cons}</td>
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
