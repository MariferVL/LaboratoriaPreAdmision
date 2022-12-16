// Caja para guardar nombre 

function guardarNombre() {
  var nombreJugador = document.getElementById("nombre");
  if (nombreJugador.value != "") {
    alert("¡Hola " + nombreJugador.value + "!");
  }
}

function obtenerResultados () {

  //Respuestas correctas
  var respuestasCorrectas = 0;

  // Loop de preguntas 
  for (var pregunta = 1; pregunta <= 8; pregunta++) {
    var listaOpciones = document.getElementsByName("opcion" + pregunta);

          for (var j = 0; j < listaOpciones.length; j++) {
              var opcion = listaOpciones[j];
              if (opcion.checked) {
              if (opcion.value == "correcto") {
                respuestasCorrectas++;
                  opcion.nextElementSibling.style.backgroundColor = "white";
                  opcion.nextElementSibling.style.color = "#f57084";
              } else {
                  opcion.nextElementSibling.style.color = "#d21430";
              }
              } 
          }
      }
      document.getElementById("resultadoFinal").innerHTML =
        "Respuestas correctas: " + respuestasCorrectas;
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
