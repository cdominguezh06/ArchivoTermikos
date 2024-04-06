
(document.getElementById("presentacion-hablar")).addEventListener("click", () => {
  const texto = "La ";
  decirCiudad(texto);
});

function decirCiudad(texto) {
    var utterance = new SpeechSynthesisUtterance(
      "Somos alumnos del ciclo DAM del IES Arroyo Harnina de Almendralejo, con nuestro proyecto pretendemos conseguir una mejor gestion de los recursos energéticos en las aulas de los centros educativos. Para ello hemos instalado placas con sensores que reportan la temperatura,humedad y  niveles de CO2 del aula y los envia a una base de datos de forma periodica."
    );
    var utterance2 = new SpeechSynthesisUtterance(
      "A través del servidor, nuestra página web, accede a estos datos y hace una comparativa con las tomas anteriores, teniendo en cuenta la capacidad del aula y el uso de la calefacción. Mediante este sistema pretendemos hacer un uso óptimo de la calefacción en las aulas y disminuir el consumo de energía asi como reducir los niveles de CO2 "
    );
    utterance.lang = "es-ES";
    speechSynthesis.speak(utterance);
    speechSynthesis.speak(utterance2);
}
