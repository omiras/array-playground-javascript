/**
 * Poniéndolo todo junto
 */

/**
 * Ejecuta el código.
 * La variable 'pezEncontrado' acabará valiendo true si encontramos 
 * Sin embargo devuelve false. 
 *
 * Hay un error lógico que hace que el código no funcione como esperamos, puesto que "Estrella" SI está en el array de peces
 *
 * Pon "chivatos" en el código para aydarte a averiguar que está sucediendo; o usa el depurador de Visual Studio para ejecutar el código paso a paso
 */


let listaPeces = ["Dory", "Nemo", "Shipho", "Estrella"];
let pezBuscado = "Estrella";
let pezEncontrado = false;
let i = 0;

while (!pezEncontrado && i < listaPeces.length - 1) {
  if (listaPeces[i] == pezBuscado) {
    pezEncontrado = true;
  }
  i++;
}

console.log("He encontrado al pez?: " + pezEncontrado);
