/**
 * Contar cuántas veces salió un 6 en los dados
 * 
 * En Mario Party, los jugadores lanzan un dado del 1 al 6. 
 * Dado un array con los resultados de varios lanzamientos, devuelve cuántas veces salió un 6.
 */

function countSixes(rolls) {
    // 1. Empezamos con un contador a 0.
    // 2. Recorremos todos los lanzamientos con un bucle.
    // 3. Si el valor actual es 6, aumentamos el contador.
    // 4. Al final devolvemos el número total de 6.
    let count = 0;

    for (let i = 0; i < rolls.length; i++) {
        if (rolls[i] === 6) {
            count++;
        }
    }

    return count;
}

// Ejemplo de uso:
console.log(countSixes([1, 2, 6, 4, 6, 5])); // 2 -> Salieron dos 6
console.log(countSixes([6, 6, 6, 6, 6]));   // 5 -> Todos fueron 6
console.log(countSixes([1, 2, 3, 4, 5]));   // 0 -> No salió ningún 6
console.log(countSixes([6, 3, 6, 6, 2]));   // 3 -> Hay tres veces el número 6