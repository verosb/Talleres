const empleados = [
    {
      id: 1,
      nombre: "Ana Martínez",
      puesto: "Desarrolladora Web",
      salario: 3500.00,
      ubicacion: "Bogotá"
    },
    {
      id: 2,
      nombre: "Carlos López",
      puesto: "Diseñador Gráfico",
      salario: 3200.00,
      ubicacion: "Medellín"
    },
    {
      id: 3,
      nombre: "Laura Rodríguez",
      puesto: "Gerente de Proyecto",
      salario: 5000.00,
      ubicacion: "Cali"
    }
  ];
  
  const employeeSelect = document.getElementById('employeeSelect');
  const employeeSalary = document.getElementById('employeeSalary');
  const employeePosition = document.getElementById('employeePosition');
  const employeeLocation = document.getElementById('employeeLocation');
  
  empleados.forEach(empleado => {
    const option = document.createElement('option');
    option.value = empleado.id;
    option.textContent = empleado.nombre;
    employeeSelect.appendChild(option);
  });
  
  employeeSelect.addEventListener('change', () => {
    const selectedId = parseInt(employeeSelect.value);
    const empleado = empleados.find(emp => emp.id === selectedId);
  
    if (empleado) {
      employeeSalary.textContent = `$${empleado.salario.toFixed(2)}`;
      employeePosition.textContent = empleado.puesto;
      employeeLocation.textContent = empleado.ubicacion;
    } else {
      employeeSalary.textContent = 'N/A';
      employeePosition.textContent = 'N/A';
      employeeLocation.textContent = 'N/A';
    }
  });
  