function respuesta() {
    document.getElementById("respuesta1").innerHTML = "Todas las anteriores";
   }

function mostrarValor(elemento) {
    alert(elemento.value);
}
function darRespuesta(){
    document.getElementById("respuesta1").innerHTML = "Todas las anteriores";
}

function obtenerResultados() {

    //Respuestas Correctas
    var puntaje = 0;
  
  // Loop de preguntas
    for(var numPreg = 1; numPreg <= 8; numPreg++) {
      var opcion = document.getElementsByName("opcion"+numPreg);

  //loop LOOP FOR CHECKING ANSWERS INSIDE EACH RADIO
      for(var j = 0; j < opcion.length; j++) {
        var radiosValue = opcion[j];
        if(radiosValue.value == "correct" && radiosValue.checked) {
          puntaje++;
          radiosValue.style.color = "green";
        }
      }
    }
  document.getElementById('results').innerHTML =
  "Respuestas correctas " + puntaje;
  
  }
  