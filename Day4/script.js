// Elige la versión del número (predefinido o aleatorio)
// Descomenta la versión que deseas usar

// Versión con número predefinido
const numeroPredefinido = 7;

// Versión con número aleatorio
// const numeroAleatorio = Math.floor(Math.random() * 11);

function jugar() {
    // Número máximo de intentos
    const maxIntentos = 3;
    let intentos = 0;
    let adivinado = false;

    while (intentos < maxIntentos && !adivinado) {
        // Solicita al usuario que adivine el número
        let adivinanza = parseInt(prompt("Adivina el número entre 0 y 10:"), 10);

        // Verifica si la entrada es un número y está en el rango permitido
        if (isNaN(adivinanza) || adivinanza < 0 || adivinanza > 10) {
            alert("Por favor, ingresa un número válido entre 0 y 10.");
            continue; // Pide otra adivinanza
        }

        // Compara la adivinanza con el número predefinido o aleatorio
        if (adivinanza === (numeroPredefinido || numeroAleatorio)) {
            alert("¡Felicidades! Has adivinado el número.");
            adivinado = true; // Finaliza el juego si se adivina el número
        } else {
            intentos++;
            if (intentos < maxIntentos) {
                alert(`Incorrecto. Te quedan ${maxIntentos - intentos} intentos.`);
            }
        }
    }

    // Muestra el número predefinido o aleatorio si no se adivina en el máximo de intentos
    if (!adivinado) {
        alert(`Lo siento, no has adivinado el número. El número era ${numeroPredefinido || numeroAleatorio}.`);
    }
}

// Inicia el juego
jugar();
