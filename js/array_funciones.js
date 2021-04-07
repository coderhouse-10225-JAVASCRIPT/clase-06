let cantidadElementos = parseInt(prompt("defino la cantidad de elementos"));

const myArray = [];

for (let index = 0; index < cantidadElementos; index++) {
    let numero = parseInt(prompt("Ingrese numero"));

    myArray.push(numero);
    
}

let numeroABuscar= parseInt(prompt("Numero a buscar mayoreas a:"));

let myFuncion = (x) => x * 2;

console.log(myFuncion(200));


let myFuncionEsMayorA10 = x => x > 10;
console.log(myFuncionEsMayorA10(5));


let numerosEncontrado = myArray.find( x => x > numeroABuscar );
console.log(numerosEncontrado);