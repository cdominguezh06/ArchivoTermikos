window.onload = onSubmit;
(document.getElementById("ciudad-hablar")).addEventListener("click", () => {
  const texto = "La ";
  decirCiudad(texto);
});

function decirCiudad(texto) {
  //Ciudad
  var ciudad = document.getElementById("city").textContent;
//FECHA
const fechaUser = document.getElementById("date").textContent;
// Dividir la fecha y la hora
const fechaSplit = fechaUser.split("/");
const fecha = [fechaSplit[1], fechaSplit[0], fechaSplit[2]];
// Extraer solo el día de la fecha
// Formatear la hora
const fechaLegible = new Date(fecha).toLocaleDateString("es-ES");
 //temperatura
 var temperatura = document.getElementById("temp").textContent;
 var numero = temperatura;
 var textoTemperatura = numero.toLocaleString("es-ES");
  //humedad
  var humedad = document.getElementById("humedad").textContent;
  var numero = humedad;
  var textohumedad = numero.toLocaleString("es-ES");
  console.log(textohumedad); // Salida: "veinticinco"*/
//DATOS
var datos = document.getElementById("weather").textContent

     if (texto && texto.length > 0) {
         var utterance = new SpeechSynthesisUtterance(
      texto + "ciudad es " + " " + ciudad
    );
    var utterance2 = new SpeechSynthesisUtterance(
      "La última actualización ha sido el " +
        fechaLegible 
       
    );
    var utterance3 = new SpeechSynthesisUtterance(
      texto + "temperatura de la ciudad es" + " " + textoTemperatura +"Grados" 
    );
    var utterance4 = new SpeechSynthesisUtterance(
      texto +  textohumedad
    );
    var utterance5 = new SpeechSynthesisUtterance(datos);
    utterance.lang = "es-ES";
    speechSynthesis.speak(utterance);
    speechSynthesis.speak(utterance2);
    speechSynthesis.speak(utterance3);
    speechSynthesis.speak(utterance4);
    speechSynthesis.speak(utterance5);
  }
}
