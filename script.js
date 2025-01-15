async function searchDomain() {
    const domain = document.getElementById("domainInput").value;
    const resultsDiv = document.getElementById("results");

    // Check if the user entered a domain name
    if (domain.trim() === "") {
        alert("Please enter a domain name!");
        return;
    }

    // Show loading message
    resultsDiv.innerHTML = `<p class="loading-message">Searching for <strong>${domain}</strong>...</p>`;

    const registrars = ["Wix", "Name.com", "Domain.com", "Namecheap", "Bluehost", "Google Domains", "HostGator", "GoDaddy", "Hostinger"];
    let resultsHTML = `<table><thead><tr><th>Registrar</th><th>Availability</th><th>Simulated Price (₹)</th><th>Buy Now</th></tr></thead><tbody>`;

    for (const registrar of registrars) {
        const isAvailable = Math.random() < 0.7; // Simulate higher availability
        const priceUSD = (Math.random() * 8 + 6).toFixed(2);
        const inrRate = 83.5;
        const priceINR = (priceUSD * inrRate).toFixed(2);
        const buyLink = `https://www.${registrar.toLowerCase().replace(/\s+/g, '')}.com/domainsearch/find?domainToCheck=${domain}`;

        resultsHTML += `<tr>
            <td>${registrar}</td>
            <td>${isAvailable ? 'Available' : 'Not Available'}</td>
            <td>${isAvailable ? priceINR : '-'}</td>
            <td>${isAvailable ? `<a href="${buyLink}" target="_blank">Buy Now</a> (Simulated)` : '-'}</td>
        </tr>`;
    }

    resultsHTML += `</tbody></table>`;
    resultsDiv.innerHTML = resultsHTML;
}
