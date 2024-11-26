import { hideHomeScreenContainer, showHomeScreenContainer, hideGameContainer, showGameContainer
    ,showGameOverContainer, hideGameOverContainer, showWinContainer, hideWinContainer 
    ,showScoreContainer, hideScoreContainer ,showUserDetails, hideUserDetails } from "./hide-funcation.js";
    import { words } from './swedish-words.js';

// är är knapper med hide och show function
// home screen buttons that hide and show , need a DOMContentLoaded to load
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.home-screen-play-button').addEventListener('click', () => {
        hideHomeScreenContainer();
        showGameContainer();
    });
    document.querySelector('.home-screen-score-button').addEventListener('click', () => {
        hideHomeScreenContainer();
        showScoreContainer();
    });
});
// Game screen buttons that hide and show 


// game over screen buttons that hide and show, need a DOMContentLoaded to load
document.addEventListener('DOMContentLoaded', function () {
document.querySelector('.gameover-button').addEventListener('click', () => {
    hideGameOverContainer();
    showHomeScreenContainer();
});
document.querySelector('.gameover-score-button').addEventListener('click', () => {
    hideGameOverContainer();
    showScoreContainer();
});
});

// win screen buttons that hide and show , need a DOMContentLoaded to load
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.win-button').addEventListener('click', () => {
        hideWinContainer();
        showHomeScreenContainer();
    });
    document.querySelector('.win-score-button').addEventListener('click', () => {
        hideWinContainer();
        showScoreContainer();
    });
    });

// score screen buttons that hide and show, need a DOMContentLoaded to load
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.back-to-game').addEventListener('click', () => {
        hideScoreContainer();
        showHomeScreenContainer();
    });

})

// detta är en funk för att få random word från swedish-words.js
 // ordet längd är randomWord
 
function getRandomWord() { 
    // detta gör en ett filter för att bort word under 10 längd
   const filteredWords = words.filter(word => word.length === 10);
   // ifall listan på ord är tom
   if(filteredWords.length === 0) {
       console.log("Empty");
   }
   // detta gör en random index av swedish-word.js listan och tar bort floats(1.5, 2.5 4.5 nummer) och send random nummer * index swedish-words.js
   const randomIndex = Math.floor(Math.random() * filteredWords.length);
   // tar ett random ord ur filterwords indexen
   const randomWord = filteredWords[randomIndex];
   console.log(randomWord);
   return randomWord;
}
getRandomWord()


//här är funktionen som sparar poängen spelarens aktuella poäng till local storage. Funktionen skapar ett objekt med poängen och den "skickas" till localstorage med JSON och görs så om till en sträng (tror jag XD)
// här börjar score.js
function saveScore(playerName, incorrectGuesses, wordLength, result) {

	let newScore = {
		name: playerName,
		incorrectGuesses: incorrectGuesses,
		wordLength: wordLength,
		result: result
	};

	localStorage.setItem('currentScore', JSON.stringify(newScore));
}

//funktion för vad som händer när spelet är slut och spelaren förlorade, då "hämtas" gameover delen i html-filen och visas på skärmen
function gameOver() {
	let playerName = document.querySelector('.player-name').textContent;
	let incorrectGuesses = //här i behöver vi ha ett element som håller koll på hur många felgissningar spelaren har gjort;
    // let wordLength = // här i behövs ett element som håller koll på ordens längd;

	saveScore(playerName, incorrectGuesses, wordLength, 'lost');

	document.querySelector('.gameover').style.display = 'flex';
}

function gameWon() {
	let playerName = document.querySelector('.player-name').textContent;
	let incorrectGuesses = //här i behöver vi ha ett element som håller koll på hur många felgissningar spelaren har gjort;
	// let wordLength = // här i behövs ett element som håller koll på ordens längd;
     // words längds är randomword.length
	saveScore(playerName, incorrectGuesses, wordLength, 'won');

	document.querySelector('.gameover').style.display = 'flex';
}

