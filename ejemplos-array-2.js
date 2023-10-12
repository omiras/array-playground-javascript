// Iterar en un array

// En programación es muy habitual iterar sobre el contenido de un array:
// 1. Para buscar un valor en concreto...
// 2. Para modificar cada elemento del array...

// En el siguiente ejemplo, iteramos el array 'razas_gatos'. 
// Analicemos el bucloe:

// Contador inicial: let i = 0
// Incremento: i++
// Condición de fin: i<razas_gatos.length. En este caso, cuando y llegue a 4, pasará que 4<4 == false; y dejaremos de ejecutar el bucle

let razas_gatos = ['Siamés', 'Egipcio', "Vulgaris", 'Persa']

for (let i=0; i<razas_gatos.length; i++) {
    console.log(razas_gatos[i]) // En la primera iterazión, accedemos a razas_gatos[0]. En la segundam a razas_gatos[1].... así hasta razas_gatos[3]
}