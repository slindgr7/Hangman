import { hideHomeScreenContainer, showHomeScreenContainer, hideGameContainer, showGameContainer
    ,showGameOverContainer, hideGameOverContainer, showWinContainer, hideWinContainer 
    ,showScoreContainer, hideScoreContainer ,showUserDetails, hideUserDetails } from "./CSS/JS-filer/hide-funcation.js";
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

function saveScore(playerName, incorrectGuesses, wordLength, result, score, timePlayed) {
	let newScore = {
		name: playerName,
		incorrectGuesses: incorrectGuesses,
		wordLength: wordLength,
		result: result,
		score: score,
		timePlayed: timePlayed
	};

	let allScores = JSON.parse(localStorage.getItem('scores')) || [];
	allScores.push(newScore);
	localStorage.setItem('scores', JSON.stringify(allScores));
}


//funktion för vad som händer när spelet är slut och spelaren förlorade, då "hämtas" gameover delen i html-filen och visas på skärmen
//Koden är "sur" nu för att vi inte anropat gameOver någonstans, det kan vi göra sen när vi vill visa dom
function gameOver() {
    let playerName = localStorage.getItem('playerName');
    let wordLength = randomWord.length;
    let incorrectGuesses = document.querySelector('#incorrectGuesses').innerText;
    
    const todaysDate = new Date();
    const timePlayed = `${todaysDate.getHours()}:${todaysDate.getMinutes()} ${todaysDate.getDate()}/${todaysDate.getMonth()+1}`;
    
    saveScore(playerName, incorrectGuesses, wordLength, 'lost', score, timePlayed);

	// document.querySelector('.gameover').style.display = 'flex';
}
//Koden är "sur" nu för att vi inte anropat gameWon någonstans, det kan vi göra sen när vi vill visa dom
function gameWon() {
    score += 10;  // 10 poäng för vinst
    let playerName = localStorage.getItem('playerName');
    let wordLength = randomWord.length;
    let incorrectGuesses = document.querySelector('#incorrectGuesses').innerText;
    
    const todaysDate = new Date();
    const timePlayed = `${todaysDate.getHours()}:${todaysDate.getMinutes()} ${todaysDate.getDate()}/${todaysDate.getMonth()+1}`;
    
    saveScore(playerName, incorrectGuesses, wordLength, 'won', score, timePlayed);

	// document.querySelector('.gameover').style.display = 'flex';
}

//Här är en funktion som hämtar tidigare sparade poäng från localstorage. Poängen blir som en lista med sparade objekt så använder jag JSON som ändrar det till ett "JavaScript" objekt istället :P tror jag har förklarat det rätt. Om det finns poäng läggs dom till i en lista.  


//Koden är "sur" nu för att vi inte anropat displayScores någonstans, det kan vi göra sen när vi vill visa dom
function displayScores() {
    let scores = JSON.parse(localStorage.getItem('scores')) || [];

    if (scores.length > 0) {  // Korrigerad stavning av "length"
        let scoreList = '';
        scores.forEach(score => {
            scoreList += `<li>Spelare: ${score.name}, Felgissningar: ${score.incorrectGuesses}, Ordlängd: ${score.wordLength}, Poäng: ${score.score}, Tid: ${score.timePlayed}</li>`;
        });
        document.querySelector('.score-container ul').innerHTML = scoreList;
    } else {
        document.querySelector('.score-container ul').innerHTML = "<li>Inga poäng sparade än.</li>";
    }

   
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

//keydownfunc (tog bort från detta script)
      



// Dialog-ruta för att använder skall enkelt kunna byta till Score view.
const showScoreBtn = document.querySelector('#show-score')
const closeScoreBtn = document.querySelector('#close-score')
const dialog = document.querySelector('dialog')
const scoreContainer = document.querySelector('.score-container')

dialog.addEventListener('click', event => {
	event.stopPropagation()
})
showScoreBtn.addEventListener('click', () => {
	scoreContainer.classList.remove('hide')
	dialog.show()
})
closeScoreBtn.addEventListener('click', closeDialog)
scoreContainer.addEventListener('click', closeDialog)

function closeDialog() {
	dialog.close()
	scoreContainer.classList.add('hide')
}