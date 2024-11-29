import {showGameOverContainer, showWinContainer} from './hide-funcation.js'
import { getRandomWord } from './random-word.js';


export function gameOver() {
    let playerName = localStorage.getItem('playerName');
    let wordLength = getRandomWord.length;
    let incorrectGuesses = document.querySelector('#sort-by-guesses')
    
    const todaysDate = new Date();
    const timePlayed = `${todaysDate.getHours()}:${todaysDate.getMinutes()} ${todaysDate.getDate()}/${todaysDate.getMonth()+1}`;
    
    saveScore(playerName, incorrectGuesses, wordLength, 'lost', score, timePlayed);

	
	 saveScore(playerName, incorrectGuesses, wordLength, 'lost', score, timePlayed);
     showGameOverContainer();
     // cant use get randomWord for $ need a variable and not whole fun.
     document.querySelector('.gameover-p1').innerText = `Det hemliga ordet var: ${getRandomWord()}`;
    //  document.querySelector('.gameover-p2').innerText = `Ditt antal gissningar var: ${incorrectGuesses}`;
}

export function gameWon() {
     
    let playerName = localStorage.getItem('playerName');
    let wordLength = getRandomWord.length;
    let incorrectGuesses = document.querySelector('#sort-by-guesses')
    
    const todaysDate = new Date();
    const timePlayed = `${todaysDate.getHours()}:${todaysDate.getMinutes()} ${todaysDate.getDate()}/${todaysDate.getMonth()+1}`;
    

	
	saveScore(playerName, incorrectGuesses, wordLength, 'won', score, timePlayed);
	showWinContainer()
	document.querySelector('.win-p1').innerText = `Du lyckades hitta det hemliga ordet!`;
	// document.querySelector('.win-p2').innerText = `Dina poäng blev: ${score}`;
    
}

// export function displayScores() {
// 	let scores = JSON.parse(localStorage.getItem('scores')) || [];
  
// 	if (scores.length > 0) {  
// 		let scoreList = '';
// 		scores.forEach(score => {
// 			scoreList += `<li>Spelare: ${score.name}, Felgissningar: ${score.incorrectGuesses}, Ordlängd: ${score.wordLength}, Poäng: ${score.score}, Tid: ${score.timePlayed}</li>`;
// 		});
// 		document.querySelector('.score-container ul').innerHTML = scoreList;
// 	} else {
// 		document.querySelector('.score-container ul').innerHTML = "<li>Inga poäng sparade än.</li>";
// 	}
//   }
  
  // Calling the function when the document is loaded
//   document.addEventListener('DOMContentLoaded', () => {
// 	displayScores(); // Call to display the scores when the page loads
//   });


// Funktion för att spara poäng till localStorage
function saveScore(playerName, incorrectGuesses, wordLength, result, score, timePlayed) {

    // Resten av koden...

    // Hämta tidigare sparade poäng eller en tom array om det inte finns några
    let allScores = JSON.parse(localStorage.getItem('scores')) || [];

    // Skapa ett nytt score-objekt
    let newScore = {
        name: playerName,
        incorrectGuesses: incorrectGuesses,
        wordLength: wordLength,
        result: result,
        score: score,
        timePlayed: timePlayed
    };

    // Lägg till den nya poängen i listan
    allScores.push(newScore);

    // Spara hela listan tillbaka till localStorage
    localStorage.setItem('scores', JSON.stringify(allScores));

}
  
export { saveScore };