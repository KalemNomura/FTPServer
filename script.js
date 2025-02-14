async function fetchMonsters() {
    try {
        const response = await fetch("http://localhost:3000/MonsterHunter");
        const hotels = await response.json();

        const tableBody = document.getElementById("hotelsTable").querySelector("tbody");

        hotels.forEach(Monster => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${Monster.Name[0]}</td>
                <td>${Monster.Type[0]}</td>
                <td>${Monster.Element[0]}</td>
                <td>${Monster.Weakness[0]}</td>
                <td>${Monster.Habitat[0]}</td>
            `;

            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Error fetching hotel data:", error);
    }
}

// Fetch and display hotels data on page load
fetchMonsters();