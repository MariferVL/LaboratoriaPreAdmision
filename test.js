
   var  frutas = ["peras", "manzanas", "uvas"]
   var  cantidades = [88, 31, 11]
var fruta = frutas[1]
console.log(fruta)



function getResults() {

  //CORRECT ANSWERS
  var amountCorrect = 0;

// LOOP FOR GOING THROUGH ALL QUESTIONS
  for(var i = 1; i <= 5; i++) {
    var radiosName = document.getElementsByName('answer'+i);

//LOOP FOR CHECKING ANSWERS INSIDE EACH RADIO
    for(var j = 0; j < radiosName.length; j++) {
      var radiosValue = radiosName[j];
      if(radiosValue.value == "correct" && radiosValue.checked) {
        amountCorrect++;
        radiosValue.style.color = "green";
      }
    }
  }
document.getElementById('results').innerHTML =
"Respuestas correctas " + amountCorrect;

}




//Almacenar puntaje

function obtenerResultados2 () {

  //Respuestas correctas
  var respuestasCorrectas2 = 0;

  // Loop de preguntas 
  for (var preguntas = 1; preguntas <= 5; preguntas++) {
    var numeroPreguntaDos = document.getElementsByName("opcion" + preguntas);

    //Loop para respuestas
    for (var respuestaDos = 0; respuestaDos < numeroPreguntaDos.length; respuestaDos++) {
      var numeroRespuestaDos = numeroPreguntaDos[respuestaDos];
      if (numeroRespuestaDos.value == "correcto" && numeroRespuestaDos.checked) {
        respuestasCorrectas2++;
      }
    }
  }
  document.getElementById("resultadosFinal2").innerHTML =
    "Respuestas correctas " + respuestasCorrectas2;
}