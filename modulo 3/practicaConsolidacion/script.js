// Clase que representa un producto individual
class Producto {
  constructor(nombre, precio) {
    this.nombreProducto = nombre;
    this.costo = precio;
  }
}

class CarritoDeCompras {
  constructor() {
    this.itemsEnCarrito = [];
  }

  agregarAlCarrito(item) {
    this.itemsEnCarrito.push(item);
    this.actualizarCarrito();
  }

  calcularCostoTotal() {
    return this.itemsEnCarrito.reduce(
      (acumulado, item) => acumulado + item.costo,
      0
    );
  }

  procesarCompra() {
    const total = this.calcularCostoTotal();
    alert(`Total a pagar: $${total}. ¡Gracias por su compra!`);
    this.itemsEnCarrito = [];
    this.actualizarCarrito();
  }

  actualizarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    listaCarrito.innerHTML = "";

    this.itemsEnCarrito.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `${item.nombreProducto}<span>$${item.costo}</span>`;
      listaCarrito.appendChild(li);
    });

    const totalElement = document.getElementById("total");
    totalElement.textContent = `Total: $${this.calcularCostoTotal()}`;
  }
}

function inicializarTienda() {
  const productos = [
    new Producto("Manzana", 500),
    new Producto("Pan", 1200),
    new Producto("Leche", 800),
    new Producto("Queso", 2500),
    new Producto("Café", 2500),
  ];

  const carritoDeCompras = new CarritoDeCompras();

  const listaProductos = document.getElementById("lista-productos");
  productos.forEach((producto) => {
    const li = document.createElement("li");
    li.innerHTML = `${producto.nombreProducto}<span>$${producto.costo}</span>`;
    li.addEventListener("click", () => {
      carritoDeCompras.agregarAlCarrito(producto);
    });
    listaProductos.appendChild(li);
  });

  const finalizarCompraBtn = document.getElementById("finalizar-compra");
  finalizarCompraBtn.addEventListener("click", () => {
    carritoDeCompras.procesarCompra();
  });
}

document.addEventListener("DOMContentLoaded", inicializarTienda);
