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