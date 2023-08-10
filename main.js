
// Creamos una variable  llamada "colchones" que sea un array de objetos.
const colchones = [
    {
        tipo: "Espuma De Alta Densidad",
        medida: "1 plaza",
        precio: 10000,
        marca: "Cannon"
    },
    {
        tipo: "Resosrtes Continuos",
        medida: "1 plaza",
        precio: 12000,
        marca: "Maxiking"
    },
    {
        tipo: "Resosrtes Continuos",
        medida: "1 plaza",
        precio: 188000,
        marca: "Super Descanso"
    },

    {
        tipo: "Espuma De Alta Densidad",
        medida: "1 plaza",
        precio: 120600,
        marca: "Super Descanso"
    },
    {
        tipo: "Espuma De Alta Densidad",
        medida: "1 plaza y media",
        precio: 15000,
        marca: "Sueño Dorado"
    },
    {
        tipo: "Espuma De Alta Densidad",
        medida: "1 plaza y media",
        precio: 15000,
        marca: "Cannon"
    },
    {
        tipo: "Resosrtes Continuos",
        medida: "1 plaza y media",
        precio: 18000,
        marca: "Super Descanso"
    },
    {
        tipo: "Espuma De Alta Densidad",
        medida: "2 plazas",
        precio: 20000,
        marca: "Cannon"
    },
    {
        tipo: "Resosrtes Continuos",
        medida: "2 plazas",
        precio: 24000,
        marca: "Maxiking"
    },
    {
        tipo: "Espuma De Alta Densidad",
        medida: "Queen",
        precio: 25000,
        marca: "Super Descanso"
    },
    {
        tipo: "Resosrtes Continuos",
        medida: "Queen",
        precio: 30000,
        marca: "Super Descanso"
    },
    {
        tipo: "Espuma De Alta Densidad",
        medida: "King",
        precio: 30000,
        marca: "Cannon"
    },
    {
        tipo: "Resosrtes Continuos",
        medida: "King",
        precio: 36000,
        marca: "Maxiking"
    }
];
// Función para mostrar los detalles de un colchón
function mostrarColchon(colchon) {
    console.log(`Tipo: ${colchon.tipo}`);
    console.log(`Medida: ${colchon.medida}`);
    console.log(`Precio: ${colchon.precio}`);
    console.log(`Marca: ${colchon.marca}`);
    console.log("--------------------");
}

// Función para filtrar colchones por medida
function filtrarColchonesPorMedida(medida) {
    // Convertir la medida ingresada a minúsculas
    const medidaLowerCase = medida.toLowerCase();

    // Medidas válidas para filtrar
    const medidasValidas = ["1 plaza", "1 plaza y media", "2 plazas", "queen", "king"];
    if (medidasValidas.includes(medidaLowerCase)) {
        // Utiliza el método filter para obtener colchones que coincidan con la medida
        return colchones.filter(colchon => colchon.medida.toLowerCase() === medidaLowerCase);
    } else {
        console.log("Medida no válida.");
        return [];
    }
}

// Función para mostrar todos los colchones filtrados
function mostrarColchonesFiltrados(colchonesFiltrados) {
    if (colchonesFiltrados.length > 0) {
        // Utiliza la función mostrarColchon para cada colchón filtrado
        colchonesFiltrados.forEach(mostrarColchon);
    } else {
        console.log("No se encontraron colchones con esa medida.");
    }
}

// Solicitar al usuario ingresar la medida que desea buscar
let medida = prompt("Ingrese la medida que desea buscar (1 plaza, 1 plaza y media, 2 plazas, queen, king)");

// Convertir la entrada del usuario a minúsculas
medida = medida.toLowerCase();

if (medida) {
    // Filtrar los colchones por la medida ingresada
    const colchonesFiltrados = filtrarColchonesPorMedida(medida);

    if (colchonesFiltrados.length > 0) {
        // Crear un listado de colchones en la medida elegida
        const listado = colchonesFiltrados.reduce((acumulador, colchon) => {
            acumulador += `Tipo: ${colchon.tipo}\n`;
            acumulador += `Medida: ${colchon.medida}\n`;
            acumulador += `Precio: ${colchon.precio}\n`;
            acumulador += `Marca: ${colchon.marca}\n`;
            acumulador += "--------------------\n";
            return acumulador;
        }, "");
        
        

        // Mostrar el listado en la consola y en un alert
        console.log(listado);
        alert(listado);
    } else {
        console.log("No se encontraron colchones con esa medida.");
        alert("No se encontraron colchones con esa medida.");
    }
} else {
    console.log("No se ingresó ninguna medida.");
    alert("No se ingresó ninguna medida.");
    
}
