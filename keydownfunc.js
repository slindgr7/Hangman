import { getRandomWord } from './random-word.js'  

import { wrongGuessCounter, hideFigure } from './counter.js';  

import { gameWon, gameOver  } from './win-gameover-scores.js'

import { updateGameDetails } from './storage.js';

import { hideGameContainer, hideHomeScreenContainer, showHomeScreenContainer, showGameContainer, hideGameOverContainer, showGameOverContainer, hideWinContainer  } from './hide-funcation.js';

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

document.querySelector('.gameover-p1').innerText = "Det hemliga ordet är: " + secretWord;

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
      gameWon()
      updateGameDetails(currentplayer, score, wrongGuessCount, secretWord.length, 'lost');
      hideGameContainer(); 
  }
}

// uppdatera felaktiga gissningar
function updateWrongLettersDisplay() {
  wrongLettersDisplay.textContent = wrongLetters.join(", ");
}

guessButton.addEventListener('click', function() {
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
        console.log("wrongGuessCount är 6")
        gameOver() // detta måste köras tidgare för att randomword() ska funka med lose
        updateGameDetails(currentplayer, score, wrongGuessCount,  secretWord.length, 'lost'); // Uppdatera spelet i local storage 
        hideGameContainer(); // Dölj spelet för att visa gamer over
        
      }
    }
  }
});


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

function resetGame() {
  console.log("resetGame anropas");
 
  guessedLetters = [];
  console.log("guessedLetters anropas");

  wrongLetters = [];
  console.log("wrongLetters anropas");

  wrongGuessCount = 0;
  console.log("wrongGuessCount anropas");

  //wrongGuessCount++;
  console.log("wrongGuess++ anropas");

  score = 0;
  console.log("score anropas");

  //updateWordDisplay();
  console.log("updateWordDisplay anropas");

  updateWrongLettersDisplay();
  console.log("updateWrongLetterDisplay anropas");

  scoreElement.innerText = `Score: ${score}`;
  console.log("scoreElement anropas");

  hideWinContainer();
  console.log("hideWinContainer anropas");

  //showHomeScreenContainer();
  console.log("showHomeScreenContainer anropas");

  //showGameContainer()
  console.log("showGameContainer anropas");

  hideFigure()
  console.log("hideFigure anropas");

  getRandomWord()

  incorrectGuesses = 0; // Återställ incorrectGuesses
  console.log("incorrectGuesses anropas");

  incorrectGuessesDisplay.innerText = incorrectGuesses;

  parts.forEach(part => part.classList.remove('block-svg-parts'));

  document.querySelector('.gameover-button').hidden = true;

  document.querySelector('.win-button').hidden = true;
  
}