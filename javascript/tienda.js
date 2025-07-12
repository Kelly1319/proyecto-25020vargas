document.querySelectorAll('.carrito').forEach(boton => {
  boton.addEventListener('click', e => {
    e.preventDefault();
    const id = parseInt(boton.dataset.id);
    actualizarCantidadProducto(id, 1);

    
    const producto = productos.find(p => p.id === id);
    if (producto) {
      alert(`Producto agregado: ${producto.nombre}`);
      console.log(`Producto agregado desde tienda: ${producto.nombre}`);
    }
  });
});

