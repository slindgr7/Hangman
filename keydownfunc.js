document.addEventListener("DOMContentLoaded", function() { //

  const secretWord = "sara"; // ordet man ska gissa, SLUMPA HÄR SEN!
  const wordDisplay = document.querySelector(".word-display");
  const guessedLettersDisplay = document.querySelector(".show-guessed-letters");
  const letterInput = document.getElementById("letter-input");

  // const remainingGuessesDisplay = document.querySelector(".show-remaining"); vet ej hur
  
  // const guessBtn = document.querySelector(".guess-btn"); ta bort denna?
  
  let guessedLetters = []; //antal gissningar kvar

  letterInput.addEventListener("keydown", function(event) {
    console.log("hej")
    if (event.key === "Enter") {
      event.preventDefault() //förhindrar att sidan skall laddas om när man trycker på enter
      
  const inputValue = letterInput.value.toLowerCase(); //alla bokstäver göras om till små, för enbart stora bokstääver, ändra i efterhand
  letterInput.value = ""; // detta rensar inputfältet

        //i if-satsen nedan kollar man om inputValue innehåller bokstäver eller/och om bokstaven inte finns med i mina tidigare gissade bokstäver
        //ifall detta är sant lägger man till bokstaven i guessedLetters
        console.log(' tryckt på enter')
          if (inputValue && !guessedLetters.includes(inputValue)) {
            guessedLetters.push(inputValue);    //lägger till bokstaven om man inte redan gissat den
            console.log('lägger till värdet')  


          if (secretWord.includes(inputValue)) {
                                                          // wordDisplay uppdat, visar ordet med de rätt gissade bokstäver
            let displayText = "";                       // påbörja en tom sträng för att bygga ordet
            for (let i = 0; i < secretWord.length; i++) {
            
              const letter = secretWord[i];             // hämta varje bokstav i secretWord
                displayText += guessedLetters.includes(letter) ? letter : "_"; // lägg till bokstav eller "_" om inte gissad
                displayText += " "; //  mellanrum mellan bokstäverna
              }
    
          
            let start = 0;
            let end = displayText.length - 1;
    
            // tar bort mellanslag mm före ordet
            while (start <= end && displayText[start] === " ") {
              start++;
              }
    
              //  tar bort mellanslag mm efter ordet
              while (end >= start && displayText[end] === " ") {
                end--;
              }
    
              // här visas sträng, utan mellanslag före/efter som innehåll i wordDisplay
              wordDisplay.textContent = displayText.slice(start, end + 1); 
            } else {
              // Om bokstaven inte finns i ordet, uppdatera gissade bokstäver
              guessedLettersDisplay.textContent = guessedLetters.reduce((acc, letter) => {
                return acc ? acc + ", " + letter : letter; // reduce för att skapa lista med kommatecken
              }, "");
            }
          }
        }
      });
    });
    