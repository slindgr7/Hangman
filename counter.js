
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
parts[0].style.visibility = 'hidden';
parts[1].style.visibility = 'hidden';
parts[2].style.visibility = 'hidden';
parts[3].style.visibility = 'hidden';
parts[4].style.visibility = 'hidden';
parts[5].style.visibility = 'hidden';


const incorrectGuessesDisplay = document.querySelector('#incorrectGuesses')
let incorrectGuesses = 0;
incorrectGuessesDisplay.innerText = incorrectGuesses;

function wrongGuessCounter() {
	incorrectGuesses += 1;
	incorrectGuessesDisplay.innerText = incorrectGuesses;

	if (incorrectGuesses === 1) {
		parts[0].style.visibility = 'visible';
	} 	
	else if (incorrectGuesses === 2) {
		parts[1].style.visibility = 'visible';
		
	} else if (incorrectGuesses === 3) {
		parts[2].style.visibility = 'visible';
		
	}
	else if (incorrectGuesses === 4) {
		parts[3].style.visibility = 'visible';
		
	}
	else if (incorrectGuesses === 5) {
		parts[4].style.visibility = 'visible';
		
	}
	else if (incorrectGuesses === 6){
		parts[5].style.visibility = 'visible';
		console.log('Game Over visas!');
		
	}
}


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
