/**
 * Convertir los nombres de los jugadores a mayúsculas
 * 
 * En Mario Party, cuando un jugador gana una estrella, grita su nombre con emoción.
 * Dado un array de nombres de jugadores, devuelve un nuevo array donde todos los nombres están en mayúsculas.
 */

function shoutPlayerNames(players) {
    // 1. Creamos un array vacío donde guardaremos los nombres ya convertidos.
    // 2. Recorremos cada nombre con un bucle.
    // 3. Convertimos cada nombre a mayúsculas y lo añadimos al nuevo array.
    let arrayUpperCase = [];

    for (let i = 0; i < players.length; i++) {
        arrayUpperCase.push(players[i].toUpperCase());
    }

    return arrayUpperCase;
}

// Ejemplo de uso:
console.log(shoutPlayerNames(["Mario", "Luigi", "Peach"])); // ["MARIO", "LUIGI", "PEACH"]
console.log(shoutPlayerNames(["Bowser", "Yoshi", "Toad"])); // ["BOWSER", "YOSHI", "TOAD"]
console.log(shoutPlayerNames(["daisy", "wario", "waluigi"])); // ["DAISY", "WARIO", "WALUIGI"]
console.log(shoutPlayerNames(["rosalina"])); // ["ROSALINA"] -> Un solo jugador también grita
