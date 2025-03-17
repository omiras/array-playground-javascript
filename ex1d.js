// Imaginar que este array representa la cola de un supermercado
let cola = []; // array vacío

// Varios clientes hacen cola a medida que lleguen a la caja
cola.push("Juan");
cola.push("María");
cola.push("Carlos");

console.log("Cola del supermercado: ", cola);

// En este punto la cajera o el cajero van a llamar a la siguiente persona. Obviamente le toca a "Juan" que era el primero que iba en la cola. ¿Qué método JavaScript podemos utilizar para eliminar el primer elemento de este array? Muestra tus resultados por consol.loge . Resultado esperado: https://oscarm.tinytake.com/media/173dbdd?filename=1742228755529_TinyTake17-03-2025-05-25-47_638778255552975975.png&sub_type=thumbnail_preview&type=attachment&width=798&height=110 

let turnoSiguiente = cola.shift();
console.log(`El siguiente en la cola es ${turnoSiguiente}. La cola ahora queda así: `, cola);

