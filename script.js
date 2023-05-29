function generarPiramide() {
  const numero = parseInt(prompt("Ingrese un número:"));

  // Validar si el número ingresado es válido
  if (isNaN(numero) || numero <= 0) {
    alert("El número ingresado no es válido.");
    return;
  }

  let piramide = "";
  for (let i = numero; i >= 1; i--) {
    piramide += i.toString().repeat(i) + "<br>";
  }

  document.getElementById("pyramid").innerHTML = piramide;
}

generarPiramide();
