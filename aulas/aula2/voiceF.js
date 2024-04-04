document.getElementById('hablar').addEventListener("click",()=>{
        const texto = "La ";
        decir(texto);
    });
    
    function decir(texto){
        var temperatura = document.getElementById('temperatura').textContent;
        var numero = temperatura;
        var textoTemperatura = numero.toLocaleString('es-ES');
    console.log(textoTemperatura); // Salida: "veinticinco"
    var humedad = document.getElementById('humedadAula').textContent;
    var numero = humedad;
    var textohumedad = numero.toLocaleString('es-ES');
console.log(textohumedad); // Salida: "veinticinco"*/
    
        if (texto && texto.length > 0) {
        var utterance = new SpeechSynthesisUtterance(texto +"temperatura del aula es" + " " + textoTemperatura);
        var utterance1 = new SpeechSynthesisUtterance(texto +" humedad del aire es" + " " + textohumedad);
        utterance.lang="es-ES";
        speechSynthesis.speak(utterance);
        speechSynthesis.speak(utterance1);
        
      }
    }