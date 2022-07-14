// VARIABLES
let carrito;
let subtotalCompra;
let subtotalImpuestos;
let total = 0;
let compraFinal = [];
const impuesto = 1.21;


class Producto {
    constructor(nombre, precio, cantidades){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidades = cantidades;
    }
}

const productos = 
[{nombre:"SMARTPHONE",precio:600},
{nombre:"TABLET",precio:300},
{nombre:"SPEAKER",precio:200},
{nombre:"SMARTTV",precio:500},
];

// FUNCIONES

function seleccion(productos, busqueda) {
    carrito = productos.filter(item => item.nombre === busqueda);
    return carrito;
}

function subtotal(carrito,cantidad) {
    carrito.forEach(element => {
        return  subtotalCompra = element.precio*cantidad
    });
    
}
function impuestos(subtotalCompra,impuesto) {
    subtotalImpuestos = subtotalCompra*impuesto
}
function carroFinal(busqueda,subtotalCompra,cantidad) {
    compraF = new Producto(busqueda,subtotalCompra,cantidad)
    compraFinal.push(compraF)
    return compraFinal
}

// CICLOS

for (let index = 0; index < Number.MAX_SAFE_INTEGER; index++) {
    let busqueda = prompt("INGRESE LO QUE DESEA COMPRAR \n SMARTPHONE \n TABLET \n SPEAKER \n SMARTTV \n EXIT").toUpperCase();
    seleccion(productos,busqueda)
    if (busqueda == "EXIT") {
        break
    }
    
    let cantidad = parseInt(prompt("CANTIDAD DEL PRODUCTO"))
    subtotal(carrito,cantidad)
    let facturado = parseInt(prompt("INGRESE: \n 1 - FACTURADO \n 2 - SIN FACTURAR"));
    for (let index = 0; index < Number.MAX_SAFE_INTEGER; index++) {
        if (facturado == 1) {
            impuestos(subtotalCompra,impuesto)
            total += subtotalImpuestos
            break
        }else if (facturado == 2) {
            total += subtotalCompra
            break
        }else {
            facturado = parseInt(prompt("INGRESE: \n 1 - FACTURADO \n 2 - SIN FACTURAR"))
        }
        
    }
    carroFinal(busqueda,subtotalCompra,cantidad);
    console.log(compraFinal);
    
    
}

console.log(`Este es el total con los impuestos incluidos si decidio facturarlo: ${total}`);