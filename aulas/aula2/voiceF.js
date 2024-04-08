window.onload = onSubmit;
const imagenHablar = document.getElementById("imagen-hablar");

imagenHablar.addEventListener("click", () => {
  const textoF = "La ";
  decirAula(textoF);
});

function decirAula(texto) {
  //temperatura
  var temperatura = document.getElementById("temperatura").textContent;
  var numero = temperatura;
  var textoTemperatura = numero.toLocaleString("es-ES");
  console.log(textoTemperatura); // Salida: "veinticinco"
  //humedad
  var humedad = document.getElementById("humedadAula").textContent;
  var numero = humedad;
  var textohumedad = numero.toLocaleString("es-ES");
  console.log(textohumedad); // Salida: "veinticinco"*/
  //calidadAire
  var calidad = document.getElementById("calidad").textContent;
  var numero = calidad;
  var textocalidad = numero.toLocaleString("es-ES");
  console.log(textocalidad); // Salida: "veinticinco"*/
  //Gases
  var gases = document.getElementById("gases").textContent;
  var numero = parseInt(gases); // Convertir a numero con decimales
  var textogasespeligrosos = numero;
  console.log(textogasespeligrosos);
  //FECHA
  const fechaUser = document.getElementById("fecha").textContent;
  // Dividir la fecha y la hora
  const fecha = fechaUser.split(" ")[0];
  const hora = fechaUser.split(" ")[1];
  // Extraer solo el día de la fecha
  const dia = fecha.split("-")[2];
  // Formatear la hora
  const horaFormateada = hora.substring(0, 5); // 12:28
  const fechaLegible = new Date(fecha).toLocaleDateString("es-ES");

  //recomendaciones de temperatura
  var reTemp = document.getElementById("reTemp").textContent;

    //recomendaciones de temperatura
    var reTemp = document.getElementById("reTemp").textContent;
     //recomendaciones de humedad
     var reHum = document.getElementById("reHum").textContent;

     //recomendaciones de calidad
     var reCal = document.getElementById("reCal").textContent;

  //salida voz
  if (texto && texto.length > 0) {
    var utterance = new SpeechSynthesisUtterance(
      texto + "temperatura del aula es" + " " + textoTemperatura
    );
    var utterance1 = new SpeechSynthesisUtterance(
      texto + " humedad del aire es" + " " + textohumedad
    );
    var utterance2 = new SpeechSynthesisUtterance(
      texto + " calidad del aire es" + " " + textocalidad + " , partes por millón"
    );
    var utterance3 = new SpeechSynthesisUtterance(
      " los gases peligrosos son " +
        " " +
        textogasespeligrosos +
        ", partes por millón"
    );
    var utterance4 = new SpeechSynthesisUtterance(
      "La última actualización ha sido el " +
        fechaLegible +
        " a las " +
        horaFormateada
    );
    var utterance5 = new SpeechSynthesisUtterance("Recomendaciones");

    var utterance6 = new SpeechSynthesisUtterance(
      "la temperatura es " +reTemp
    );
    var utterance7 = new SpeechSynthesisUtterance(
      "la humedad es " +reHum
    );
    var utterance8 = new SpeechSynthesisUtterance(
      "la calidad del aire es " +reCal
    );
    utterance.lang = "es-ES";
    speechSynthesis.speak(utterance);
    speechSynthesis.speak(utterance1);
    speechSynthesis.speak(utterance2);
    speechSynthesis.speak(utterance3);
    speechSynthesis.speak(utterance4);
    speechSynthesis.speak(utterance5);
    speechSynthesis.speak(utterance6);
    speechSynthesis.speak(utterance7);
    speechSynthesis.speak(utterance8);
  }
}
