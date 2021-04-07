const objeto1 = { id: 1, precio: 5400, nombre: "Tira Asado"};
const objeto2 = { id: 2, precio: 540, nombre: "Pasta de diente"};
const objeto3 = { id: 3, precio: 140, nombre: "Fideos Marollio"};

let carrito = [objeto1, objeto2 ]; // Defino my array con dos elementos que son objetos.

carrito.push(objeto3); // hago push/agrego uno mas

for (let index = 0; index < carrito.length; index++) {
    const element = carrito[index];
    console.log(element);
}


for (const producto of carrito) {
    console.log(producto.id);
    console.log(producto.nombre);
    console.log(producto.precio);
}

