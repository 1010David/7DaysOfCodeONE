// Crear objetos para almacenar los alimentos por categoría
const listaDeCompras = {
    Frutas: [],
    Lacteos: [],
    Congelados: [],
    Dulces: [],
    Otros: [] // Otras categorías que no están predefinidas
};

function agregarAlimento() {
    let continuar = true;

    while (continuar) {
        let respuesta = prompt("¿Deseas agregar un alimento a la lista de compras? (sí/no)").toLowerCase();

        if (respuesta === "sí") {
            let alimento = prompt("¿Qué alimento deseas agregar?");
            let categoria = prompt("¿En qué categoría se encaja ese alimento? (Frutas, Lácteos, Congelados, Dulces, Otros)").toLowerCase();

            // Clasificar el alimento según la categoría
            switch (categoria) {
                case 'frutas':
                    listaDeCompras.Frutas.push(alimento);
                    break;
                case 'lácteos':
                case 'lacteos': // Consideramos ambas versiones para acentos
                    listaDeCompras.Lacteos.push(alimento);
                    break;
                case 'congelados':
                    listaDeCompras.Congelados.push(alimento);
                    break;
                case 'dulces':
                    listaDeCompras.Dulces.push(alimento);
                    break;
                case 'otros':
                    listaDeCompras.Otros.push(alimento);
                    break;
                default:
                    alert("Categoría no válida. El alimento se añadirá a 'Otros'.");
                    listaDeCompras.Otros.push(alimento);
                    break;
            }
        } else if (respuesta === "no") {
            continuar = false;
        } else {
            alert("Respuesta no válida. Por favor, responde con 'sí' o 'no'.");
        }
    }

    // Mostrar la lista de compras en la página web
    mostrarListaDeCompras();
}

function mostrarListaDeCompras() {
    let listaHTML = "";
    for (let categoria in listaDeCompras) {
        if (listaDeCompras[categoria].length > 0) {
            listaHTML += `<h3>${categoria}:</h3><p>${listaDeCompras[categoria].join(', ')}</p>`;
        }
    }

    // Insertar la lista en el DOM
    document.getElementById('listaDeCompras').innerHTML = listaHTML;
}

// Añadir un listener al botón para iniciar la lista de compras
document.getElementById('iniciar').addEventListener('click', agregarAlimento);
