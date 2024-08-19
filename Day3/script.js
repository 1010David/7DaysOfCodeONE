// Función principal para manejar el flujo del juego
function juego() {
    // Elegir el área de interés
    const area = prompt('Elige 1 para Front-End o 2 para Back-End:');
    
    if (area === '1') {
        manejarFrontEnd();
    } else if (area === '2') {
        manejarBackEnd();
    } else {
        alert('Opción no válida. Por favor, elige 1 o 2.');
        juego(); // Repetir el juego si la opción es inválida
    }
}

// Función para manejar la selección de Front-End
function manejarFrontEnd() {
    const tecnologia = prompt('Elige 1 para aprender React o 2 para aprender Vue:');
    
    if (tecnologia === '1') {
        alert('¡Genial! Aprender React te dará muchas oportunidades en el desarrollo Front-End.');
    } else if (tecnologia === '2') {
        alert('¡Perfecto! Vue es un gran marco para construir aplicaciones interactivas.');
    } else {
        alert('Opción no válida. Por favor, elige 1 o 2.');
        manejarFrontEnd(); // Repetir la selección si la opción es inválida
        return; // Salir de la función actual para evitar la siguiente pregunta
    }
    
    manejarEspecializacion();
}

// Función para manejar la selección de Back-End
function manejarBackEnd() {
    const tecnologia = prompt('Elige 1 para aprender C# o 2 para aprender Java:');
    
    if (tecnologia === '1') {
        alert('¡Excelente elección! C# es muy utilizado en aplicaciones de Windows y en el desarrollo de juegos.');
    } else if (tecnologia === '2') {
        alert('¡Gran elección! Java es ampliamente utilizado en aplicaciones empresariales y móviles.');
    } else {
        alert('Opción no válida. Por favor, elige 1 o 2.');
        manejarBackEnd(); // Repetir la selección si la opción es inválida
        return; // Salir de la función actual para evitar la siguiente pregunta
    }
    
    manejarEspecializacion();
}

// Función para manejar la especialización
function manejarEspecializacion() {
    const especializacion = prompt('Elige 1 para seguir especializándote en el área o 2 para convertirte en Fullstack:');
    
    if (especializacion === '1') {
        alert('¡Perfecto! Continúa profundizando tus conocimientos en el área elegida.');
    } else if (especializacion === '2') {
        alert('¡Gran decisión! Convertirse en Fullstack te dará una visión completa del desarrollo.');
    } else {
        alert('Opción no válida. Por favor, elige 1 o 2.');
        manejarEspecializacion(); // Repetir la selección si la opción es inválida
        return; // Salir de la función actual para evitar la siguiente pregunta
    }
    
    preguntarTecnologias();
}

// Función para preguntar por tecnologías adicionales
function preguntarTecnologias() {
    const tecnologias = [];
    let tecnologia = prompt('¿Qué tecnología adicional te gustaría aprender? (Deja en blanco para finalizar)');
    
    while (tecnologia !== '') {
        if (tecnologia) {
            tecnologias.push(tecnologia);
            alert(`¡Genial! Has añadido ${tecnologia} a tu lista de tecnologías.`);
        }
        
        tecnologia = prompt('¿Qué otra tecnología te gustaría aprender? (Deja en blanco para finalizar)');
    }
    
    mostrarTecnologias(tecnologias);
}

// Función para mostrar las tecnologías ingresadas
function mostrarTecnologias(tecnologias) {
    if (tecnologias.length > 0) {
        alert(`¡Gracias por participar! Las tecnologías que has escogido son: ${tecnologias.join(', ')}.`);
    } else {
        alert('No has escogido ninguna tecnología adicional.');
    }
}

// Iniciar el juego
juego();
