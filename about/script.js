function abrirPresentacion() {
    // Crea un elemento iframe para la presentación
    const iframe = document.createElement('iframe');
    iframe.src = "https://docs.google.com/presentation/d/e/2PACX-1vT9YvFzUXZAhIRHmzYlSxINQcufKZp8QzL85YL32k3qpfVzIkE1jZ17bdvXhpSWp856vo2ZVSVWctay/embed?start=false&loop=false&delayms=3000";
    iframe.frameborder = "0";
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.allowfullscreen = "true";
  
    // Crea un div para contener la presentación
    const divPresentacion = document.createElement('div');
    divPresentacion.id = "presentacion";
    divPresentacion.appendChild(iframe);
  
    // Agrega el div a la página y muestra la presentación
    document.body.appendChild(divPresentacion);
    divPresentacion.style.display = "block";
  
    // Oculta el botón
    const botonPresentacion = document.getElementById("boton-presentacion");
    botonPresentacion.style.display = "none";
  }
  