//Här är en funktion som hämtar tidigare sparade poäng från localstorage. Poängen blir som en lista med sparade objekt så använder jag JSON som ändrar det till ett "JavaScript" objekt istället :P tror jag har förklarat det rätt. Om det finns poäng läggs dom till i en lista.  



function dispalyScores() {
	let scores = JSON.parse(localStorage.getItem('scores')) || [];

	if (scores.lenght > 0) {
		let scoreList = '';
		scores.forEach(score => {
			scoreList += `<li>Spelare: ${score.name}, Felgissningar: ${incorrectGuesses}, Ordlängd: ${score.wordLength}</li>`;

		}) ;
		document.querySelector('.score-container ul').innerHTML = scoreList;
	} else {
		document.querySelector('.score-container ul').innerHTML = "<li>Inga poäng sparade än.</li>";
	}

	// document.querySelector('.score-container').style.display = 'flex';
	// document.querySelector('.game-container').style.display = 'none';
	// document.querySelector('.win').style.display = 'none';
	// document.querySelector('.gameover').style.display = 'none';
}

//här börjar storage.js
// här hämtar javascript alla elementen som ska användas

const playerNameInput = document.getElementById('player-name-input');
const playButton = document.getElementById('play-button');
const meddelande = document.getElementById('meddelande');

// funktion som gör att namnet som spelaren skriver in sparas och visas i local storage, när namnet skrivit in och spelaren klickar på play kommer en grön text upp som visar att det är korrekt. Skriver inte spelaren i sitt namn innan den klickar på play kommern en röd text som säger till att ett namn behövs innan man spelar 

playButton.addEventListener('click', function () {
	const playerName = playerNameInput.value;

	if (playerName !== ""){
		localStorage.setItem('playerName', playerName);

		meddelande.textContent = `Namnet ${playerName} har sparats `;
		meddelande.style.color = `green`;
	} 
	else {
		meddelande.textContent = 'Skriv in ett namn';
		meddelande.style.color = 'red';
	}
});


// här börjar counter.js 

// const playerNameInput = document.getElementById('player-name-input');
// const playButton = document.getElementById('play-button');
// const meddelande = document.getElementById('meddelande');
// dessa const finns på rad 132 och del av storage.js
const userName = document.querySelector('#username');


playButton.addEventListener('click', function () {
	const playerName = playerNameInput.value;
	userName.innerText = playerName;
});


// detta är en klockan så man kan spara tiden när man spelar  

const todaysDate = new Date();
const currentHour = todaysDate.getHours() 
const currentMinute = todaysDate.getMinutes() < 10 ? '0' + todaysDate.getMinutes() : todaysDate.getMinutes();
const currentDay = todaysDate.getDate()
const currentMonth = todaysDate.getMonth()+1
const currentTime = document.querySelector('#currentTime')

currentTime.innerText = `${currentHour}:${currentMinute}    ${currentDay}/${currentMonth}`

// Detta måste in i localStorage

const scoreElement = document.querySelector('#score');
let score = 0;

function updateScore(points) {
    score += points; 
    scoreElement.innerText = `Score: ${score}`;
	return score;
}

updateScore(10)
//console.log(updateScore(10));

//svg-parts

// här är selctor för varje del av gubben
const parts = [
	document.querySelector('#ground'),
	document.querySelector('#scaffold'),
	document.querySelector('#head'),
	document.querySelector('#body'),
	document.querySelector('#arms'),
	document.querySelector('#legs'),
]


const hangmanTest = document.querySelector('#test-svg');
parts[0].classList.add('hidden-svg-parts');
parts[1].classList.add('hidden-svg-parts');
parts[2].classList.add('hidden-svg-parts');
parts[3].classList.add('hidden-svg-parts');
parts[4].classList.add('hidden-svg-parts');
parts[5].classList.add('hidden-svg-parts');


const incorrectGuessesDisplay = document.querySelector('#incorrectGuesses')
let incorrectGuesses = 0;
incorrectGuessesDisplay.innerText = incorrectGuesses;

