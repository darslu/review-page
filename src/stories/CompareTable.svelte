<script>
	let mainProvider = 'Menique'; // Default selected provider
	let boxerBriefsData = [
		{
			feature: 'Overall score',
			Menique: 9.8,
			Smartwool: 8.6,
			Icebreaker: 8.2,
			Patagonia: 7.6,
			Lululemon: 7.2
		},
		{
			feature: 'True to size',
			Menique: true,
			Smartwool: true,
			Icebreaker: false,
			Patagonia: false,
			Lululemon: false
		},
		{
			feature: 'Shape retention',
			Menique: true,
			Smartwool: false,
			Icebreaker: true,
			Patagonia: false,
			Lululemon: false
		},
		{
			feature: 'Seam comfort',
			Menique: true,
			Smartwool: true,
			Icebreaker: true,
			Patagonia: true,
			Lululemon: false
		},
		{
			feature: 'Fit consistency',
			Menique: true,
			Smartwool: true,
			Icebreaker: false,
			Patagonia: true,
			Lululemon: false
		},
		{
			feature: 'Waistband comfort',
			Menique: true,
			Smartwool: true,
			Icebreaker: false,
			Patagonia: false,
			Lululemon: true
		},
		{
			feature: 'Composition',
			Menique: '100% Merino Wool',
			Smartwool: '88% Merino Wool, <br>12% Nylon',
			Icebreaker: '83% Merino Wool,<br> 12% Nylon,<br> 5% Elastane',
			Patagonia: '89% Recycled Nylon, <br>11% Spandex',
			Lululemon: '91% Nylon, <br>9% Elastane'
		},
		{
			feature: 'Price',
			Menique: '£27.00',
			Smartwool: '£45',
			Icebreaker: '£40',
			Patagonia: '£35',
			Lululemon: '£20'
		}
	];

	const getIcon = (condition) => {
		if (typeof condition === 'boolean') {
			return {
				icon: condition
					? `<svg xmlns="http://www.w3.org/2000/svg" fill="#5DCE8B" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.285 2.28l-11.321 11.333-4.243-4.242-2.121 2.121 6.364 6.364 13.443-13.444z"/></svg>`
					: `<svg xmlns="http://www.w3.org/2000/svg" fill="red" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.364 18.364l-6.364-6.364-6.364 6.364-2.121-2.121 6.364-6.364-6.364-6.364 2.121-2.121 6.364 6.364 6.364-6.364 2.121 2.121-6.364 6.364 6.364 6.364z"/></svg>`,
				class: condition ? 'check-icon' : 'cross-icon'
			};
		} else {
			return { icon: condition, class: '' };
		}
	};
</script>

<h2 class="mb-4 mb-5 mt-10 text-center text-2xl font-bold dark:text-white md:mt-16 md:mb-16 md:text-3xl">
	Top 5 Boxer Briefs: Test Results
