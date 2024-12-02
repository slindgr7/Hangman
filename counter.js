
// Dialog-ruta för Score screen
const showScore = document.querySelector('#show-score')
const closeScoreBtn = document.querySelector('#close-score')
const dialog = document.querySelector('dialog')
const scoreContainer = document.querySelector('.score-container')

dialog.addEventListener('click', event => {
	event.stopPropagation()
})
showScore.addEventListener('click', () => {
	scoreList();
	scoreContainer.classList.remove('hide')
	dialog.show()
})
closeScoreBtn.addEventListener('click', closeDialog)
scoreContainer.addEventListener('click', closeDialog)

function closeDialog() {

	dialog.close()
	scoreContainer.classList.add('hide')
}


// const users = [
//     {
//         "name": "Sally",
//         "incorrectGuesses": 3,
//         "wordLength": 5,
//         "result": "Win",
//         "score": 3,
//         "timePlayed": "07:33 20/11"
//     },  

// ];

// localStorage.setItem('scores', JSON.stringify(users));

let games = JSON.parse(localStorage.getItem('scores')) || [];

function scoreList() {
    const allScores = JSON.parse(localStorage.getItem('scores')) || [];
	console.log(allScores)

    const sortedScores = allScores.sort((a, b) => b.score - a.score);

   
    let nameDiv = document.querySelector("#name");
    let resultDiv = document.querySelector("#result");
    let incorrectGuessesDiv = document.querySelector("#incorrectGuesses");
    let wordLengthDiv = document.querySelector("#wordLength");
    let scoreDiv = document.querySelector("#userScore");
    let timePlayedDiv = document.querySelector("#timePlayed");

    
    nameDiv.innerHTML = '';
    resultDiv.innerHTML = '';
    incorrectGuessesDiv.innerHTML = '';
    wordLengthDiv.innerHTML = '';
    scoreDiv.innerHTML = '';
    timePlayedDiv.innerHTML = '';

   
	nameDiv.textContent = 'Name';
	wordLengthDiv.textContent = 'Word length';
	incorrectGuessesDiv.textContent = 'Incorrect Guesses';
	scoreDiv.textContent = 'Score';  
	resultDiv.textContent = 'Result';
	timePlayedDiv.textContent = 'Time/date';

    
    sortedScores.forEach((element) => {
        let name = document.createElement("p");
        let result = document.createElement("p");
        let incorrectGuesses = document.createElement("p");
        let wordLength = document.createElement("p");
        let score = document.createElement("p");
        let timePlayed = document.createElement("p");

        result.innerText = element.result || 'N/A'; 
        name.innerText = element.name || 'N/A';  
        incorrectGuesses.innerText = element.incorrectGuesses || '0'; 
		wordLength.innerText = element.wordLength || '0';  
        score.innerText = element.score || '0';  
        timePlayed.innerText = element.timePlayed || 'N/A';  

		nameDiv.appendChild(name);
		wordLengthDiv.appendChild(wordLength);
		incorrectGuessesDiv.appendChild(incorrectGuesses);
		scoreDiv.appendChild(score);    
		resultDiv.appendChild(result);  
		timePlayedDiv.appendChild(timePlayed);
    });
}

// const sortByGuessesButton = document.querySelector('#sort-by-guesses');
// const sortByDateButton = document.querySelector('#sort-by-date');

// sortByGuessesButton.addEventListener('click', (event) => {
// 	console.log(event.target.innerText)
// })



// Användarnamn.
// const playerNameInput = document.getElementById('player-name-input');
// const playButton = document.getElementById('play-button');
// const userName = document.querySelector('#meddelande'); 

// playButton.addEventListener('click', function () {
//     const playerName = playerNameInput.value;
//     userName.innerText = playerName;  
// });


// Dagens tid och datum.
// const todaysDate = new Date();
// const currentHour = todaysDate.getHours() 
// const currentMinute = todaysDate.getMinutes() < 10 ? '0' + todaysDate.getMinutes() : todaysDate.getMinutes();
// const currentDay = todaysDate.getDate()
// const currentMonth = todaysDate.getMonth()+1
// const currentTime = document.querySelector('#currentTime')

// currentTime.innerText = `${currentHour}:${currentMinute}    ${currentDay}/${currentMonth}`

//Detta måste in i localStorage





// Poäng i dialog-rutan.
// const scoreElement = document.querySelector('#score');
// let score = 0;

// function updateScore(points) {
//     score += points; 
//     scoreElement.innerText = `Score: ${score}`;
// 	return score;
// }

// updateScore()
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

export const hideFigure = () => {
	parts[0].classList.add('hidden-svg-parts');
	parts[1].classList.add('hidden-svg-parts');
	parts[2].classList.add('hidden-svg-parts');
	parts[3].classList.add('hidden-svg-parts');
	parts[4].classList.add('hidden-svg-parts');
	parts[5].classList.add('hidden-svg-parts');

// Funktion för varje fel gissning av bokstav.
const incorrectGuessesDisplay = document.querySelector('#incorrectGuesses')
let incorrectGuesses = 0;
incorrectGuessesDisplay.innerText = incorrectGuesses;


export function wrongGuessCounter(incorrectGuesses) {

	console.log("wrongGuessCounter startar, incorrectGuesses:", incorrectGuesses);

	//incorrectGuesses += 1;
    incorrectGuessesDisplay.innerText = incorrectGuesses;

    if (incorrectGuesses === 1) {
        parts[0].classList.add('block-svg-parts');
        console.log("första kroppsdelen")
    }
    else if (incorrectGuesses === 2) {
        parts[1].classList.add('block-svg-parts');
        console.log("andra kroppsdelen")

    } else if (incorrectGuesses === 3) {
        parts[2].classList.add('block-svg-parts');
        console.log("tredje kroppsdelen")

    }
    else if (incorrectGuesses === 4) {
        parts[3].classList.add('block-svg-parts');
        console.log("fjärde kroppsdelen")
    }
    else if (incorrectGuesses === 5) {
        parts[4].classList.add('block-svg-parts');
        console.log("femte kroppsdelen")
    }
    else if (incorrectGuesses === 6){
        parts[5].classList.add('block-svg-parts');
        console.log('Game Over visas!');
    }
    console.log("wrongGuessCounter slutar, incorrectGuesses:", incorrectGuesses);
}









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

