
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






const playerNameInput = document.getElementById('player-name-input');
const playButton = document.getElementById('play-button');
const meddelande = document.getElementById('meddelande');
const userName = document.querySelector('#username');


playButton.addEventListener('click', function () {
	const playerName = playerNameInput.value;
	userName.innerText = playerName;
});





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
wrongGuessCounter()
wrongGuessCounter()




console.log(incorrectGuesses)








/* Score-style-page

name = input.value ......

const result = document.querySelector('#result');
const win = document.createElement('p');
const lose = document.createElement ('p');

win.innerText = ` Wins: ${}`;
lose.innerText = `Loses: ${}`;

result.appendChild(win);
result.appendChild(lose);

const incorrectGuesses = document.querySelector('#incorrect');

*/

