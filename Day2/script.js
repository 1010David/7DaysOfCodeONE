// Pedir al usuario su nombre, edad y lenguaje de programación
const nombre = prompt("¿Cuál es tu nombre?");
const edad = prompt("¿Cuántos años tienes?");
const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

// Mostrar el mensaje personalizado
const mensaje = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`;
alert(mensaje);

// Ejercicio Opcional: Preguntar si le gusta estudiar el lenguaje
const gustaLenguaje = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);

// Mostrar un mensaje adicional dependiendo de la respuesta
if (gustaLenguaje == 1) {
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else if (gustaLenguaje == 2) {
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
} else {
    alert("Respuesta no válida. Debes responder con 1 o 2.");
}
