// Caja para guardar nombre 

function guardarNombre() {
  var nombreJugador = document.getElementById("nombre");
  if (nombreJugador.value != "") {
    alert("¡Hola " + nombreJugador.value + "!");
  }
}

// function respuesta() {
//  document.getElementById("respuesta1").innerHTML = "Todas las anteriores";
//} 

// function mostrarValor(elemento) {
//  alert(elemento.value);
//}
//function darRespuesta() {
//  document.getElementById("respuesta1").innerHTML = "Todas las anteriores";
//}



function obtenerResultados () {

  //Respuestas correctas
  var respuestasCorrectas = 0;

  // Loop de preguntas 
  for (var pregunta = 1; pregunta <= 5; pregunta++) {
    var numeroPregunta = document.getElementsByName("opcion" + pregunta);

    //Loop para respuestas
    for (var respuesta = 0; respuesta < numeroPregunta.length; respuesta++) {
      var numeroRespuesta = numeroPregunta[respuesta];
      if (numeroRespuesta.value == "correcto" && numeroRespuesta.checked) {
        respuestasCorrectas++;
      }
    }
  }
  document.getElementById("resultadosFinal").innerHTML =
    "Respuestas correctas " + respuestasCorrectas;
}





//  Link de donde sacamos el código:
//  https://teamtreehouse.com/community/javascript-project-simple-quiz-with-radio-buttons