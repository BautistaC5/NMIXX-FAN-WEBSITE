const productos = [
    { nombre: "AD MARE", precio: 8000, stock: 5 },
    { nombre: "ENTWURF", precio: 8000, stock: 5 },
    { nombre: "expérgo", precio: 8000, stock: 5 },
    { nombre: "Kyujin Digipack Ver.", precio: 4000, stock: 2 },
    { nombre: "Sullyoon Digipack Ver.", precio: 4000, stock: 1 },
    { nombre: "Haewon Digipack Ver.", precio: 4000, stock: 3 },
    { nombre: "MIXXPEDIA: PICK LA 1st PhotoBook", precio: 12000, stock: 1 }
];

let carrito = [];

const agregarBtn = document.querySelectorAll(".agregarBtn");
const carritoProductos = document.querySelector(".carritoProductos");
const totalSpan = document.getElementById("total");
const pagarBtn = document.getElementById("pagarBtn");
const vaciarBtn = document.getElementById("vaciarBtn")
let carritoContador = document.getElementById("carritoContador")
let carritoSVG = document.getElementById("SVG")

agregarBtn.forEach((boton) => {
    boton.addEventListener("click", () => {
        let producto = productos.find(
            (p) => p.nombre === boton.parentElement.querySelector("h3").textContent
        );

        if (producto.stock > 0) {
            producto.stock--;
            carrito.push(producto);
            mostrarCarrito();
            calcularTotal();
        } else {
            alert("No hay stock disponible para este producto.");
        }
    });
});


vaciarBtn.addEventListener("click", () => {
    vaciarCarrito()
    mostrarCarrito()
})

function vaciarCarrito() {
    carrito.forEach((productoCarrito) => {
        let index = productos.findIndex((producto) => producto.nombre === productoCarrito.nombre)
        if (index !== -1) {
            productos[index].stock += 1
        }
    })

    carrito = []
    totalSpan.textContent = 0
}

function quitarDelCarrito(nombre) {
    let index = carrito.findIndex((p) => p.nombre === nombre);

    if (index !== -1) {
        carrito.splice(index, 1);
        const producto = productos.find((p) => p.nombre === nombre);
        producto.stock++;
        mostrarCarrito();
        calcularTotal();
    }
}

function mostrarCarrito() {
    carritoProductos.innerHTML = "";

    const productosAgrupados = carrito.reduce((agrupados, producto) => {
        if (!agrupados[producto.nombre]) {
            agrupados[producto.nombre] = {
                ...producto,
                unidades: 1
            };
        } else {
            agrupados[producto.nombre].unidades++;
        }
        return agrupados;
    }, {});

    for (const nombreProducto in productosAgrupados) {
        const producto = productosAgrupados[nombreProducto];
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("carrito-item");
        productoDiv.innerHTML = `
        <p>${producto.nombre} (${producto.unidades} unidades)</p>
        <p class="carrito-precio">$${producto.precio}</p>
        <button class="quitarBtn">Quitar</button>
    `;

        const quitarBtn = productoDiv.querySelector(".quitarBtn");
        quitarBtn.addEventListener("click", () => quitarDelCarrito(producto.nombre));

        carritoProductos.appendChild(productoDiv);
    }

    if (carrito.length > 0) {
        vaciarBtn.style.display = "block";
        carritoContador.style.display = "block"
        carritoContador.textContent = `${carrito.length}`
        carritoSVG.style.display = "none"
    } else {
        vaciarBtn.style.display = "none";
        carritoContador.style.display = "none"
        carritoSVG.style.display = "inline-block"
    }
}

function calcularTotal() {
    const total = carrito.reduce((acumulador, producto) => {
        return acumulador + producto.precio;
    }, 0);
    totalSpan.textContent = total;
}

// Llamar a la función mostrarCarrito al cargar la página
mostrarCarrito();

const carritoBtn = document.getElementById("carritoBtn");
const carritoContainer = document.getElementById("carritoContainer");

carritoBtn.addEventListener("click", () => {
    carritoContainer.classList.toggle("open");
});

