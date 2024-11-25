  const secretWord = "sara"; // ordet man ska gissa, SLUMPA HÄR SEN!
  const wordDisplay = document.querySelector(".word-display");
  const wrongLettersDisplay = document.querySelector(".show-guessed-letters");
  const letterInput = document.getElementById("letter-input");

  // const remainingGuessesDisplay = document.querySelector(".show-remaining"); vet ej hur
  
  
  let guessedLetters = []; //antal gissningar kvar


  letterInput.addEventListener("keydown", function(event) {
    console.log("hej")
    if (event.key === "Enter") {
      event.preventDefault() //förhindrar att sidan skall laddas om när man trycker på enter
      
  const inputValue = letterInput.value.toLowerCase(); //alla bokstäver göras om till små

  letterInput.value = ""; // detta rensar inputfältet

        //i if-satsen nedan kollar man om inputValue innehåller bokstäver eller/och om bokstaven inte finns med i mina tidigare gissade bokstäver
        //ifall detta är sant lägger man till bokstaven i guessedLetters
        
          if (inputValue && !guessedLetters.includes(inputValue)) { //Kollar så att strängen inte är tom
            guessedLetters.push(inputValue);    //bokstaven läggs inte till om vi gissar på samma bokstav igen
            console.log('lägger till värdet')  


          if (secretWord.includes(inputValue)) {    //om hemligt ord inhehåller det ord jag gissar
                                                    // wordDisplay uppdat, visar ordet med rätt gissade bokstäver
            let displayText = "";                       // påbörja en tom sträng för att bygga ordet
            for (let i = 0; i < secretWord.length; i++) {
            
              const letter = secretWord[i];             // hämta varje bokstav i secretWord
              if (guessedLetters.includes(letter)) {    //kollar om bokstav finns i guessedLetter, 
                displayText += letter                   //då visar den bokstaven 
              } else {
                displayText += "_"                      //annars visas tomt understreck
              }


              displayText += " "; //  mellanrum mellan bokstäverna
              }
    
              wordDisplay.textContent = displayText
              console.log(displayText)

            } else {
              // Om bokstaven inte finns i ordet, uppdatera gissade bokstäver
              wrongLettersDisplay.textContent = guessedLetters.reduce((acc, letter) => {
                return acc ? acc + ", " + letter : letter; // reduce för att skapa lista med kommatecken eller så lägger den til len bokstav (taget från AI)
              }, "");
            }
          }
        }
      });
    
//let wrongGuesses = [];

// function handleGuesses(guessedLetter) {
//   // Kontrollera om bokstaven inte finns i det hemliga ordet
//   if (!secretWord.includes(guessedLetter)) {
//     // lägg till bokstaven till wrongGuesses om den inte redan är där
//     if (!wrongLetter.includes(guessedLetter)) {
//       wrongGuesses.push(guessedLetter);
      
//       // uppdat display av felaktiga bokstäver
//       wrongLettersDisplay.textContent = wrongGuesses.join(', ');
//     }
//   }
// }
// document.addEventListener('keydown', function(event) {
//   let guessedLetter = event.key.toLowerCase();
//   handleGuesses(guessedLetter);
// });