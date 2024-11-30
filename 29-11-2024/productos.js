const productos = [
    {
      id: 1,
      nombre: "PRODUCTO A",
      precio: 19.99,
      disponibilidad: true
    },
    {
      id: 2,
      nombre: "PRODUCTO B",
      precio: 29.99,
      disponibilidad: false
    },
    {
      id: 3,
      nombre: "PRODUCTO C",
      precio: 24.99,
      disponibilidad: true
    }
  ];
  
  const productSelect = document.getElementById('productSelect');
  const productPrice = document.getElementById('productPrice');
  
  productos.forEach(producto => {
    if (producto.disponibilidad) {
      const option = document.createElement('option');
      option.value = producto.precio; 
      option.textContent = producto.nombre;
      productSelect.appendChild(option);
    }
  });
  
  productSelect.addEventListener('change', () => {
    const precio = productSelect.value;
    productPrice.value = precio ? `$${parseFloat(precio).toFixed(2)}` : '';
  });
  
  limpiarBtn.addEventListener('click', () => {
    productSelect.value = "Seleccione un producto";
    productPrice.value = "";
});