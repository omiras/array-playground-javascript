/**
 * Los límites del array
 * 
 * Una de las cosas que más cuesta entender al comenzar programación, es que la primera posición del array, viene dada en realidad por la posición "cero".
 * 
 * A esta posición también se le llama "índice"
 * 
 * Así, lista_peces[0] nos da el primer pez
 * lista_peces[1] nos da el segundo pez
 * ..y así hasta el último.
 * 
 * La última posición de un array siempre es "el número de elementos menos uno"
 */

 /**
  * Ejecuta el siguiente código e intenta averiguar que está sucediendo. Porque el úñtimo mensaje dice "Pez siguiente: undefined?"
  */

let muchos_peces = ["Dory", "Nemo", "Shipho", "Estrella"]

for(let i=0; i<=muchos_peces.length; i++) {
    let siguiente_pez = muchos_peces[i]
    console.log("Pez siguiente: " + siguiente_pez)
}

