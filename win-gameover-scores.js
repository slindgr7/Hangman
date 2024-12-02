import { hideHomeScreenContainer, showGameOverContainer, showWinContainer} from './hide-funcation.js'
import { getRandomWord } from './random-word.js';




export function gameOver(currentPlayer) { 
    let playerName = currentPlayer
    let word = getRandomWord(); // Få det slumpmässiga ordet
    let wordLength = word.length; // Hämta längden på ordet
    let incorrectGuesses = document.querySelector('#incorrectGuesses').innerText; // Hämta antal felgissningar
    
    const todaysDate = new Date();
    const timePlayed = `${todaysDate.getHours()}:${todaysDate.getMinutes()} ${todaysDate.getDate()}/${todaysDate.getMonth()+1}`;
    
    // Spara resultatet som 'lost'
    saveScore(playerName, incorrectGuesses, wordLength, 'lost', 0, timePlayed);

    showGameOverContainer();
    document.querySelector('.gameover-p1').innerText = `Det hemliga ordet var: ${word}`;
    document.querySelector('.gameover-p2').innerText = `Ditt antal gissningar var: ${incorrectGuesses}`;
}

export function gameWon(currentplayer) {
    let playerName = currentplayer
    let word = getRandomWord(); // Få det slumpmässiga ordet
    let wordLength = word.length; // Hämta längden på ordet
    let incorrectGuesses = document.querySelector('#incorrectGuesses').innerText; // Hämta antal felgissningar
    
    const todaysDate = new Date();
    const timePlayed = `${todaysDate.getHours()}:${todaysDate.getMinutes()} ${todaysDate.getDate()}/${todaysDate.getMonth()+1}`;

    // Spara resultatet som 'won'
    saveScore(playerName, incorrectGuesses, wordLength, 'won', 10-incorrectGuesses, timePlayed);

    showWinContainer();
    document.querySelector('.win-p1').innerText = `Du lyckades hitta det hemliga ordet!`;
}

let score = incorrectGuesses-100



// Funktion för att spara poäng till localStorage
function saveScore(playerName, incorrectGuesses, wordLength, result, score, timePlayed) {

    // Resten av koden...

    // Hämta tidigare sparade poäng eller en tom array om det inte finns några
    let allScores = JSON.parse(localStorage.getItem('scores')) || [];

    // Skapa ett nytt score-objekt
    let newScore = {
        name: playerName,
        wordLength: wordLength,
        score: score,
        incorrectGuesses: incorrectGuesses,
        result: result,
        timePlayed: timePlayed
    };

    // Lägg till den nya poängen i listan
    allScores.push(newScore);

    // Spara hela listan tillbaka till localStorage
    localStorage.setItem('scores', JSON.stringify(allScores));

}
  
export { saveScore };