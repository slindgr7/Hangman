document.addEventListener("DOMContentLoaded", function() { //

  const secretWord = "javascript"; //vårt hemliga ord, SLUMPA HÄR SEN!!
  const wordDisplay = document.querySelector(".word-display");
  const guessedLettersDisplay = document.querySelector(".show-guessed-letters");
  const letterInput = document.getElementById("letter-input");
  
  let guessedLetters = [];

  letterInput.addEventListener("keydown", function(event) {
    console.log("hej")
    if (event.key === "Enter") {
      event.preventDefault() //preventdefault förhindrar standardbeteendet för eventet, vill ej att sidan skall laddas om när man trycker på en KEY
      
      const inputValue = letterInput.value.toLowerCase(); //alla bokstäver göras om till små, för enbart stora bokstääver, ändra i efterhand
      letterInput.value = ""; // rensar inputfältet

          //i if-satsen nedan kollar man om inputValue innehåller bokstäver eller/och om bokstaven inte finns med i mina tidigare gissade bokstäver
          //ifall detta är sant lägger man till bokstaven i guessedLetters
          console.log(' tryckt på enter')
          if (inputValue && !guessedLetters.includes(inputValue)) {
            guessedLetters.push(inputValue);
            console.log('lägger till värdet')
    
            
    });

