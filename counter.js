
const scoreElement = document.querySelector('#score');
let score = 0;

function updateScore(points) {
    score += points; 
    scoreElement.innerText = `Score: ${score}`;
	return score;
}


console.log(updateScore(10));

//svg-parts

const parts = [
	document.querySelector('#ground'),
	document.querySelector('#scaffold'),
	document.querySelector('#head'),
	document.querySelector('#body'),
	document.querySelector('#arms'),
	document.querySelector('#legs')
]

let attempts = 6;





/* Score-style-page

name = input.value

const result = document.querySelector('#result');
const win = document.createElement('p');
const lose = document.createElement ('p');

win.innerText = ` Wins: ${}`;
lose.innerText = `Loses: ${}`;

result.appendChild(win);
result.appendChild(lose);

*/
