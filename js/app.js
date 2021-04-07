const listadeNombres = [];

let cantidad = parseInt(prompt("Defini cantidad de elementos"));

for (let index = 0; index < cantidad; index++) {

    let nombre = prompt("Agrega un nombre");

    listadeNombres.push(nombre);
}


console.log("La longitud del array es: " + listadeNombres.length);
console.log("El array es: " + listadeNombres.toString());