function wrongGuessCounter() {
	incorrectGuesses += 1;
	incorrectGuessesDisplay.innerText = incorrectGuesses;

	if (incorrectGuesses === 1) {
		parts[0].classList.add('block-svg-parts');
	} 	
	else if (incorrectGuesses === 2) {
		parts[1].classList.add('block-svg-parts');
		
	} else if (incorrectGuesses === 3) {
		parts[2].classList.add('block-svg-parts');
		
	}
	else if (incorrectGuesses === 4) {
		parts[3].classList.add('block-svg-parts');
		
	}
	else if (incorrectGuesses === 5) {
		parts[4].classList.add('block-svg-parts');
		
	}
	else if (incorrectGuesses === 6){
		parts[5].classList.add('block-svg-parts');
		console.log('Game Over visas!');
	}
}

wrongGuessCounter()

console.log(incorrectGuesses)

// här börjar 

// document.addEventListener("DOMContentLoaded", function() { //

//     const secretWord = randomWord; // ordet man ska gissa, SLUMPA HÄR SEN!
//     const wordDisplay = document.querySelector(".word-display");
//     const guessedLettersDisplay = document.querySelector(".show-guessed-letters");
//     const letterInput = document.getElementById("letter-input");
  
//     // const remainingGuessesDisplay = document.querySelector(".show-remaining"); vet ej hur
    
//     // const guessBtn = document.querySelector(".guess-btn"); ta bort denna?
    
//     let guessedLetters = []; //antal gissningar kvar
  
//     letterInput.addEventListener("keydown", function(event) {
//       console.log("hej")
//       if (event.key === "Enter") {
//         event.preventDefault() //förhindrar att sidan skall laddas om när man trycker på enter
        
//     const inputValue = letterInput.value.toLowerCase(); //alla bokstäver göras om till små, för enbart stora bokstääver, ändra i efterhand
//     letterInput.value = ""; // detta rensar inputfältet
  
//           //i if-satsen nedan kollar man om inputValue innehåller bokstäver eller/och om bokstaven inte finns med i mina tidigare gissade bokstäver
//           //ifall detta är sant lägger man till bokstaven i guessedLetters
//           console.log(' tryckt på enter')
//             if (inputValue && !guessedLetters.includes(inputValue)) {
//               guessedLetters.push(inputValue);    //lägger till bokstaven om man inte redan gissat den
//               console.log('lägger till värdet')  
  
  
//             if (secretWord.includes(inputValue)) {
//                                                             // wordDisplay uppdat, visar ordet med de rätt gissade bokstäver
//               let displayText = "";                       // påbörja en tom sträng för att bygga ordet
//               for (let i = 0; i < secretWord.length; i++) {
              
//                 const letter = secretWord[i];             // hämta varje bokstav i secretWord
//                   displayText += guessedLetters.includes(letter) ? letter : "_"; // lägg till bokstav eller "_" om inte gissad
//                   displayText += " "; //  mellanrum mellan bokstäverna
//                 }
      
            
//               let start = 0;
//               let end = displayText.length - 1;
      
//               // tar bort mellanslag mm före ordet
//               while (start <= end && displayText[start] === " ") {
//                 start++;
//                 }
      
//                 //  tar bort mellanslag mm efter ordet
//                 while (end >= start && displayText[end] === " ") {
//                   end--;
//                 }
      
//                 // här visas sträng, utan mellanslag före/efter som innehåll i wordDisplay
//                 wordDisplay.textContent = displayText.slice(start, end + 1); 
//               } else {
//                 // Om bokstaven inte finns i ordet, uppdatera gissade bokstäver
//                 guessedLettersDisplay.textContent = guessedLetters.reduce((acc, letter) => {
//                   return acc ? acc + ", " + letter : letter; // reduce för att skapa lista med kommatecken
//                 }, "");
//               }
//             }
//           }
//         });
//       });
      

