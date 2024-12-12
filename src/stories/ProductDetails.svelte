<script>
    // Example data for multiple products
    let products = [
      {
        title: 'Best Overall Gaiter',
        name: 'Rab Muztag GTX',
        score: 72,
        ratings: [
          { name: 'Comfort and Breathability', value: 7.0 },
          { name: 'Debris Protection', value: 9.0 },
          { name: 'Durability', value: 6.0 },
          { name: 'Ease of Attachment', value: 6.0 },
          { name: 'Water Resistance', value: 8.0 },
          { name: 'Weight', value: 4.0 },
        ],
        reasonsToBuy: ['Fully waterproof', 'Lightweight for the height'],
        reasonsToAvoid: ['Durability concerns', 'Difficult to unhook'],
        prices: [
          { label: '$90 at Backcountry', link: '#' },
          { label: '$90 at Amazon', link: '#' },
          { label: 'Check price at REI', link: '#' },
        ],
        image:
          'https://menique.com/cdn/shop/files/2-dark-green_6a969e5b-076d-45d8-9ef1-a18c7c80d44b.jpg',
      },
      {
        title: 'Best Budget Gaiter',
        name: 'Black Diamond GTX',
        score: 65,
        ratings: [
          { name: 'Comfort and Breathability', value: 6.5 },
          { name: 'Debris Protection', value: 8.0 },
          { name: 'Durability', value: 7.0 },
          { name: 'Ease of Attachment', value: 5.0 },
          { name: 'Water Resistance', value: 7.5 },
          { name: 'Weight', value: 6.0 },
        ],
        reasonsToBuy: ['Affordable', 'Durable materials'],
        reasonsToAvoid: ['Heavier than competitors'],
        prices: [
          { label: '$70 at Backcountry', link: '#' },
          { label: 'Check price at Amazon', link: '#' },
        ],
        image:
          'https://unboundmerino.com/cdn/shop/products/10PK-BB_BLK-2.jpg?crop=center&height=650&v=1616463057&width=541', // Replace with actual image path
      },
    ];
  </script>
  
  <div class="space-y-8 my-20">
    {#each products as product}
      <section class="md:w-[1000px] mx-auto w-full rounded-lg bg-gray-50 p-6 shadow-md">
        <!-- Header -->
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-bold">{product.title}</h2>
          <span class="rounded bg-green-200 px-2 py-1 text-green-700">Editors' Choice</span>
        </div>
        <h3 class="text-xl text-gray-600">{product.name}</h3>
  
        <!-- Content -->
        <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <!-- Image -->
          <img
            src={product.image}
            alt={product.name}
            class="h-60 w-full rounded-lg object-cover"
          />
  
          <!-- Rating Section -->
          <div>
            <div class="text-5xl font-bold text-green-700">{product.score}</div>
            <div class="text-sm text-gray-500">Overall Score</div>
            <div class="mt-4">
              {#each product.ratings as rating}
                <div class="mb-2 flex items-center justify-between">
                  <span class="text-sm">{rating.name}</span>
                  <span class="text-sm font-bold">{rating.value}</span>
                </div>
                <div class="h-2 w-full rounded-full bg-gray-200">
                  <div
                    class="h-2 rounded-full {rating.value > 8 ? 'bg-green-700' : rating.value > 6 ? 'bg-green-500' : rating.value > 4 ? 'bg-yellow-400' : 'bg-red-500'}"
                    style="width: calc({rating.value * 10}%);"
                  ></div>
                </div>
              {/each}
            </div>
          </div>
  
          <!-- Price Section -->
          <div>
            {#each product.prices as price}
              <a
                href={price.link}
                class="mt-2 block rounded-lg bg-blue-500 py-2 text-center text-white hover:bg-blue-600"
              >
                {price.label}
              </a>
            {/each}
          </div>
        </div>
  
        <!-- Reasons Section -->
        <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div class="product-pros">
            <h4 class="text-lg font-bold">Reasons to Buy</h4>
            <ul class="list-inside list-disc text-green-700">
              {#each product.reasonsToBuy as reason}
                <li class="flex items-center">{reason}</li>
              {/each}
            </ul>
          </div>
          <div class="product-cons">
            <h4 class="text-lg font-bold">Reasons to Avoid</h4>
            <ul class="list-inside list-disc text-yellow-700">
              {#each product.reasonsToAvoid as reason}
                <li class="flex items-center">{reason}</li>
              {/each}
            </ul>
          </div>
        </div>
      </section>
    {/each}
  </div>
  

<style>

    .product-cons li, .product-pros li {
        list-style: none; /* Remove the default marker */
        position: relative;
        padding-left: 1.5em; /* Space for the custom marker */
    }

    .product-pros li::before, .product-cons li::before {
        font-size: 1.2em;
        position: absolute;
        left: 0;
        margin-right: 3px; /* Simulated margin */
        border-radius: 50%; /* Rounded marker */
        color: white; /* Marker color */
        width: 1em; /* Adjust marker size */
        height: 1em;
        display: flex; /* Center content */
        align-items: center;
        justify-content: center;
        padding-bottom: 5px;
    }

	.product-pros li::before {
		content: '+';
        background: green; /* Custom background */
	}

	.product-cons li::before {
		content: '-';
        background: #ecbd2f; /* Custom background */
	}
</style>
