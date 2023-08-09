
// Creamos una variable  llamada "colchones" que sea un array de objetos.
let colchones = [
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

// Creamos una función llamada "mostrarColchones" que reciba como parámetro un array de colchones y los muestre en la pantalla
function mostrarColchones(arrayDeColchones) {
    // Recorremos el array con un bucle for
    for (let i = 0; i < arrayDeColchones.length; i++) {
        // Obtenemos el colchón actual del array
        let colchon = arrayDeColchones[i];
        // Mostramos sus propiedades en la pantalla, console.log
        console.log(`Tipo: ${colchon.tipo}`);
        console.log(`Medida: ${colchon.medida}`);
        console.log(`Precio: ${colchon.precio}`);
        console.log(`Marca: ${colchon.marca}`);
        console.log("--------------------");
    }
}

// Creamos una función llamada "filtrarColchones" que reciba como parámetro una medida y devuelva un nuevo array de colchones que solo contenga los que tengan esa medida
function filtrarColchones(medida) {
    // Declaramos una variable  llamada "colchonesFiltrados" que sea un array vacío
    let colchonesFiltrados = [];
    // Recorremos el array de colchones con un bucle for
    for (let i = 0; i < colchones.length; i++) {
        // Obtenemos el colchón actual del array
        let colchon = colchones[i];
        // Comparamos si la medida del colchón es igual a la medida que recibimos como parámetro
        if (colchon.medida === medida) {
            // Si es igual, agregamos el colchón al array de colchonesFiltrados usando el método push
            colchonesFiltrados.push(colchon);
        }
    }
    // Devolvemos el valor de colchonesFiltrados
    return colchonesFiltrados;
}

// Pedimos al usuario que ingrese la medida que desea filtrar y guardamos su respuesta en una variable de JS llamada medida
let medida = prompt("Ingrese la medida que desea Buscar");

// Llamamos a la función "filtrarColchones" pasándole la variable medida y guardamos el resultado en una variable de JS llamada colchonesFiltrados
let colchonesFiltrados = filtrarColchones(medida);

// Llamamos a la función "mostrarColchones" pasándole la variable "colchonesFiltrados"
mostrarColchones(colchonesFiltrados);