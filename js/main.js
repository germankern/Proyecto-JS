function textoConListadoDeProductos() {
    let texto = ""
    for (let i = 0; i < productos.length; i++){
        texto 
            += i + 1
            + " - " + productos[i].nombre
            + " ($" + productos[i].precio + ")\n"
    }
    return texto
}

function preguntarQueQuiereComprar() {
    let respuesta
    const listadoDeOpciones = textoConListadoDeProductos()
    const pregunta = "Que te interesa comprar?\n" + listadoDeOpciones + "0 - Ir al carrito"
    do {
        respuesta = Number(prompt(pregunta))
        if (isNaN(respuesta) || respuesta > productos.length ) {
            alert("Ingrese una opcion valida")
        }
    } while(isNaN(respuesta))
    return productos[respuesta - 1]
}

function preguntarCantidad() {
    let cantidad
    do {
        cantidad = Number(prompt("Que cantidad quiere comprar"))
        if (isNaN(cantidad)) {
            alert("Ingrese un numero valido")
        }
    } while(isNaN(cantidad))
    return cantidad
}


function cargarProducto() {
    // Preguntar al usuario que quiere comprar y darle las opciones, la primera opcion es salir
    const respuesta = preguntarQueQuiereComprar()
    // si la respuesta es uno de los productos tiene que ir al siguiente paso
    if (respuesta) {
        // Preguntar la cantidad a comrpar de ese producto
        const cantidad = preguntarCantidad()
        // Agrega producto y cantidad al carrito
        const nuevaCompra = {
            producto: respuesta,
            cantidad: cantidad
        }
        carrito.push(nuevaCompra)
    }
    return respuesta
}

function generarTextoDelCarrito() {
    let texto = ""
    for (let i = 0; i < carrito.length; i++){
        texto 
            += carrito[i].cantidad
            + " x "
            + carrito[i].producto.nombre
            + " ($"
            + carrito[i].producto.precio
            +")\n"
    }
    return texto
}

function optenerTotal() {
    let total = 0
    for (let i = 0; i < carrito.length; i++){
        total += carrito[i].cantidad * carrito[i].producto.precio
    }
    return total
}


// Aca comienza a correr el codigo
const productos = [
    {
        id: 1,
        nombre: "Mesa gamer",
        precio: 2500
    },
    {
        id: 2,
        nombre: "Mouse gamer",
        precio: 500
    },
    {
        id: 3,
        nombre: "Impresora",
        precio: 1900
    },
    {
        id: 4,
        nombre: "Procesador",
        precio: 2500
    }, 
]

const carrito = []

// Cargar producto 
let respuesta
do {
    respuesta = cargarProducto()
} while (respuesta)

// Mostrar Carrito
const textoCarrito = generarTextoDelCarrito()
const total = optenerTotal()

alert("Tu carrito es:\n" + textoCarrito + "El total es: $" + total)


