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

        const displayAreaRathalos = document.getElementById("displayAreaRathalos");

        // Display the information of Rathalos
        if (names.length > 0) {
            const name = document.createElement("p");
            name.textContent = `Name: ${names[0]}`;
            displayAreaRathalos.appendChild(name);
        }

        if (types.length > 0) {
            const type = document.createElement("p");
            type.textContent = `Type: ${types[0]}`;
            displayAreaRathalos.appendChild(type);
        }

        if (elements.length > 0) {
            const element = document.createElement("p");
            element.textContent = `Element: ${elements[0]}`;
            displayAreaRathalos.appendChild(element);
        }

        if (weaknesses.length > 0) {
            const weakness = document.createElement("p");
            weakness.textContent = `Weakness: ${weaknesses[0]}`;
            displayAreaRathalos.appendChild(weakness);
        }

        if (habitats.length > 0) {
            const habitat = document.createElement("p");
            habitat.textContent = `Habitat: ${habitats[0]}`;
            displayAreaRathalos.appendChild(habitat);
        }

        const displayAreaDiablos = document.getElementById("displayAreaDiablos");

        // Display the information of Diablos
        if (names.length > 1) {
            const name = document.createElement("p");
            name.textContent = `Name: ${names[1]}`;
            displayAreaDiablos.appendChild(name);
        }

        if (types.length > 1) {
            const type = document.createElement("p");
            type.textContent = `Type: ${types[1]}`;
            displayAreaDiablos.appendChild(type);
        }

        if (elements.length > 1) {
            const element = document.createElement("p");
            element.textContent = `Element: ${elements[1]}`;
            displayAreaDiablos.appendChild(element);
        }

        if (weaknesses.length > 1) {
            const weakness = document.createElement("p");
            weakness.textContent = `Weakness: ${weaknesses[1]}`;
            displayAreaDiablos.appendChild(weakness);
        }

        if (habitats.length > 1) {
            const habitat = document.createElement("p");
            habitat.textContent = `Habitat: ${habitats[1]}`;
            displayAreaDiablos.appendChild(habitat);
        }

        const displayAreaNargacuga = document.getElementById("displayAreaNargacuga");

        // Display the information of Nargacuga
        if (names.length > 2) {
            const name = document.createElement("p");
            name.textContent = `Name: ${names[2]}`;
            displayAreaNargacuga.appendChild(name);
        }

        if (types.length > 2) {
            const type = document.createElement("p");
            type.textContent = `Type: ${types[2]}`;
            displayAreaNargacuga.appendChild(type);
        }

        if (elements.length > 2) {
            const element = document.createElement("p");
            element.textContent = `Element: ${elements[2]}`;
            displayAreaNargacuga.appendChild(element);
        }

        if (weaknesses.length > 2) {
            const weakness = document.createElement("p");
            weakness.textContent = `Weakness: ${weaknesses[2]}`;
            displayAreaNargacuga.appendChild(weakness);
        }

        if (habitats.length > 2) {
            const habitat = document.createElement("p");
            habitat.textContent = `Habitat: ${habitats[2]}`;
            displayAreaNargacuga.appendChild(habitat);
        }

        const displayAreaZinogre = document.getElementById("displayAreaZinogre");

        // Display the information of Zinogre
        if (names.length > 3) {
            const name = document.createElement("p");
            name.textContent = `Name: ${names[3]}`;
            displayAreaZinogre.appendChild(name);
        }

        if (types.length > 3) {
            const type = document.createElement("p");
            type.textContent = `Type: ${types[3]}`;
            displayAreaZinogre.appendChild(type);
        }

        if (elements.length > 3) {
            const element = document.createElement("p");
            element.textContent = `Element: ${elements[3]}`;
            displayAreaZinogre.appendChild(element);
        }

        if (weaknesses.length > 3) {
            const weakness = document.createElement("p");
            weakness.textContent = `Weakness: ${weaknesses[3]}`;
            displayAreaZinogre.appendChild(weakness);
        }

        if (habitats.length > 3) {
            const habitat = document.createElement("p");
            habitat.textContent = `Habitat: ${habitats[3]}`;
            displayAreaZinogre.appendChild(habitat);
        }
    } catch (error) {
        console.error("Error fetching monster data:", error);
    }
}

// Fetch and display monsters data on page load
fetchMonsters();