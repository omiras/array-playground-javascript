let numeros = [1, 20, -10, 3, 0, 30, - 1, 3, - 7];

//console.log(numeros[0]);  // posicióm i-esima del array

// foreach. Recibe como parámetro uan función de callback. La función se invoca tantas veces como elementos tiene el array.
// Cuando necesitamos iterar por TODOS los elementos del array, el foreach es el método más adecuado

// numeros.forEach((x)=>{
//     console.log(x);
// });

// Equivalente:
// for (let i=0; i<numeros.length;i++) {
//     console.log(numeros[i]);
// }

//filter https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// Usaré el método filter para quedarme con todos los números que sean positivos (numero > 0 )
let positivos = numeros.filter((x) => {
    // si hacemos un return que devuelva una expresión boleana cierta, se va a quedar con ese elemento del array

    // si el return devuelve una expresión boleana falsa, NO se va a quedar con ese elemento para añadir al nuevo array
    return x > 0;
})

// Filter tiene una función ES6 con un return implicito
// La expresión boleana tiene que estar en una línia y no puede haber instruccion adicionales ni {}
let positivosES6 = numeros.filter(x => x > 0);

// console.log(positivos);
// console.log(positivosES6);


//map.https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map

let nombres = ['Oscar', 'Max', 'Ana', 'Pepe', 'Pau', 'Vanessa', 'Xavi'];

// Utilizo map para saludar a cada una de estas personas
let saludos = nombres.map((nombre) => {
    return 'Hola ' + nombre;
})

//  console.log(nombres);
// console.log(saludos);

let caracteresCadaNombre = nombres.map((nombre) => {
    return nombre.length;
})

// console.log(caracteresCadaNombre)

// sort
// Queremos ordenar el array de menor a mayor número 
numeros.sort((a, b) => {
    if (a > b) { // a=5, b=1
        return 1; // Te digo que el elemento A es mayor que el elemento B
    }

    if (a < b) { // a=-10, b=-7
        return -1; // TE digo que el elemento A es menor que el elemento B
    }

    return 0;

});
//console.log(numeros)

// voy a ordenar los nombres por tamaño del nombre. Quiero ordenarlo
// de nombres más cortos primeros, y lo más largos, al final del array

nombres.sort((a, b) => {

    // console.log('Elemento A a comparar:', a);
    // console.log('Elemento B a comparar:', b);
    // console.log('==========================')
    if (a.length > b.length) {
        return 1; // Te digo que el elemento A es mayor que el elemento B 
    }

    if (a.length < b.length) { //'ana', 'fermin'
        return -1; // Te digo que elemento B es mayor que el elemento A
    }

    return 0;
})

// console.log(nombres);

let usuarios = [{
    nombre: 'Pepe',
    edad: 30
}, {
    nombre: 'Maria',
    edad: 45
}, {
    nombre: "Paco",
    edad: 19
}]

// ordenemos el array de usuarios por edad, de manera creciente.
// console.log(usuarios);

usuarios.sort( (a,b) => {
    if (a.edad>b.edad){
        return 1;
    }

    if (a.edad<b.edad) {
        return -1;
    }

    return 0;
})

// console.log(usuarios);

// methodo reduce. 
// Quiero usar el metodo reduce para obtener la suma de todo el array de numeros
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
let numerosPeque = [1, 2, 3];
const sumaNumeros = numerosPeque.reduce( (acumulador, siguienteValor)=>{
        return acumulador + siguienteValor;
})

console.log(sumaNumeros)