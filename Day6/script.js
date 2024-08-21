// Array para almacenar los elementos de la lista de compras
let listaDeCompras = [];

while (true) {
    let accion = prompt("¿Deseas agregar un alimento a la lista de compras? (sí/no/eliminar)");

    if (accion.toLowerCase() === "sí") {
        let alimento = prompt("¿Qué alimento deseas agregar?");
        listaDeCompras.push(alimento);
        alert(`${alimento} ha sido añadido a la lista de compras.`);
    } else if (accion.toLowerCase() === "eliminar" && listaDeCompras.length > 0) {
        let eliminarAlimento = prompt("Estos son los elementos en tu lista: " + listaDeCompras.join(", ") + ". ¿Cuál deseas eliminar?");
        let index = listaDeCompras.indexOf(eliminarAlimento);
        
        if (index !== -1) {
            listaDeCompras.splice(index, 1);
            alert(`${eliminarAlimento} ha sido eliminado de la lista de compras.`);
        } else {
            alert("¡No fue posible encontrar el elemento en la lista!");
        }
    } else if (accion.toLowerCase() === "no") {
        break;
    } else if (accion.toLowerCase() === "eliminar" && listaDeCompras.length === 0) {
        alert("La lista de compras está vacía. No hay elementos para eliminar.");
    } else {
        alert("Por favor, responde con 'sí', 'no' o 'eliminar'.");
    }
}

alert("Lista de compras final: " + listaDeCompras.join(", "));
