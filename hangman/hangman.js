const theWord="pepperkake";
let noLives = 0;
const maxLives = 7;
let hint = [];
let usedLetters = "";

for (i=0; i<theWord.length; i++) {
  hint.push("_");
}

showHint(hint); 


function check() {
 // bokstav eller ord
 inp = document.getElementById("inpWord").value;

 if (inp.length == 1 ) {

   for (let i=0; i< theWord.length; i++) {
    if (theWord[i] == inp) {
      hint[i] = inp;
    }
   }
 }

showHint(hint);


 //derssom bokstav
  //lagrer gjettet bokstav
  //løkke
    //sjekk om bokstaven er i ordet
      //oppdaterer gjetteord

  //ellers sjekk om gjettet ord er rett
    //dersom rett you won

  //skriv ut antall forsøk
  //skriv ut ordet gjettet så langt

  // oppdaterer antall forsøk
  //dersom antforsøk i maksforsøkd
    //game over

  
  }


function showHint(hint) {
  let toShow = "";
  for (let i=0; i<hint.length; i++) {
    toShow+= hint[i] + " ";
  }
  document.getElementById("pHint").innerText = toShow;
}