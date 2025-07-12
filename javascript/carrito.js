const productos = [
  { id: 1, nombre: "Camisa", precio: 25000, descripcion: "camisa del deportivo tachira." },
  { id: 2, nombre: "Campera", precio: 70000, descripcion: "Campera del deportivo tachira" },
  { id: 3, nombre: "Camiseta", precio: 50000, descripcion: "Camisa de coleccion" },
  { id: 4, nombre: "Gorra", precio: 15000, descripcion: "Gorra negra" },
  { id: 5, nombre: "Guantes", precio: 20000, descripcion: "Guantes talle XL" }
];
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


function actualizarCantidadProducto(id, cantidad) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;

  const item = carrito.find(i => i.id === id);
  if (item) {
    item.cantidad += cantidad;
    if (item.cantidad <= 0) {
      carrito = carrito.filter(i => i.id !== id);
      console.log(` Producto eliminado: ${producto.nombre}`);
    } else {
      console.log(` Cantidad actualizada: ${producto.nombre} – Cantidad: ${item.cantidad}`);
    }
  } else if (cantidad > 0) {
    carrito.push({ ...producto, cantidad });
    console.log(` Producto agregado: ${producto.nombre} – Cantidad: ${cantidad}`);
  }

  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById('lista-carrito');
  const totalSpan = document.getElementById('total');
  if (!lista || !totalSpan) return;

  lista.innerHTML = '';
  if (carrito.length === 0) {
    lista.innerHTML = '<li>(Carrito vacío)</li>';
    totalSpan.textContent = '0';
    return;
  }

  let total = 0;
  carrito.forEach(item => {
    total += item.precio * item.cantidad;
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.nombre} – $${item.precio} x ${item.cantidad} = $${item.precio * item.cantidad}
      <button class="btn-restar" data-id="${item.id}">–</button>
      <button class="btn-sumar" data-id="${item.id}">+</button>
      <button class="btn-eliminar" data-id="${item.id}">Eliminar</button>
    `;
    lista.appendChild(li);
  });
  totalSpan.textContent = total;


  lista.querySelectorAll('.btn-sumar').forEach(btn => btn.onclick = () => actualizarCantidadProducto(+btn.dataset.id, 1));
  lista.querySelectorAll('.btn-restar').forEach(btn => btn.onclick = () => actualizarCantidadProducto(+btn.dataset.id, -1));
  lista.querySelectorAll('.btn-eliminar').forEach(btn => {
    btn.onclick = () => {
      carrito = carrito.filter(i => i.id !== +btn.dataset.id);
      console.log(`Producto eliminado: ID ${btn.dataset.id}`);
      localStorage.setItem('carrito', JSON.stringify(carrito));
      mostrarCarrito();
    };
  });
}

document.addEventListener('DOMContentLoaded', mostrarCarrito);