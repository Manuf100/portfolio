function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  const partes = fechaNacimiento.split("/"); // formato dd/mm/aaaa
  const nacimiento = new Date(`${partes[2]}-${partes[1]}-${partes[0]}`);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }

  return edad;
}

// Insertar la edad en el HTML
document.addEventListener("DOMContentLoaded", function() {
  const edad = calcularEdad("01/01/2004");
  document.getElementById("edad").textContent = edad;
});

