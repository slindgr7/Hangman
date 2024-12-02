


// import { displayScores } from './win-gameover-scores.js';

// Kalla på displayScores när du vill att den ska köras
// displayScores();
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






    // {
    //     "name": "Sally",
    //     "incorrectGuesses": 3,
    //     "wordLength": 5,
    //     "result": "Win",
    //     "score": 3,
    //     "timePlayed": "07:33 20/11"
    // },  
	// {
    //     "name": "Emma",
    //     "incorrectGuesses": 5,
    //     "wordLength": 7,
    //     "result": "Win",
    //     "score": 28,
    //     "timePlayed": "09:45 23/11"
    // },
	// {
    //     "name": "Andreas",
    //     "incorrectGuesses": 6,
    //     "wordLength": 8,
    //     "result": "Lost",
    //     "score": 9,
    //     "timePlayed": "19:45 13/11"
    // },
	// {
    //     "name": "Sara",
    //     "incorrectGuesses": 6,
    //     "wordLength": 10,
    //     "result": "Lost",
    //     "score": 38,
    //     "timePlayed": "14:25 18/11"
    // }



// localStorage.setItem('scores', JSON.stringify(users));
const users = JSON.parse(localStorage.getItem('games')) || [];

localStorage.setItem('scores', JSON.stringify(users));
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
    // Hämta data från localStorage (om det finns någon)
    const allScores = JSON.parse(localStorage.getItem('scores')) || [];
	
	const sortedScores = allScores.sort((a, b) => b.score - a.score);

    // Kontrollera om det finns några poäng
    if (allScores.length === 0) {
        console.log('Inga poäng finns sparade');
        return; // Om inga poäng finns sparade, avbryt funktionen här
    }

    // Sortera poängen i fallande ordning
    const sortedScores = allScores.sort((a, b) => b.score - a.score);

	// const sortedScores = allScores.sort(function (a, b) {
	// 	if (b.score > a.score) {
	// 		return 1; 
	// 	} else if (b.score < a.score) {
	// 		return -1; 
	// 	} else {
	// 		return 0; 
	// 	}
	// });
	

	let nameDiv = document.querySelector("#name")
	let resultDiv = document.querySelector("#result")
	let incorrectGuessesDiv = document.querySelector("#incorrectGuesses")
	let wordLengthDiv = document.querySelector("#wordLength")
	let scoreDiv = document.querySelector("#userScore")
	let timePlayedDiv = document.querySelector("#timePlayed")


	nameDiv.textContent = 'Name';
	resultDiv.textContent = 'Result';
	incorrectGuessesDiv.textContent = 'Incorrect Guesses';
	wordLengthDiv.textContent = 'Word length';
	scoreDiv.textContent = 'Score';
	timePlayedDiv.textContent = 'Time/date';
	

	allScores.forEach((element)=> {
		// console.log(`Element: ${element}`)
		let name = document.createElement("p")
		let result = document.createElement("p")
		let incorrectGuesses = document.createElement("p")
		let wordLength = document.createElement("p")
		let score = document.createElement("p")
		let timePlayed = document.createElement("p")

		result.innerText = element.result
		name.innerText = element.name
		incorrectGuesses.innerText = element.incorrectGuesses
		wordLength.innerText = element.wordLength
		score.innerText = element.score
		timePlayed.innerText = element.timePlayed

		nameDiv.appendChild(name)
		resultDiv.appendChild(result)
		incorrectGuessesDiv.appendChild(incorrectGuesses)
		wordLengthDiv.appendChild(wordLength)
		scoreDiv.appendChild(score)
		timePlayedDiv.appendChild(timePlayed)
	})


    // Hitta alla divar för att visa resultaten
    let nameDiv = document.querySelector("#name");
    let resultDiv = document.querySelector("#result");
    let incorrectGuessesDiv = document.querySelector("#incorrectGuesses");
    let wordLengthDiv = document.querySelector("#wordLength");
    let scoreDiv = document.querySelector("#userScore");
    let timePlayedDiv = document.querySelector("#timePlayed");

    // Rensa gamla resultat innan nya läggs till
    nameDiv.innerHTML = '';
    resultDiv.innerHTML = '';
    incorrectGuessesDiv.innerHTML = '';
    wordLengthDiv.innerHTML = '';
    scoreDiv.innerHTML = '';
    timePlayedDiv.innerHTML = '';

    // Tydliggör vad som ska visas som rubrik
		nameDiv.textContent = 'Name';
		wordLengthDiv.textContent = 'Incorrect Guesses'; // byte plats på denna med 77 'Incorrect Guesses';
		incorrectGuessesDiv.textContent = 'Score';   // byte plats på denna med 76 'Score'
		scoreDiv.textContent = 'Result';    // Första
		resultDiv.textContent = 'Word length';  // Andra
		timePlayedDiv.textContent = 'Time/date';

    // Loopa igenom alla sparade poäng och skapa ett nytt element för varje
    sortedScores.forEach((element) => {
        let name = document.createElement("p");
        let result = document.createElement("p");
        let incorrectGuesses = document.createElement("p");
        let wordLength = document.createElement("p");
        let score = document.createElement("p");
        let timePlayed = document.createElement("p");

        // Fyll varje element med rätt värde
        result.innerText = element.result || 'N/A';  // Sätt till 'N/A' om inget resultat finns
        name.innerText = element.name || 'N/A';  // Sätt till 'N/A' om inget namn finns
        incorrectGuesses.innerText = element.incorrectGuesses || '0';  // Om inga felgissningar finns, sätt till 0
		wordLength.innerText = element.wordLength || '0';  // Om ordlängd saknas, sätt till 0
        score.innerText = element.score || '0';  // Om poäng saknas, sätt till 0
        timePlayed.innerText = element.timePlayed || 'N/A';  // Om ingen tid finns, sätt till 'N/A'

       // Lägg till de nya elementen i divarna
			nameDiv.appendChild(name);
			wordLengthDiv.appendChild(wordLength);
			incorrectGuessesDiv.appendChild(incorrectGuesses);
			scoreDiv.appendChild(score);    // Flytta score hit för att visa det innan 'result'
			resultDiv.appendChild(result);  // Resultat kommer nu efter score
			timePlayedDiv.appendChild(timePlayed);
    });
}

