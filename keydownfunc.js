const secretWord = "sara"; // ordet man ska gissa, SLUMPA HÄR SEN!
const wordDisplay = document.querySelector(".word-display");
const wrongLettersDisplay = document.querySelector(".show-guessed-letters");
const letterInput = document.getElementById("letter-input");
const guessButton = document.querySelector('.guess-btn');


let guessedLetters = []; // lista över gissade bokstäver
let wrongLetters = [];   // lista över felaktiga bokstäver

// Funktion för att uppdatera ordet
function updateWordDisplay() {
  let displayText = "";
  let allGuessed = true;  // Kontrollera om alla bokstäver är gissade

  // Bygg upp ordet baserat på gissningarna
  for (let i = 0; i < secretWord.length; i++) {
    const letter = secretWord[i];
    if (guessedLetters.includes(letter)) {
      displayText += letter; // Visa bokstaven om den är gissad
    } else {
      displayText += "_"; // Visa understreck om den inte är gissad
      allGuessed = false;
    }
    displayText += " "; // mellanrum mellan bokstäverna
  }

  wordDisplay.textContent = displayText.trim(); // Uppdatera ordet på skärmen

  // Om alla bokstäver är gissade, visa vinstmeddelande
  if (allGuessed) {
    alert("Grattis! Du har gissat rätt ord!");
  }
}

// Funktion för att uppdatera felaktiga gissningar
function updateWrongLettersDisplay() {
  wrongLettersDisplay.textContent = wrongLetters.join(", ");
}

guessButton.addEventListener('click', function() {
  const inputValue = letterInput.value.toLowerCase(); // Omvandla till små bokstäver
  letterInput.value = ""; // Rensa inputfältet

  // Lägg till din if-sats här för att kontrollera om bokstaven är ny 
  if (inputValue && !guessedLetters.includes(inputValue) && !wrongLetters.includes(inputValue)) {
    guessedLetters.push(inputValue); // Lägg till bokstaven i gissade bokstäver
    console.log('lägger till värdet: ' + inputValue);

    if (secretWord.includes(inputValue)) {
      // Om bokstaven finns i det hemliga ordet, uppdatera ordet
      updateWordDisplay();
    } else {
      // Om bokstaven inte finns, lägg till den i felaktiga gissningar
      wrongLetters.push(inputValue);
      console.log('Felaktig bokstav: ' + inputValue);
      updateWrongLettersDisplay(); // Uppdatera felaktiga gissningar
    }
  }
});
