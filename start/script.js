function irAPagina() {
  // Cambia "nueva_pagina.html" por la URL de la página a la que deseas redirigir
  window.location.href = "../index.html";
}

function moverFlecha(activar) {
  const flecha = document.querySelector('.flecha-flotante');
  if (activar) {
    flecha.classList.add('flecha-movimiento');
  } else {
    flecha.classList.remove('flecha-movimiento');
  }
}
  