const vehiculos = [
    { id: 1, placa: "ABC123", modelo: "Toyota Corolla" },
    { id: 2, placa: "XYZ789", modelo: "Honda Civic" },
    { id: 3, placa: "LMN456", modelo: "Ford Focus" }
  ];
  
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const resultDiv = document.getElementById('result');
  
  searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim().toUpperCase(); 
    const vehiculo = vehiculos.find(item => item.placa === query);
  
    if (vehiculo) {
      resultDiv.className = "alert alert-success mt-3";
      resultDiv.textContent = `Vehículo encontrado: Modelo: ${vehiculo.modelo}, Placa: ${vehiculo.placa}`;
    } else {
      resultDiv.className = "alert alert-danger mt-3";
      resultDiv.textContent = "Vehículo no encontrado.";
    }
    resultDiv.classList.remove('d-none');
  });
  