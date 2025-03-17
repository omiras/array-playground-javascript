/**
 * Recorrer arrays
 *
 * Una actividad muy común en programación es recorrer los arrays en busca de un elemento
 *
 * Añade un condicional if... que compruebe si, la variable "siguentePez" es "Nemo". Si es "Nemo" muestra por el terminal un mensaje: "He encontrado a Nemo!". En caso contrario, debe escribir "Este pez NO es Nemo!";
 *
 * Tu código debería escribir un total de 4 mensajes.
 */

let muchosPeces = ["Dory", "Nemo", "Shipho", "Estrella"];

for (let i = 0; i < muchosPeces.length; i++) {
  let siguientePez = muchosPeces[i];
  console.log("Pez siguiente: " + siguientePez);

  // Modifica SOLAMENTE a partir de aquí
  
  // Si siguientePez es Nemo, mostrar un mensaje diciendo que hemos encontrado a Nemo. En otro caso, mostrar un mensaje diciendo que no hemos encontrado a Nemo
  if (siguientePez == "Nemo") {
    console.log("He encontrado a Nemo!");
  } else {
    console.log("Este pez NO es Nemo!");
  }
}

/**
 * Resultado esperado: https://oscarm.tinytake.com/msc/ODc5NTE4Nl8yMjIxODUyNw
 */
