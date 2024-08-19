# Reto Día 4: Juego de Adivinanza de Números

## Descripción

En este ejercicio, el usuario participa en un juego de adivinanza de números. El objetivo es adivinar un número dentro de un rango específico en un número limitado de intentos. El juego puede utilizar un número predefinido o un número aleatorio, dependiendo de la versión del código que elijas.

## Archivos del Proyecto

1. **`index.html`**: Contiene la estructura básica de la página web y enlaza el archivo JavaScript.

2. **`script.js`**: Contiene la lógica del juego de adivinanza de números.

### `index.html`

Este archivo HTML:
- Define la estructura básica de la página.
- Enlaza al archivo JavaScript `script.js`.

### `script.js`

Este archivo JavaScript:
- Permite al usuario adivinar un número entre 0 y 10 en un número limitado de intentos (3 intentos por defecto).
- Ofrece dos versiones para el número a adivinar: una versión con un número predefinido y otra con un número aleatorio.
- Valida la entrada del usuario para asegurar que es un número dentro del rango permitido.
- Notifica al usuario si adivina el número o si se queda sin intentos.

#### Funcionalidad

- **Número Predefinido**: La variable `numeroPredefinido` establece un número fijo que el usuario debe adivinar.
- **Número Aleatorio**: La variable `numeroAleatorio` se puede usar para generar un número aleatorio entre 0 y 10. Esta versión está comentada y se puede descomentar para usarla.

#### Instrucciones para Ejecutar

1. Abre el archivo `index.html` en tu navegador.
2. Juega adivinando el número que se debe adivinar. Puedes cambiar la versión del número (predefinido o aleatorio) descomentando la línea correspondiente en el archivo `script.js`.
3. Intenta adivinar el número en el número máximo de intentos permitidos (3 intentos).

## Objetivos

- Practicar el uso de `prompt` para interactuar con el usuario y obtener datos.
- Implementar lógica de control de flujo utilizando `while` y `if-else`.
- Validar entradas del usuario para asegurar que estén dentro del rango permitido.
- Utilizar funciones para organizar el código y mejorar la modularidad.
- Familiarizarse con la generación de números aleatorios y la manipulación de variables en JavaScript.
