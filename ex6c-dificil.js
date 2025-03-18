/**
 * Detectar si hay al menos tres caramelos iguales seguidos en la fila
 * 
 * En Candy Crush, cuando hay tres caramelos seguidos del mismo tipo, desaparecen.
 * Dado un array de caramelos representados como emojis 🍬, devuelve true si hay al menos 
 * tres seguidos del mismo tipo, o false si no los hay.
 */

function hasThreeInARow(candies) {

    // Mi primer candidato es el primer elemento del array
    let carameloCandidato = candies[0];

    // Los caramelos deben aparecer si el mismo caramelo aparece en 3 posiciones consecutivas
    let numeroVecesEncontradoCarameloCandidato = 1;

    // Empiezo por la posición 2 del array para compararla con el caramelo que ya tengo
    let i=1;

    // ¿Cuando tengo trabajo por hacer? 
    // 1. Si no he llegado al final del array Y 
    // 2. Si ya he encontrado 3 veces seguidas el mismo caramelo
    while (i<candies.length && numeroVecesEncontradoCarameloCandidato!=3) {

        // ¿Es mi caramelo candidato igual al caramelo de esta nueva posición del array?
        if (carameloCandidato == candies[i]) {
            // he encontrado el mismo caramelo, incremento la variable
            numeroVecesEncontradoCarameloCandidato++;
        } else {
            // No es el mismo. Tengo que empezar de nuevo. Tenemos un nuevo caramelo candidato 
            numeroVecesEncontradoCarameloCandidato = 1;
            carameloCandidato = candies[i];
        }

        // incremento la variable de iteración porque tengo que considerar la siguiente posición del array
        i++;
    }

    // Si en este punto he encontrado 3 veces el mismo caramelo, puedo devolver un true, indicando que si existen 3 caramelos iguales consecutivos
    return numeroVecesEncontradoCarameloCandidato == 3;

}

// Ejemplo de uso:
console.log(hasThreeInARow(["🍬", "🍬", "🍬", "🍫", "🍭"])); // true -> Tres 🍬 seguidos
console.log(hasThreeInARow(["🍫", "🍬", "🍭", "🍭", "🍭"])); // true -> Tres 🍭 seguidos
console.log(hasThreeInARow(["🍬", "🍫", "🍭", "🍬", "🍫"])); // false -> No hay tres seguidos
console.log(hasThreeInARow(["🍬", "🍬", "🍬", "🍬", "🍬"])); // true -> Cinco 🍬 seguidos
console.log(hasThreeInARow(["🍫", "🍭", "🍬"])); // false -> No hay suficientes caramelos
console.log(hasThreeInARow([])); // false -> No hay caramelos en la fila