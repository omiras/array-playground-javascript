/**
 * Detectar si hay al menos tres caramelos iguales seguidos en la fila
 * 
 * En Candy Crush, cuando hay tres caramelos seguidos del mismo tipo, desaparecen.
 * Dado un array de caramelos representados como emojis 🍬, devuelve true si hay al menos 
 * tres seguidos del mismo tipo, o false si no los hay.
 */

function hasThreeInARow(candies) {
    // RECUERDA: PRIMERO escribe lo que hay que hacer con tus palabras. Luego, viene el código

}

// Ejemplo de uso:
console.log(hasThreeInARow(["🍬", "🍬", "🍬", "🍫", "🍭"])); // true -> Tres 🍬 seguidos
console.log(hasThreeInARow(["🍫", "🍬", "🍭", "🍭", "🍭"])); // true -> Tres 🍭 seguidos
console.log(hasThreeInARow(["🍬", "🍫", "🍭", "🍬", "🍫"])); // false -> No hay tres seguidos
console.log(hasThreeInARow(["🍬", "🍬", "🍬", "🍬", "🍬"])); // true -> Cinco 🍬 seguidos
console.log(hasThreeInARow(["🍫", "🍭", "🍬"])); // false -> No hay suficientes caramelos
console.log(hasThreeInARow([])); // false -> No hay caramelos en la fila