const listadeNombres = [];

let cantidad = parseInt(prompt("Defini cantidad de elementos"));

for (let index = 0; index < cantidad; index++) {

    let nombre = prompt("Agrega un nombre");

    listadeNombres.push(nombre);

}


console.log("La longitud del array es: " + listadeNombres.length);
console.log("El array es: " + listadeNombres.toString());

let primerElemento = listadeNombres.slice(0,1);
let ultimoElemento = listadeNombres.slice(listadeNombres.length-1);

console.log("El primer elemento del array es: " + primerElemento);
console.log("El ultimo elemento del array es: " + ultimoElemento);

console.log("La longitud del array es: " + listadeNombres.length);


let nuevaLista = listadeNombres.concat(primerElemento);

console.log("El nuevo array es: " + nuevaLista.toString());

let index = 0;
let indexEnd = listadeNombres.length-1;
do {
    const element = listadeNombres[index];
    const elementEnd = listadeNombres[indexEnd];

    index+=1;
    indexEnd-=1;

    console.log(element);
    console.log(elementEnd);

} while (index < listadeNombres.length);
    
 