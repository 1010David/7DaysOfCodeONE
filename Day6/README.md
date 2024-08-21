# Reto Día 6: Gestión Dinámica de la Lista de Compras

## Descripción

En este ejercicio, se expande la funcionalidad del programa de lista de compras creado anteriormente. Ahora, además de agregar elementos a la lista de compras, el usuario puede eliminar elementos específicos. El programa también manejará los intentos de eliminar elementos que no existen en la lista, informando al usuario si el ítem no fue encontrado.

## Archivos del Proyecto

1. **`index.html`**: Contiene la estructura básica de la página web y enlaza el archivo JavaScript.

2. **`script.js`**: Contiene la lógica del programa que maneja la adición y eliminación de elementos de la lista de compras.

### `index.html`

Este archivo HTML:
- Define la estructura básica de la página.
- Enlaza al archivo JavaScript `script.js`.

### `script.js`

Este archivo JavaScript:
- Permite al usuario agregar elementos a la lista de compras.
- Proporciona una opción para eliminar elementos de la lista si ya existen.
- Verifica si un elemento está presente en la lista antes de eliminarlo, mostrando un mensaje en caso de que no se encuentre.
- Imprime la lista actualizada de elementos después de cada operación.

## Instrucciones para Ejecutar

1. Abre el archivo `index.html` en tu navegador.
2. Sigue las instrucciones en pantalla para agregar o eliminar alimentos de tu lista de compras.
3. La lista se actualizará dinámicamente según las acciones realizadas por el usuario.

## Objetivos

- Practicar la manipulación de arrays en JavaScript, incluyendo la eliminación de elementos.
- Implementar controles de flujo (`if`, `else`) para verificar la existencia de elementos antes de eliminarlos.
- Fortalecer la comprensión de los métodos de arrays como `push()`, `splice()`, y `indexOf()`.
- Mejorar la interacción del usuario con el programa mediante mensajes claros y funcionalidad adicional.

