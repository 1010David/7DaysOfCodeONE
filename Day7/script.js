// script.js

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: No se puede dividir por cero";
    }
}

function mostrarMenu() {
    let mensaje = "Elige una operación:\n";
    mensaje += "1. Suma\n";
    mensaje += "2. Resta\n";
    mensaje += "3. Multiplicación\n";
    mensaje += "4. División\n";
    mensaje += "5. Salir\n";
    return mensaje;
}

function calcular() {
    let salir = false;

    while (!salir) {
        let opcion = parseInt(prompt(mostrarMenu()));
        
        if (opcion >= 1 && opcion <= 4) {
            let num1 = parseFloat(prompt("Ingresa el primer número:"));
            let num2 = parseFloat(prompt("Ingresa el segundo número:"));
            let resultado;

            switch (opcion) {
                case 1:
                    resultado = sumar(num1, num2);
                    break;
                case 2:
                    resultado = restar(num1, num2);
                    break;
                case 3:
                    resultado = multiplicar(num1, num2);
                    break;
                case 4:
                    resultado = dividir(num1, num2);
                    break;
            }

            alert("El resultado es: " + resultado);
        } else if (opcion === 5) {
            alert("Hasta la próxima");
            salir = true;
        } else {
            alert("Opción no válida, por favor intenta de nuevo.");
        }
    }
}

calcular();
