const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

async function fetchCryptoData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayCryptoData(data);
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

function displayCryptoData(data) {
    const tableBody = document.getElementById('crypto-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
    data.forEach(coin => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${coin.name}</td>
            <td>$${coin.current_price.toFixed(2)}</td>
            <td>${coin.price_change_percentage_24h.toFixed(2)}%</td>
        `;
        tableBody.appendChild(row);
    });
}

fetchCryptoData();
