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
            names.push(Monster.Name);
            types.push(Monster.Type);
            elements.push(Monster.Element);
            weaknesses.push(Monster.Weakness);
            habitats.push(Monster.Habitat);
        });

        // Example of how to use these arrays
        console.log("Names:", names);
        console.log("Types:", types);
        console.log("Elements:", elements);
        console.log("Weaknesses:", weaknesses);
        console.log("Habitats:", habitats);

        const DisplayAreaRajang = document.getElementById("DisplayAreaRajang");

        // Display the information of the first monster in each array
        if (names.length > 4) {
            const name = document.createElement("p");
            name.textContent = `Name: ${names[4]}`;
            DisplayAreaRajang.appendChild(name);
        }

        if (types.length > 4) {
            const type = document.createElement("p");
            type.textContent = `Type: ${types[4]}`;
            DisplayAreaRajang.appendChild(type);
        }

        if (elements.length > 4) {
            const element = document.createElement("p");
            element.textContent = `Element: ${elements[4]}`;
            DisplayAreaRajang.appendChild(element);
        }

        if (weaknesses.length > 4) {
            const weakness = document.createElement("p");
            weakness.textContent = `Weakness: ${weaknesses[4]}`;
            DisplayAreaRajang.appendChild(weakness);
        }

        if (habitats.length > 4) {
            const habitat = document.createElement("p");
            habitat.textContent = `Habitat: ${habitats[4]}`;
            DisplayAreaRajang.appendChild(habitat);
        }

        const displayAreaDiablos = document.getElementById("DisplayAreaKushala");

        // Display the information of the second monster in each array
        if (names.length > 5) {
            const name = document.createElement("p");
            name.textContent = `Name: ${names[5]}`;
            displayAreaDiablos.appendChild(name);
        }

        if (types.length > 5) {
            const type = document.createElement("p");
            type.textContent = `Type: ${types[5]}`;
            displayAreaDiablos.appendChild(type);
        }

        if (elements.length > 5) {
            const element = document.createElement("p");
            element.textContent = `Element: ${elements[5]}`;
            displayAreaDiablos.appendChild(element);
        }

        if (weaknesses.length > 5) {
            const weakness = document.createElement("p");
            weakness.textContent = `Weakness: ${weaknesses[5]}`;
            displayAreaDiablos.appendChild(weakness);
        }

        if (habitats.length > 5) {
            const habitat = document.createElement("p");
            habitat.textContent = `Habitat: ${habitats[5]}`;
            displayAreaDiablos.appendChild(habitat);
        }

        const displayAreaNargacuga = document.getElementById("DisplayAreaTeostra");

        // Display the information of the third monster in each array
        if (names.length > 6) {
            const name = document.createElement("p");
            name.textContent = `Name: ${names[6]}`;
            displayAreaNargacuga.appendChild(name);
        }

        if (types.length > 6) {
            const type = document.createElement("p");
            type.textContent = `Type: ${types[6]}`;
            displayAreaNargacuga.appendChild(type);
        }

        if (elements.length > 6) {
            const element = document.createElement("p");
            element.textContent = `Element: ${elements[6]}`;
            displayAreaNargacuga.appendChild(element);
        }

        if (weaknesses.length > 6) {
            const weakness = document.createElement("p");
            weakness.textContent = `Weakness: ${weaknesses[6]}`;
            displayAreaNargacuga.appendChild(weakness);
        }

        if (habitats.length > 6) {
            const habitat = document.createElement("p");
            habitat.textContent = `Habitat: ${habitats[6]}`;
            displayAreaNargacuga.appendChild(habitat);
        }

        const displayAreaZinogre = document.getElementById("DisplayAreaVelkana");

        // Display the information of the fourth monster in each array
        if (names.length > 7) {
            const name = document.createElement("p");
            name.textContent = `Name: ${names[7]}`;
            displayAreaZinogre.appendChild(name);
        }

        if (types.length > 7) {
            const type = document.createElement("p");
            type.textContent = `Type: ${types[7]}`;
            displayAreaZinogre.appendChild(type);
        }

        if (elements.length > 7) {
            const element = document.createElement("p");
            element.textContent = `Element: ${elements[3]}`;
            displayAreaZinogre.appendChild(element);
        }

        if (weaknesses.length > 7) {
            const weakness = document.createElement("p");
            weakness.textContent = `Weakness: ${weaknesses[7]}`;
            displayAreaZinogre.appendChild(weakness);
        }

        if (habitats.length > 7) {
            const habitat = document.createElement("p");
            habitat.textContent = `Habitat: ${habitats[7]}`;
            displayAreaZinogre.appendChild(habitat);
        }
    } catch (error) {
        console.error("Error fetching monster data:", error);
    }
}

// Fetch and display monsters data on page load
fetchMonsters();