</h2>
<div class="table-container 2xl:mx-auto 2xl:w-[1600px] mb-20">
	<table class="mx-5 xl:mx-0">
		<thead>
			<tr>
				<th></th>
				<th
					class={mainProvider === 'Menique'
						? 'main-column pt-0 rounded-t-md border-x-4 border-t-4 border-[#5DCE8B]'
						: ''}
				>
				<img src="images/medal.svg" alt="Winner badge" class="mx-auto h-20 medal-position" />
					<img src="images/menique-logo.png" alt="Menique" class="mx-auto h-10" />
					<span class="mt-2 block text-sm font-medium text-gray-600">100% Merino Boxer Briefs</span>
				</th>
				<th class={mainProvider === 'Smartwool' ? 'main-column' : ''}>
					<img src="images/smartwool-logo.png" alt="Smartwool" class="mx-auto h-8 mt-[84px]" />
					<span class="mt-2 block text-sm font-medium text-gray-600">Merino Boxer Briefs</span>
				</th>
				<th class={mainProvider === 'Icebreaker' ? 'main-column' : ''}>
					<img src="images/icebreaker-logo.png" alt="Icebreaker" class="mx-auto h-8 mt-[84px]" />
					<span class="mt-2 block text-sm font-medium text-gray-600">Anatomica Merino Boxers</span>
				</th>
				<th class={mainProvider === 'Patagonia' ? 'main-column' : ''}>
					<img src="images/patagonia-logo.png" alt="Patagonia" class="mx-auto h-8 mt-[84px]" />
					<span class="mt-2 block text-sm font-medium text-gray-600">Sender Boxer Briefs 6"</span>
				</th>
				<th class={mainProvider === 'Lululemon' ? 'main-column' : ''}
					>
					<img src="images/lululemon-logo.png" alt="Patagonia" class="mx-auto h-8 mt-[84px]" />
					<span class="mt-2 block text-sm font-medium text-gray-600">Rapid Vent Tech Boxer 5"</span>
				</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td></td>
				<td class={mainProvider === 'Menique' ? 'main-column border-x-4 border-[#5DCE8B]' : 'p-0'}>
					<img src="images/menique-boxers.png" alt="Menique Boxer Briefs" class="mx-auto w-8/12" />
				</td>
				<td class={mainProvider === 'Smartwool' ? 'main-column' : 'p-0'}>
					<img src="/images/smartwool-boxers.png" alt="Smartwool Boxer Briefs" class=" mx-auto w-8/12 " />
				</td>
				<td class={mainProvider === 'Icebreaker' ? 'main-column' : 'p-0'}>
					<img src="/images/icebreaker-boxers.png" alt="Icebreaker Boxer Briefs" class=" mx-auto w-8/12" />
				</td>
				<td class={mainProvider === 'Patagonia' ? 'main-column' : 'p-0'}>
					<img src="/images/patagonia-boxers.png" alt="Patagonia Boxer Briefs" class=" mx-auto w-8/12" />
				</td>
				<td class={mainProvider === 'Lululemon' ? 'main-column' : 'p-0'}>
					<img src="/images/lululemon-boxers.png" alt="Lululemon Boxer Briefs" class=" mx-auto w-8/12" />
				</td>
			</tr>
			{#each boxerBriefsData as row}
				<tr>
					<td>{row.feature}</td>
					<td class={mainProvider === 'Menique' ? 'main-column border-x-4 border-[#5DCE8B]' : ''}>
						<span class={getIcon(row.Menique).class}>
							{@html getIcon(row.Menique).icon}
						</span>
					</td>
					<td class={mainProvider === 'Smartwool' ? 'main-column' : ''}>
						<span class={getIcon(row.Smartwool).class}>
							{@html getIcon(row.Smartwool).icon}
						</span>
					</td>
					<td class={mainProvider === 'Icebreaker' ? 'main-column' : ''}>
						<span class={getIcon(row.Icebreaker).class}>
							{@html getIcon(row.Icebreaker).icon}
						</span>
					</td>
					<td class={mainProvider === 'Patagonia' ? 'main-column' : ''}>
						<span class={getIcon(row.Patagonia).class}>
							{@html getIcon(row.Patagonia).icon}
						</span>
					</td>
					<td class={mainProvider === 'Lululemon' ? 'main-column' : ''}>
						<span class={getIcon(row.Lululemon).class}>
							{@html getIcon(row.Lululemon).icon}
						</span>
					</td>
				</tr>
			{/each}
			<tr>
				<td></td>
				<td class="main-column my-10 rounded-b-md border-x-4 border-b-4 border-[#5DCE8B] px-0">
					<a
						href="https://menique.co.uk/collections/mens-merino-underwear/products/mens-merino-160gsm-short-boxer-briefs"
						class="block my-2 rounded-md bg-[#5DCE8B] w-full py-2 text-white"
						aria-label="Visit Menique">Get Deal</a
					>
				</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
		</tbody>
	</table>
</div>

<style>
	.table-container {
		overflow-x: auto;
	}

	table {
		border-collapse: separate;
		border-spacing: 0;
		width: 100%;
		font-size: 16px;
		text-align: left;
	}

	th,
	td {
		padding: 12px 15px;
		text-align: center;
		min-width: 165px;
	}
	table tr:nth-child(2) td {
		font-size: 20px;
	}

	tbody tr:nth-child(even) {
		background-color: #f7f7f7;
	}

	tbody tr:nth-child(even):last-child {
		background-color: #fff;
	}

	tbody tr:nth-child(odd) td:first-child {
		border-radius: 8px 0 0 8px; /* Top-left and bottom-left corners */
	}

	tbody tr:nth-child(odd) td:last-child {
		border-radius: 0 8px 8px 0; /* Top-right and bottom-right corners */
	}

	th {
		font-weight: 500;
		text-align: center;
		padding: 12px 15px;
	}

	.main-column {
		min-width: 185px;
		background-color: #fff;
		font-weight: bold;
	}

	.main-column.pt-0 {
		padding-top: 0;
	}

	.check-icon {
		color: #5dce8b;
		font-weight: bold;
	}

	.cross-icon {
		color: #ea3d3d;
		font-weight: bold;
	}

	.check-icon,
	.cross-icon {
		display: inline-block;
		vertical-align: middle;
	}
	.medal-position {
		margin-top: -9px;
		margin-bottom: 14px;
	}
</style>
