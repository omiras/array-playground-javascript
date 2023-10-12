/**
 * Los Array, Arreglos, Vectores; juegan un papel clave en el desarrollo software https://www.w3schools.com/js/js_arrays.asp
 * 
 * Permiten agrupar un conjunto de valores en una variable
 */

 // un array con 4 razas de gatos
let razas_gatos = ['Siamés', 'Egipcio', "Vulgaris", 'Persa']
console.log(razas_gatos)

// Podemos acceder a la posición de un array mediante la notación nombreArray[posición]
// ES importante resaltar que los array, en JavaScript y en la mayoria de los lenguajes de programación, empiezan el la posición 0

//Va a evaluarse como 'Siamés'
console.log(razas_gatos[0])

//Esto se evalua como 'Persa'
console.log(razas_gatos[3])

// Podemos saber el tamaño de un Array con la propiedad .length
console.log("Tamaño del array: " + razas_gatos.length)

// Atención! Los Array pueden contener diferentes tipos de datos. 
// Imagina un array de 4 posiciones que contiene:
// Nombre de la persona, país de origen, edad, está casado o no
let info_humano = ["Max", "USA", 33, false]

// Incluso, un array puede contener..otros arrays!
let matriz = [[1,2,3], [4,5,6]]
console.log(matriz[0]) // Primer elemento del array 'matriz'
console.log(matriz[0][1]) // Segundo elemento del primer elemento del array ¡matriz'




