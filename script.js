// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



// Array genera numeri casuali
  let numeriCasualiList = [];

// Array memorizza numeri inseriti  
  let numeriPromptList = [];
  
  
  let numCasuale;
  let numPrompt;

// Genera 5 numeri casuali che salva nell'array   
  for (var i = 0; i < 5; i++) {

    numCasuale = genNumeriCasuali(1, 100);

    console.log(numCasuale);

    numeriCasualiList.push(numCasuale);

  }

  console.log(numeriCasualiList);
  alert("Memorizza questi cinque numeri: " + numeriCasualiList);

// Funzione timeout 30 secondi  
  setTimeout(function() {
    for (var i = 0; i < 5; i++) {

    // Chiedo di inserire i numeri memorizzati uno alla volta    
      numPrompt = parseInt(prompt("Inserisci i numeri che ricordi"));
      for (var f = 0; f < numeriCasualiList.length; f++) {
        // confronto il numero inserito con il numero generato casualmente e lo memorizzo nell'array se corretto
        if (numPrompt == numeriCasualiList[f]) {
          numeriPromptList.push(numPrompt);
        }
      }

    }

    alert("Hai indovinato " + numeriPromptList.length + " numeri: " + numeriPromptList)

    console.log(numeriPromptList)

  }, 30000);


function genNumeriCasuali(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



