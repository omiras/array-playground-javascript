/**
 * Dado el array de reyes magos
 */

let reyesMagos = ["Melchor", "Baltasar", "Gaspar"];

/**
 * Modifica el array a partír de sus índices para obtener el orden adecuado de los reyes magos. Mira esta ayuda: https://chatgpt.com/c/6a7186a3-20a8-83eb-8f27-86d86ab86c98
 */

// Tú código de partir de aquí
let temp = reyesMagos[1];
reyesMagos[1] = reyesMagos[2];
reyesMagos[2] = temp;

console.log(reyesMagos); // ["Melchor", "Gaspar", "Baltasar"]
