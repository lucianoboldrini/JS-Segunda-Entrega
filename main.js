
// Definir la clase Colchon
class Colchon {
    constructor(tipo, medida, precio, marca) {
        this.tipo = tipo;
        this.medida = medida;
        this.precio = precio;
        this.marca = marca;
    }
}

// Crear un array de objetos Colchon
const colchones = [
    new Colchon("Espuma De Alta Densidad", "1 plaza", 10000, "Cannon"),
    new Colchon("Resosrtes Continuos", "1 plaza", 12000, "Maxiking"),
    new Colchon("Resosrtes Continuos", "1 plaza", 188000, "Super Descanso"),
    new Colchon("Espuma De Alta Densidad", "1 plaza", 120600, "Super Descanso"),
    new Colchon("Espuma De Alta Densidad", "1 plaza y media", 15000, "Sueño Dorado"),
    new Colchon("Espuma De Alta Densidad", "1 plaza y media", 15000, "Cannon"),
    new Colchon("Resosrtes Continuos", "1 plaza y media", 18000, "Super Descanso"),
    new Colchon("Espuma De Alta Densidad", "2 plazas", 20000, "Cannon"),
    new Colchon("Resosrtes Continuos", "2 plazas", 24000, "Maxiking"),
    new Colchon("Espuma De Alta Densidad", "Queen", 25000, "Super Descanso"),
    new Colchon("Resosrtes Continuos", "Queen", 30000, "Super Descanso"),
    new Colchon("Espuma De Alta Densidad", "King", 30000, "Cannon"),
    new Colchon("Resosrtes Continuos", "King", 36000, "Maxiking")
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
