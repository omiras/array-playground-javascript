/** 
 * Buscar un pez en el mar.
 * 
 * Utiliza adecuadamente el método "includes" dentro de la función para buscar el pez 'fishToFind' en el banco de peces 'fishes'. Tu función debe devolver un true o un false
*/

function isFishHere(fishes, fishToFind) {

}

// Conjunto de pruebas para isFishHere

console.log(isFishHere(["Nemo", "Dory", "Marlin", "Bruce"], "Nemo")); // true  -> Nemo está en la lista
console.log(isFishHere(["Nemo", "Dory", "Marlin", "Bruce"], "Dory")); // true  -> Dory está en la lista
console.log(isFishHere(["Nemo", "Dory", "Marlin", "Bruce"], "Marlin")); // true  -> Marlin está en la lista
console.log(isFishHere(["Nemo", "Dory", "Marlin", "Bruce"], "Bruce")); // true  -> Bruce está en la lista (aunque es un tiburón)
console.log(isFishHere(["Nemo", "Dory", "Marlin", "Bruce"], "Flounder")); // false -> Flounder (de La Sirenita) no está en la lista
console.log(isFishHere(["Flounder", "Sebastian", "Scuttle"], "Flounder")); // true  -> Flounder está en la lista
console.log(isFishHere(["Flounder", "Sebastian", "Scuttle"], "Dory")); // false -> Dory no está en la lista
console.log(isFishHere(["Nemo", "Dory", "Marlin"], "nemo")); // false -> Diferencia entre mayúsculas y minúsculas, "nemo" no es igual a "Nemo"


