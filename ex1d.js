// Imaginar que este array representa la cola de un supermercado
let cola = [];

// Varios clientes hacen cola a medida que lleguen a la caja
cola.push("Juan");
cola.push("María");
cola.push("Carlos");

console.log("Cola del supermercado: ", cola);

// En este punto la cajera o el cajero van a llamar a la siguiente persona. Obviamente le toca a "Juan" que era el primero que iba en la cola. ¿Qué método JavaScript podemos utilizar para eliminar el primer elemento de este array? Muestra tus resultados por console.log

let turno = cola.shift();
console.log(`Ahora le toca a ${turno}`);
console.log(`Cola del supermercado tras atender a ${turno}: ${cola}`);