function gameOver() {
    let playerName = localStorage.getItem('playerName');
    let wordLength = randomWord.length;
    let incorrectGuesses = document.querySelector('#incorrectGuesses').innerText;
    
    const todaysDate = new Date();
    const timePlayed = `${todaysDate.getHours()}:${todaysDate.getMinutes()} ${todaysDate.getDate()}/${todaysDate.getMonth()+1}`;
    
    saveScore(playerName, incorrectGuesses, wordLength, 'lost', score, timePlayed);

	 document.querySelector('.gameover').style.display = 'flex';
	 saveScore(playerName, incorrectGuesses, wordLength, 'lost', score, timePlayed);
}


function gameWon() {
    score += 10;  
    let playerName = localStorage.getItem('playerName');
    let wordLength = randomWord.length;
    let incorrectGuesses = document.querySelector('#incorrectGuesses').innerText;
    
    const todaysDate = new Date();
    const timePlayed = `${todaysDate.getHours()}:${todaysDate.getMinutes()} ${todaysDate.getDate()}/${todaysDate.getMonth()+1}`;
    
    saveScore(playerName, incorrectGuesses, wordLength, 'won', score, timePlayed);

	document.querySelector('.gameover').style.display = 'flex';
	saveScore(playerName, incorrectGuesses, wordLength, 'won', score, timePlayed);
}

function displayScores() {
    let scores = JSON.parse(localStorage.getItem('scores')) || [];

    if (scores.length > 0) {  
        let scoreList = '';
        scores.forEach(score => {
            scoreList += `<li>Spelare: ${score.name}, Felgissningar: ${score.incorrectGuesses}, Ordlängd: ${score.wordLength}, Poäng: ${score.score}, Tid: ${score.timePlayed}</li>`;
        });
        document.querySelector('.score-container ul').innerHTML = scoreList;
    } else {
        document.querySelector('.score-container ul').innerHTML = "<li>Inga poäng sparade än.</li>";
    }

   
}