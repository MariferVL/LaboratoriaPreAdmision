
   var  frutas = ["peras", "manzanas", "uvas"]
   var  cantidades = [88, 31, 11]
var fruta = frutas[1]
console.log(fruta)



function getResults() {

    //CORRECT ANSWERS
    var amountCorrect = 0;
  
  // LOOP FOR GOING THROUGH ALL QUESTIONS
    for(var i = 1; i <= 8; i++) {
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
  