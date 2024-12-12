<script>
	// Data for the table
	let vpnData = [
	  {
		feature: "Device Number",
		Surfshark: "Unlimited",
		ExpressVPN: 8,
		ProtonVPN: 10,
		PIA: "Unlimited",
		CyberGhost: 7,
	  },
	  {
		feature: "Server Locations",
		Surfshark: 100,
		ExpressVPN: 105,
		ProtonVPN: 100,
		PIA: 91,
		CyberGhost: 100,
	  },
	  {
		feature: "Alternative Email Generator",
		Surfshark: true,
		ExpressVPN: false,
		ProtonVPN: false,
		PIA: false,
		CyberGhost: false,
	  },
	  {
		feature: "Data Breach Alerts",
		Surfshark: true,
		ExpressVPN: false,
		ProtonVPN: false,
		PIA: true,
		CyberGhost: false,
	  },
	  {
		feature: "Malware Protection",
		Surfshark: true,
		ExpressVPN: false,
		ProtonVPN: false,
		PIA: true,
		CyberGhost: false,
	  },
	  {
		feature: "Tracker and Ad Blocker",
		Surfshark: true,
		ExpressVPN: true,
		ProtonVPN: true,
		PIA: false,
		CyberGhost: true,
	  },
	  {
		feature: "Test info",
		Surfshark: true,
		ExpressVPN: true,
		ProtonVPN: true,
		PIA: false,
		CyberGhost: true,
	  },
	];
  
	// The main VPN provider to highlight
	let mainProvider = "Surfshark";
  
	const getIcon = (condition) => {
  if (typeof condition === "boolean") {
    return {
      icon: condition
        ? `<svg xmlns="http://www.w3.org/2000/svg" fill="green" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.285 2.28l-11.321 11.333-4.243-4.242-2.121 2.121 6.364 6.364 13.443-13.444z"/></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" fill="red" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.364 18.364l-6.364-6.364-6.364 6.364-2.121-2.121 6.364-6.364-6.364-6.364 2.121-2.121 6.364 6.364 6.364-6.364 2.121 2.121-6.364 6.364 6.364 6.364z"/></svg>`,
      class: condition ? "check-icon" : "cross-icon",
    };
  } else {
    return { icon: condition, class: "" };
  }
};

  </script>
  
  <style>
	.table-container {
	  overflow-x: auto;
	}
  
	table {
	  border-collapse: separate;
	  border-spacing: 0;
	  width: 100%;
	  margin: 20px 0;
	  font-size: 16px;
	  text-align: left;
	}
  
	th,
	td {
	  padding: 12px 15px;
	  text-align: center;
	}
  
	tbody tr:nth-child(odd) {
		background-color: #ededed;
	}

	tbody tr:nth-child(odd) td:first-child {
		background-color: #ededed;
		border-radius: 8px 0 0 8px; /* Top-left and bottom-left corners */
	}

	tbody tr:nth-child(odd) td:last-child {
		background-color: #ededed;
		border-radius: 0 8px 8px 0; /* Top-right and bottom-right corners */
	}

	th {
	  font-weight: bold;
	  text-align: center;
	  padding: 12px 15px;
	}
  
	.main-column {
	  background-color: #ededed;
	  font-weight: bold;
	}
  
	.check-icon {
	  color: green;
	  font-weight: bold;
	}
  
	.cross-icon {
	  color: red;
	  font-weight: bold;
	}

	.check-icon, .cross-icon {
		display: inline-block;
		vertical-align: middle;
	}
  </style>
  
  <div class="table-container  md:w-[1400px] mx-auto">
	<table>
	  <thead>
		<tr>
		  <th></th>
		  <th class={mainProvider === "Surfshark" ? "main-column border-black border-t border-x rounded-t-md" : ""}>Surfshark</th>
		  <th class={mainProvider === "ExpressVPN" ? "main-column" : ""}>ExpressVPN</th>
		  <th class={mainProvider === "ProtonVPN" ? "main-column" : ""}>ProtonVPN</th>
		  <th class={mainProvider === "PIA" ? "main-column" : ""}>Private Internet Access</th>
		  <th class={mainProvider === "CyberGhost" ? "main-column" : ""}>CyberGhost</th>
		</tr>
	  </thead>
	  <tbody>
		{#each vpnData as row}
		  <tr>
			<td>{row.feature}</td>
			<td class={mainProvider === "Surfshark" ? "main-column border-black border-x" : ""}>
			  <span class={getIcon(row.Surfshark).class}>
				{@html getIcon(row.Surfshark).icon}
			  </span>
			</td>
			<td class={mainProvider === "ExpressVPN" ? "main-column" : ""}>
			  <span class={getIcon(row.ExpressVPN).class}>
				{@html getIcon(row.ExpressVPN).icon}
			  </span>
			</td>
			<td class={mainProvider === "ProtonVPN" ? "main-column" : ""}>
			  <span class={getIcon(row.ProtonVPN).class}>
				{@html getIcon(row.ProtonVPN).icon}
			  </span>
			</td>
			<td class={mainProvider === "PIA" ? "main-column" : ""}>
			  <span class={getIcon(row.PIA).class}>
				{@html getIcon(row.PIA).icon}
			  </span>
			</td>
			<td class={mainProvider === "CyberGhost" ? "main-column" : ""}>
			  <span class={getIcon(row.CyberGhost).class}>
				{@html getIcon(row.CyberGhost).icon}
			  </span>
			</td>
		  </tr>
		{/each}
		<tr class="">
			<td></td>
			<td class="main-column border-black border-b border-x rounded-b-md mt-10">
				<a href="https://menique.com/collections/mens-merino-underwear/products/mens-merino-160gsm-short-boxer-briefs" class="bg-green-500  px-3 py-2 rounded-md text-white" aria-label="visit menique">Get deal</a>
			</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	  </tbody>
	</table>
  </div>
  