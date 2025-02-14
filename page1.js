async function fetchMonsters() {
    try {
        const response = await fetch("http://localhost:3000/MonsterHunter");
        const monsters = await response.json();

        const names = [];
        const types = [];
        const elements = [];
        const weaknesses = [];
        const habitats = [];

        monsters.forEach(Monster => {
            names.push(Monster.Name[0]);
            types.push(Monster.Type[0]);
            elements.push(Monster.Element[0]);
            weaknesses.push(Monster.Weakness[0]);
            habitats.push(Monster.Habitat[0]);
        });

        // Example of how to use these arrays
        console.log("Names:", names);
        console.log("Types:", types);
        console.log("Elements:", elements);
        console.log("Weaknesses:", weaknesses);
        console.log("Habitats:", habitats);

        const displayArea = document.getElementById("displayArea");

        // Display the names of all monsters as normal text
        names.forEach(name => {
            const paragraph = document.createElement("p");
            paragraph.textContent = name;
            displayArea.appendChild(paragraph);
        });
    } catch (error) {
        console.error("Error fetching monster data:", error);
    }
}

// Fetch and display monsters data on page load
fetchMonsters();