// const sortByGuessesButton = document.querySelector('#sort-by-guesses');
// const sortByDateButton = document.querySelector('#sort-by-date');

// sortByGuessesButton.addEventListener('click', () => {

// })



// Användarnamn.
// const playerNameInput = document.getElementById('player-name-input');
// const playButton = document.getElementById('play-button');
// const meddelande = document.getElementById('meddelande');
// const userName = document.querySelector('#username');

const playerNameInput = document.getElementById('player-name-input');
const playButton = document.getElementById('play-button');
const userName = document.querySelector('#meddelande');  // Använd 'meddelande' istället för 'username'

// playButton.addEventListener('click', function () {
// 	const playerName = playerNameInput.value;
// 	userName.innerText = playerName;
// });

playButton.addEventListener('click', function () {
    const playerName = playerNameInput.value;
    userName.innerText = playerName;  // Sätt playerName i 'meddelande'
});


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
parts[0].classList.add('hidden-svg-parts');
parts[1].classList.add('hidden-svg-parts');
parts[2].classList.add('hidden-svg-parts');
parts[3].classList.add('hidden-svg-parts');
parts[4].classList.add('hidden-svg-parts');
parts[5].classList.add('hidden-svg-parts');

//Funktion för varje fel gissning av bokstav.
const incorrectGuessesDisplay = document.querySelector('#incorrectGuesses')
let incorrectGuesses = 0;
incorrectGuessesDisplay.innerText = incorrectGuesses;

export function wrongGuessCounter() {
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

