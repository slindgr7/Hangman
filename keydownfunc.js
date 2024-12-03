import { getRandomWord } from '/random-word.js'  
import { wrongGuessCounter, hideFigure } from '/counter.js';  
import { gameWon, gameOver  } from '/win-gameover-scores.js'
// import { updateGameDetails } from './storage.js';
import { hideGameContainer, hideHomeScreenContainer, showHomeScreenContainer, showGameContainer, hideGameOverContainer, showGameOverContainer, hideWinContainer  } from '/hide-funcation.js';

const incorrectGuessesDisplay = document.querySelector('#incorrectGuesses');
let incorrectGuesses = 0;

let secretWord = getRandomWord(); 
const wordDisplay = document.querySelector(".word-display");
const wrongLettersDisplay = document.querySelector(".show-guessed-letters");
const letterInput = document.getElementById("letter-input");
const guessButton = document.querySelector('.guess-btn');

let wrongGuessCount = 0;
let guessedLetters = []; // lista-gissade bokstäver
let wrongLetters = [];   // lista- felaktiga bokstäver
let currentplayer = ""; // spelarens current name sparas denna variabel

const playButton = document.getElementById('play-button');
const meddelande = document.getElementById('meddelande');


playButton.addEventListener('click', function () { 
  const playerNameInput = document.getElementById('player-name-input'); 
  const playerName = playerNameInput.value.trim(); 
  hideHomeScreenContainer();
  showGameContainer();
  secretWord = getRandomWord()


  if (playerName !== "") {
    currentplayer = playerName;

    meddelande.textContent = `Namnet ${playerName} har sparats `;
    meddelande.style.color = `green`;
  } else {
    meddelande.textContent = 'Skriv in ett namn';
    meddelande.style.color = 'red';
  }
});

const scoreElement = document.querySelector('#score');
let score = 0; 

function updateScore(isCorrectGuess) {
  if (isCorrectGuess) {
    score += 1; 
  } else {
    score -= 1; 
  }

  scoreElement.innerText = `Score: ${score}`;

  return score;
}

// Funktion uppdatera ordet
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

  //  visa vinstmeddelande
  if (allGuessed) {
      setTimeout(()=>{
        gameWon(currentplayer,secretWord.length, score )
        // updateGameDetails(currentplayer, score, wrongGuessCount, secretWord.length, 'lost');
        hideGameContainer(); 
      },)
  }
}

// uppdatera felaktiga gissningar
function updateWrongLettersDisplay() {
  wrongLettersDisplay.textContent = wrongLetters.join(", ");
}
letterInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    handleInput();
  }
});

function handleInput() {
  const inputValue = letterInput.value.toLowerCase(); 
  letterInput.value = ""; // Rensa inputfältet

  // if-sats för att kontrollera om bokstaven är ny 
  if (inputValue && !guessedLetters.includes(inputValue) && !wrongLetters.includes(inputValue)) {
    guessedLetters.push(inputValue); // Lägg till bokstaven i gissade bokstäver

    if (secretWord.includes(inputValue)) {
      updateWordDisplay();
	  updateScore(true);

    } else {
      // annars, lägg till den i felaktiga gissningar
      wrongLetters.push(inputValue);
      updateWrongLettersDisplay(); 
      wrongGuessCount++  // Öka räknaren för felaktiga gissningar
      incorrectGuesses = wrongGuessCount;
      wrongGuessCounter(wrongGuessCount) //Anropa wrongGuessCounter för att uppdatera feedback
	    updateScore(false);

      if (wrongGuessCount === 6) {
        console.log("spelet är över, vi går till slutscreen")
        setTimeout(()=>{
        gameOver(currentplayer) 
        //updateGameDetails(currentplayer, score, wrongGuessCount,  secretWord.length, 'lost'); // Uppdatera spelet i local storage 
        hideGameContainer(); // Dölj spelet för att visa gamer over
        document.querySelector('.gameover-p1').innerText = "Det hemliga ordet är: " + secretWord;
        document.querySelector('.gameover-p2').innerText = `Ditt antal gissningar var: ${incorrectGuesses}`;
      }, )
        
      }
    }
  }
}

//Hint 

let hintUsed = false; 

const hintButton = document.querySelector('.hint-btn'); 
const hintText = document.querySelector('.hint-text');
const redanGissatText = document.querySelector('.redanGissat');

hintButton.addEventListener('click', showHint);

function showHint() {
  if (!hintUsed) { // kolla om hint inte har använts
    const remainingLetters = secretWord.split("").filter(letter => !guessedLetters.includes(letter));
    if (remainingLetters.length > 0) {
      const randomLetter = remainingLetters[Math.floor(Math.random() * remainingLetters.length)];
      guessedLetters.push(randomLetter);
      updateWordDisplay();
      
      hintText.textContent = `Hint: En bokstav i ordet är '${randomLetter}'`;
      hintText.style.display = 'block';
      
      hintUsed = true; //true efter att en hint har använts
    } else {
      redanGissatText.style.display = 'block'; // Visa meddelandet om alla bokstäver redan är gissade
    }
  } else {
    redanGissatText.style.display = 'block'; // Visa meddelandet om hint redan har använts
  }
}

function startNewRound() {
  hintUsed = false; // Återställ när en ny omgång börjar
  redanGissatText.style.display = 'none'; // Dölj meddelandet för en ny omgång
}


//Reset-game

const winButton = document.querySelector('.win-button');
winButton.addEventListener('click', resetGame)

const gameOverButton = document.querySelector('.gameover-button');
gameOverButton.addEventListener('click', resetGame)

//denna funktion resetar spelet, alla variabler, nummer etc
//gömmer gameover-container och visa homeScreen
//resetar figuren

function resetGame() {
  console.log("resetGame anropas");
 
  guessedLetters = [];
  wrongLetters = [];
  wrongGuessCount = 0;
  score = 0;
  incorrectGuesses = 0;

  updateWordDisplay();
  updateWrongLettersDisplay();

  hideWinContainer();
  hideFigure()
  hideGameOverContainer();
  //showGameContainer() vi vill inte se gubben i homescreen vyn
  showHomeScreenContainer();
  
  incorrectGuessesDisplay.innerText = incorrectGuesses;
  scoreElement.innerText = `Score: ${score}`;
  
};

