// métodos de los array

// Para añadir un elemento al array, utilizamos el método(función) push

let razas_gatos = ['Siamés', 'Egipcio', "Vulgaris", 'Persa']

razas_gatos.push('Bengala')
razas_gatos.push('Abisinio')

console.log("Push:", razas_gatos)

// Para eliminar el último elemento del array, el método 'pop'
razas_gatos.pop()
console.log("Pop", razas_gatos)

// El método 'splice' nos permite elegir que elemento del array queremos eliminar
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(1, 1);        // Removes the second element of fruits
console.log("Frutas:", fruits)
// Más métodos de manipulación de Array
// https://www.w3schools.com/js/js_array_methods.asp

