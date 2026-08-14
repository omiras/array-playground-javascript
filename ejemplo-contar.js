/** Contar ovejas */

const animales = ["🐶", "🐑", "🐱"];
let contadorOvejas = 0; 

for (let i = 0; i < animales.length; i++) {
    if (animales[i] == "🐑") {
        contadorOvejas++; // contadorOvejas = contadorOvejas + 1;
    }
}

console.log("Hay " + contadorOvejas + " ovejas");